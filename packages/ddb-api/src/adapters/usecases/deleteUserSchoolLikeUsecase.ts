import { UserSchoolLike } from '../../../../ddb-shared/models/UserSchoolLike'
import { UserSchoolLikeRepository } from '../respositories/userSchoolLikeRepository'

export interface DeleteUserSchoolLikeUsecase {
  call: ({ userId, ipeds_unitid }: UserSchoolLike) => Promise<void>
}

export default class DeleteUserSchoolLikeUsecaseImpl
  implements DeleteUserSchoolLikeUsecase
{
  constructor(
    private readonly userSchoolLikeRepository: UserSchoolLikeRepository
  ) {}

  call = async (userSchoolLike: UserSchoolLike): Promise<void> => {
    await this.userSchoolLikeRepository.deleteUserSchoolLike(userSchoolLike)
  }
}
