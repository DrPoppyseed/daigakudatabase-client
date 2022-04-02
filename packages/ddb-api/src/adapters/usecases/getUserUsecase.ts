import { User } from '../../../../ddb-shared/models/User'
import { UserRepository } from '../respositories/userRepository'

export interface GetUserUsecase {
  call: (userId: string) => Promise<User | null>
}

export default class GetUserUsecaseImpl implements GetUserUsecase {
  constructor(private readonly userRepository: UserRepository) {}

  call = (userId: string): Promise<User | null> =>
    this.userRepository.getUser(userId)
}
