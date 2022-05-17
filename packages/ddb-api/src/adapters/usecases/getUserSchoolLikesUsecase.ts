import { UserSchoolLike } from '../../../../ddb-shared/models/UserSchoolLike'
import { UserSchoolLikeRepository } from '../respositories/userSchoolLikeRepository'

export interface GetUserSchoolLikesUsecase {
  call: (userId: string) => Promise<UserSchoolLike[] | null>
}

export default class GetUserSchoolLikesUsecaseImpl
  implements GetUserSchoolLikesUsecase
{
  constructor(
    private readonly userSchoolLikesRepository: UserSchoolLikeRepository
  ) {}

  call = async (userId: string): Promise<UserSchoolLike[] | null> =>
    this.userSchoolLikesRepository.getUserSchoolLike(userId)
}
