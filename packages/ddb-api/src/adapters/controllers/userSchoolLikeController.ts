import { NextFunction, Request, Response } from 'express'
import logger from '../../config/logger'
import { UserSchoolLike } from '../../models/UserSchoolLike'
import { MongooseStore } from '../../types/MongooseStore'
import { InternalError } from '../../utils/error'
import UserSchoolLikesRepositoryImpl from '../respositories/userSchoolLikeRepository'
import GetUserSchoolLikesUsecaseImpl, {
  GetUserSchoolLikesUsecase,
} from '../usecases/getUserSchoolLikesUsecase'

export default class UserSchoolLikeController {
  private getUserSchoolLikesUsecase: GetUserSchoolLikesUsecase

  constructor(userSchoolLikeStoreClient: MongooseStore<UserSchoolLike>) {
    const userSchoolLikesRepository = new UserSchoolLikesRepositoryImpl(
      userSchoolLikeStoreClient
    )

    this.getUserSchoolLikesUsecase = new GetUserSchoolLikesUsecaseImpl(
      userSchoolLikesRepository
    )
  }

  getUserLikes = async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.body

    try {
      const schoolLikes = await this.getUserSchoolLikesUsecase.call(userId)
      const likedSchoolIds = schoolLikes?.map(el => el.ipeds_unitid)
      res.status(200).json({
        schoolIds: likedSchoolIds,
      })
    } catch (error) {
      logger.error(error)
      next(new InternalError())
    }
  }
}
