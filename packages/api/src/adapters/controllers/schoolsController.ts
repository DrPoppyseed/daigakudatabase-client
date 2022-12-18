import { NextFunction, Request, Response } from 'express'
import queryString from 'query-string'
import logger from '../../config/logger'
import UserSchoolLikeImpl from '../../drivers/databases/userSchoolLikeStoreImpl'
import { School } from '../../models/Schools'
import { KeyValueObject } from '../../types/common'
import { MongooseStore } from '../../types/MongooseStore'
import { InternalError } from '../../utils/error'
import SchoolsRepositoryImpl from '../respositories/schoolsRepository'
import GetSchoolCountUsecaseImpl, {
  GetSchoolCountUsecase,
} from '../usecases/getSchoolCountUsecase'
import GetSchoolsForPageUsecaseImpl, {
  GetSchoolsForPageUsecase,
} from '../usecases/getSchoolsForPageUsecase'

export default class SchoolsController {
  private getSchoolCountUsecase: GetSchoolCountUsecase
  private getSchoolsForPageUsecase: GetSchoolsForPageUsecase

  constructor(schoolStore: MongooseStore<School>) {
    const schoolsRepository = new SchoolsRepositoryImpl(schoolStore)

    this.getSchoolCountUsecase = new GetSchoolCountUsecaseImpl(
      schoolsRepository
    )
    this.getSchoolsForPageUsecase = new GetSchoolsForPageUsecaseImpl(
      schoolsRepository
    )
  }

  private static schoolFilterBuilder = (
    url: string
  ): { mongooseQueries: KeyValueObject; sort: KeyValueObject } => {
    const parsedQuery: KeyValueObject = queryString.parse(url)
    const mongooseQueries: KeyValueObject = {}
    let sort: KeyValueObject = {}
    if (parsedQuery.sortby === 'sat-ascending') {
      mongooseQueries['general.admissions.sat.total_75th_percentile'] = {
        $nin: [null, '-'],
      }
      sort = { 'general.admissions.sat.total_75th_percentile': 1 }
    } else if (parsedQuery.sortby === 'sat-descending') {
      mongooseQueries['general.admissions.sat.total_75th_percentile'] = {
        $nin: [null, '-'],
      }
      sort = { 'general.admissions.sat.total_75th_percentile': -1 }
    } else if (parsedQuery.sortby === 'tuition-ascending') {
      mongooseQueries['general.tuition.out_of_state.2019.tuition'] = {
        $nin: [null, '-'],
      }
      sort = { 'general.tuition.out_of_state.2019.tuition': 1 }
    } else if (parsedQuery.sortby === 'tuition-descending') {
      mongooseQueries['general.tuition.out_of_state.2019.tuition'] = {
        $nin: [null, '-'],
      }
      sort = { 'general.tuition.out_of_state.2019.tuition': -1 }
    }

    // - state
    if (parsedQuery.state !== undefined) {
      mongooseQueries['general.campus.state_postid'] = parsedQuery.state
    }
    // - urban
    if (parsedQuery.urban !== undefined) {
      mongooseQueries['general.campus.urbanization_level'] = {
        $regex: `${parsedQuery.urban
          .charAt(0)
          .toUpperCase()}${parsedQuery.urban.slice(1)}`,
        $options: 'i',
      }
    }
    // - tuition
    if (parsedQuery.tuition !== '0,60000') {
      const tuitionStr = parsedQuery.tuition.split(',')
      mongooseQueries['general.tuition.out_of_state.2019.tuition'] = {
        $gte: parseInt(tuitionStr[0], 10),
        $lte: parseInt(tuitionStr[1], 10),
      }
    }
    // - sat
    if (parsedQuery.sat !== undefined) {
      const satStr = parsedQuery.sat.split(',')
      mongooseQueries['general.admissions.sat.total_75th_percentile'] = {
        $gte: parseInt(satStr[0], 10),
        $lte: parseInt(satStr[1], 10),
      }
    }
    // - year-type
    const yearsQuery = []
    if (parsedQuery.fourYear !== undefined) {
      yearsQuery.push({
        'general.classifications.carnegie_size_category': {
          $regex: 'Four-year',
          $options: 'i',
        },
      })
    }
    if (parsedQuery.twoYear !== undefined) {
      yearsQuery.push({
        'general.classifications.carnegie_size_category': {
          $regex: 'Two-year',
          $options: 'i',
        },
      })
    }
    if (yearsQuery.length > 0) mongooseQueries.$or = yearsQuery
    // - control
    const controlQuery = []
    if (parsedQuery.privateSchool !== undefined) {
      controlQuery.push({
        'general.campus.control': { $regex: 'Private', $options: 'i' },
      })
    }
    if (parsedQuery.publicSchool !== undefined) {
      controlQuery.push({ 'general.campus.control': 'Public' })
    }
    if (controlQuery.length > 0) mongooseQueries.$or = controlQuery

    return { mongooseQueries, sort }
  }

  public getSchools = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const schoolsPerPage = 10
    const page = parseInt(req.query.page as string, 10)
    const token = req.firebaseToken
    const userId = token ? token.user_id : null

    // build query
    const { mongooseQueries, sort } = SchoolsController.schoolFilterBuilder(
      req.url
    )

    try {
      const totalSchoolsFound = await this.getSchoolCountUsecase.call(
        mongooseQueries
      )
      const schoolsFound = await this.getSchoolsForPageUsecase.call(
        mongooseQueries,
        sort,
        { page, schoolsPerPage }
      )

      if (!schoolsFound) {
        const errorMessage = 'Error: failed when getting schools'
        logger.error(errorMessage)
        next(new InternalError())
      }

      let schools
      if (userId) {
        schools = await Promise.all(
          schoolsFound!.map(async school => {
            const isLiked = await UserSchoolLikeImpl.exists({
              userId,
              ipeds_unitid: school.general.ipeds_unitid,
            })
            return { ...school.general, isLiked }
          })
        )
      } else {
        schools = schoolsFound!.map(school => ({
          ...school.general,
          isLiked: false,
        }))
      }
      res.status(200).json({
        message: 'schools found',
        totalSchoolsFound,
        schools,
      })
    } catch (error) {
      logger.error(error)
      next(new InternalError())
    }
  }
}
