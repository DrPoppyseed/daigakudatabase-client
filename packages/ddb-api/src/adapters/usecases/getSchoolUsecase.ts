import { School } from '../../models/Schools'
import { SchoolsRepository } from '../respositories/schoolsRepository'

export interface GetSchoolUsecase {
  call: (ff_name: string) => Promise<School | null>
}

export default class GetSchoolUsecaseImpl implements GetSchoolUsecase {
  constructor(private readonly schoolsRepository: SchoolsRepository) {}

  public call = (ff_name: string): Promise<School | null> =>
    this.schoolsRepository.getSchool(ff_name)
}
