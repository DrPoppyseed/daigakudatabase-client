import { UserSchoolLike } from '../../models/UserSchoolLike'
import { UserSchoolLikeRepository } from '../respositories/userSchoolLikeRepository'

export interface CreateNewUserSchoolLikeUsecase {
  call: ({
    userId,
    ipeds_unitid,
  }: UserSchoolLike) => Promise<UserSchoolLike | null>
}

export default class CreateNewUserSchoolLikeUsecaseImpl
  implements CreateNewUserSchoolLikeUsecase
{
  constructor(
    private readonly userSchoolLikeRepository: UserSchoolLikeRepository
  ) {}

  call = ({ userId, ipeds_unitid }: UserSchoolLike) => {
    return this.userSchoolLikeRepository.createNewUserSchoolLike({
      userId,
      ipeds_unitid,
    })
  }
}
