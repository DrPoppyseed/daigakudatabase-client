import { UserSchoolLike } from '../../models/UserSchoolLike'
import { MongooseStore } from '../../types/MongooseStore'

export interface UserSchoolLikeRepository {
  getUserSchoolLike: (userId: string) => Promise<UserSchoolLike[] | null>

  createNewUserSchoolLike: ({
    userId,
    ipeds_unitid,
  }: UserSchoolLike) => Promise<UserSchoolLike | null>

  deleteUserSchoolLike: ({
    userId,
    ipeds_unitid,
  }: UserSchoolLike) => Promise<void>
}

export default class UserSchoolLikesRepositoryImpl
  implements UserSchoolLikeRepository
{
  constructor(
    private readonly userSchoolLikeStore: MongooseStore<UserSchoolLike>
  ) {}

  getUserSchoolLike = (userId: string): Promise<UserSchoolLike[] | null> => this.userSchoolLikeStore.find({ user_id: userId }).exec()

  createNewUserSchoolLike = ({
    userId,
    ipeds_unitid,
  }: UserSchoolLike): Promise<UserSchoolLike | null> => this.userSchoolLikeStore.create({ userId, ipeds_unitid })

  deleteUserSchoolLike = async ({
    userId,
    ipeds_unitid,
  }: UserSchoolLike): Promise<void> => {
    await this.userSchoolLikeStore.deleteOne({ userId, ipeds_unitid })
  }
}
