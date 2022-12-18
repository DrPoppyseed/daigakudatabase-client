import { School } from '../../models/Schools'
import { KeyValueObject } from '../../types/common'
import { SchoolsRepository } from '../respositories/schoolsRepository'

export interface GetSchoolsForPageUsecase {
  call: (
    filter: KeyValueObject,
    sort: KeyValueObject,
    {
      page,
      schoolsPerPage,
    }: {
      page: number
      schoolsPerPage?: number
    }
  ) => Promise<School[] | null>
}

export default class GetSchoolsForPageUsecaseImpl
  implements GetSchoolsForPageUsecase
{
  constructor(private readonly schoolsRepository: SchoolsRepository) {}

  public call = (
    filter: KeyValueObject,
    sort: KeyValueObject,
    { page, schoolsPerPage }: { page: number; schoolsPerPage?: number }
  ): Promise<School[] | null> => this.schoolsRepository.getSchoolPaginated(filter, sort, {
      page,
      schoolsPerPage,
    })
}
