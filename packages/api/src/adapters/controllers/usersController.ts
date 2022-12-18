import { NextFunction, Request, Response } from 'express'
import logger from '../../config/logger'
import { User } from '../../models/User'
import { UserSchoolLike } from '../../models/UserSchoolLike'
import { MongooseStore } from '../../types/MongooseStore'
import { InternalError, ResourceNotFoundError } from '../../utils/error'
import UserRepositoryImpl from '../respositories/userRepository'
import UserSchoolLikesRepositoryImpl from '../respositories/userSchoolLikeRepository'
import AddUserSchoolLikeToUserUsecaseImpl, {
  AddUserSchoolLikeToUserUsecase,
} from '../usecases/addUserSchoolLikeToUserUsecase'
import CreateNewUserSchoolLikeUsecaseImpl, {
  CreateNewUserSchoolLikeUsecase,
} from '../usecases/createNewUserSchoolLikeUsecase'
import CreateNewUserUsecaseImpl, {
  CreateNewUserUsecase,
} from '../usecases/createNewUserUsecase'
import DeleteUserSchoolLikeUsecaseImpl, {
  DeleteUserSchoolLikeUsecase,
} from '../usecases/deleteUserSchoolLikeUsecase'
import GetUserUsecaseImpl, { GetUserUsecase } from '../usecases/getUserUsecase'
import RemoveUserSchoolLikeFromUserUsecaseImpl, {
  RemoveUserSchoolLikeFromUserUsecase,
} from '../usecases/removeUserSchoolLikeFromUserUsecase'

export default class UserController {
  private createNewUserUsecase: CreateNewUserUsecase
  private getUserUsecase: GetUserUsecase
  private createNewUserSchoolLikeUsecase: CreateNewUserSchoolLikeUsecase
  private addUserSchoolLikeUsecase: AddUserSchoolLikeToUserUsecase
  private removeUserSchoolLikeFromUserUsecase: RemoveUserSchoolLikeFromUserUsecase
  private deleteUserSchoolLikeUsecase: DeleteUserSchoolLikeUsecase

  constructor({
    userStore,
    userSchoolLikeStore,
  }: {
    userStore: MongooseStore<User>
    userSchoolLikeStore: MongooseStore<UserSchoolLike>
  }) {
    const userRepository = new UserRepositoryImpl(userStore)
    const userSchoolLikeRepository = new UserSchoolLikesRepositoryImpl(
      userSchoolLikeStore
    )

    this.createNewUserUsecase = new CreateNewUserUsecaseImpl(userRepository)
    this.getUserUsecase = new GetUserUsecaseImpl(userRepository)
    this.createNewUserSchoolLikeUsecase =
      new CreateNewUserSchoolLikeUsecaseImpl(userSchoolLikeRepository)
    this.addUserSchoolLikeUsecase = new AddUserSchoolLikeToUserUsecaseImpl(
      userRepository
    )
    this.removeUserSchoolLikeFromUserUsecase =
      new RemoveUserSchoolLikeFromUserUsecaseImpl(userRepository)
    this.deleteUserSchoolLikeUsecase = new DeleteUserSchoolLikeUsecaseImpl(
      userSchoolLikeRepository
    )
  }

  signUp = async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body

    try {
      const newUser = await this.createNewUserUsecase.call({
        ...user,
        userId: user.uid,
        thumbnail: user.photoUrl,
      })
      res
        .status(201)
        .json({ message: 'new user created', userId: newUser?.userId })
    } catch (error) {
      logger.error(error)
      next(new InternalError())
    }
  }

  signIn = async (req: Request, res: Response, next: NextFunction) => {
    const { email, email_verified, picture, user_id } = req.firebaseToken as any
    const isGoogleSignIn = req.header('X-Is-Google-SignIn')

    try {
      const user = await this.getUserUsecase.call(user_id)

      if (user) {
        res.status(200).json({ message: 'user signed in', user })
      } else if (isGoogleSignIn) {
        const newUser = await this.createNewUserUsecase.call({
          email,
          userId: user_id,
          thumbnail: picture,
          emailVerified: email_verified,
        })

        res
          .status(201)
          .json({ message: 'new user created', userId: newUser?.userId })
      } else {
        const errorMessage = 'Invalid signin call.'
        logger.error(errorMessage)
        next(new InternalError(errorMessage))
      }
    } catch (error) {
      logger.error(error)
      next(new ResourceNotFoundError())
    }
  }

  likeSchool = async (req: Request, res: Response, next: NextFunction) => {
    const { user_id: userId } = req.firebaseToken as any
    const ipeds_unitid = req.query.ipeds_unitid as string

    try {
      const user = await this.getUserUsecase.call(userId)
      if (user) {
        await this.createNewUserSchoolLikeUsecase.call({
          userId,
          ipeds_unitid,
        })
        await this.addUserSchoolLikeUsecase.call({ userId, ipeds_unitid })
        res.status(200).json({
          message: 'school liked!',
          ipeds_unitid,
        })
      } else {
        const errorMessage = `User with ID: ${userId} could not be found`
        logger.error(errorMessage)
        next(new ResourceNotFoundError(errorMessage))
      }
    } catch (error) {
      logger.error(error)
      next(new InternalError())
    }
  }

  unlikeSchool = async (req: Request, res: Response, next: NextFunction) => {
    const { user_id: userId } = req.firebaseToken as any
    const ipeds_unitid = req.query.ipeds_unitid as string

    try {
      const user = await this.getUserUsecase.call(userId) // verify whether user with userId exists or not
      if (user) {
        await this.deleteUserSchoolLikeUsecase.call({ userId, ipeds_unitid })
        const updatedUser = await this.removeUserSchoolLikeFromUserUsecase.call(
          {
            userId,
            ipeds_unitid,
          }
        )

        res.status(200).json({ message: 'school unliked.', user: updatedUser })
      } else {
        const errorMessage = 'user not found'
        logger.error(errorMessage)
        next(new ResourceNotFoundError(errorMessage))
      }
    } catch (error) {
      logger.error(error)
      next(new InternalError())
    }
  }
}
