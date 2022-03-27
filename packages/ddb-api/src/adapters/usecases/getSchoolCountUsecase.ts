import { KeyValueObject } from '../../types/common'
import { SchoolsRepository } from '../respositories/schoolsRepository'

export interface GetSchoolCountUsecase {
  call: (filter: KeyValueObject) => Promise<number>
}

export default class GetSchoolCountUsecaseImpl
  implements GetSchoolCountUsecase
{
  constructor(private readonly schoolsRepository: SchoolsRepository) {}

  call = (filter: KeyValueObject): Promise<number> => {
    return this.schoolsRepository.getSchoolCount(filter)
  }
}
