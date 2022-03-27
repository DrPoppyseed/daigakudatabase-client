import express from 'express'
import UserSchoolLikeController from '../adapters/controllers/userSchoolLikeController'
import UserSchoolLikeImpl from '../drivers/databases/userSchoolLikeStoreImpl'

const userRouter = express.Router()

const userSchoolLikeController = new UserSchoolLikeController(
  UserSchoolLikeImpl
)

userRouter.get('/likes', userSchoolLikeController.getUserLikes)

export default userRouter
