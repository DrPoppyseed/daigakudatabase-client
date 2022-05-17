import { User } from '../../models/User'
import { UserSchoolLike } from '../../models/UserSchoolLike'
import { MongooseStore } from '../../types/MongooseStore'

export interface UserRepository {
  createNewUser: (user: Partial<User>) => Promise<User | null>

  getUser: (userId: string) => Promise<User | null>

  addUserSchoolLike: ({
    userId,
    ipeds_unitid,
  }: UserSchoolLike) => Promise<User | null>

  removeUserSchoolLike: ({
    userId,
    ipeds_unitid,
  }: UserSchoolLike) => Promise<User | null>
}

export default class UserRepositoryImpl implements UserRepository {
  constructor(private readonly userStore: MongooseStore<User>) {}

  createNewUser = (user: Partial<User>): Promise<User | null> => this.userStore.create(user)

  getUser = (userId: string): Promise<User | null> => this.userStore.findOne({ userId }).exec()

  addUserSchoolLike = ({
    userId,
    ipeds_unitid,
  }: UserSchoolLike): Promise<User | null> => this.userStore
      .findOneAndUpdate(
        { userId },
        { $push: { likedSchools: ipeds_unitid } },
        { new: true, upsert: true }
      )
      .exec()

  removeUserSchoolLike = ({
    userId,
    ipeds_unitid,
  }: UserSchoolLike): Promise<User | null> => this.userStore
      .findOneAndUpdate(
        { userId },
        { $pull: { likedSchools: ipeds_unitid } },
        { new: true, upsert: true }
      )
      .exec()
}
