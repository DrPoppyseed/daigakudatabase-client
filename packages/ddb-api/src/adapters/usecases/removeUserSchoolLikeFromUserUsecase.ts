import { User } from '../../../../ddb-shared/models/User'
import { UserSchoolLike } from '../../../../ddb-shared/models/UserSchoolLike'
import { UserRepository } from '../respositories/userRepository'

export interface RemoveUserSchoolLikeFromUserUsecase {
  call: ({ userId, ipeds_unitid }: UserSchoolLike) => Promise<User | null>
}

export default class RemoveUserSchoolLikeFromUserUsecaseImpl
  implements RemoveUserSchoolLikeFromUserUsecase
{
  constructor(private readonly userRepository: UserRepository) {}

  call = (userSchoolLike: UserSchoolLike): Promise<User | null> =>
    this.userRepository.removeUserSchoolLike(userSchoolLike)
}
