import { School } from '../../models/Schools'
import { KeyValueObject } from '../../types/common'
import { MongooseStore } from '../../types/MongooseStore'

export interface SchoolsRepository {
  getSchoolCount: (filter: KeyValueObject) => Promise<number>

  getSchoolPaginated: (
    filter: KeyValueObject,
    sort: KeyValueObject,
    { page, schoolsPerPage }: { page: number; schoolsPerPage?: number }
  ) => Promise<School[] | null>
}

export default class SchoolsRepositoryImpl implements SchoolsRepository {
  constructor(private readonly schoolStore: MongooseStore<School>) {}

  public getSchoolCount = (filter: KeyValueObject): Promise<number> => {
    return this.schoolStore.find(filter).countDocuments().exec()
  }

  public getSchoolPaginated(
    filter: KeyValueObject,
    sort: KeyValueObject,
    { page, schoolsPerPage }: { page: number; schoolsPerPage?: number }
  ): Promise<School[] | null> {
    const validSchoolsPerPage = schoolsPerPage ?? 10
    return this.schoolStore
      .find(filter)
      .sort(sort)
      .skip((page - 1) * validSchoolsPerPage)
      .limit(validSchoolsPerPage)
      .exec()
  }
}
