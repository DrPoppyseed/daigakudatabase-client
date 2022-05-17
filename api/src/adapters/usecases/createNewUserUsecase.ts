import { User } from '../../models/User'
import { UserRepository } from '../respositories/userRepository'

export interface CreateNewUserUsecase {
  call: (userData: Partial<User>) => Promise<User | null>
}

export default class CreateNewUserUsecaseImpl implements CreateNewUserUsecase {
  constructor(private readonly userRepository: UserRepository) {}

  call = async (user: Partial<User>): Promise<User | null> => this.userRepository.createNewUser(user)
}
