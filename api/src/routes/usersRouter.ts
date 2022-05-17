import express from 'express'
import UserController from '../adapters/controllers/usersController'
import UserSchoolLikeStoreImpl from '../drivers/databases/userSchoolLikeStoreImpl'
import UserStoreImpl from '../drivers/databases/userStoreImpl'
import authenticateJWT from '../middleware/authenticateJWT'
import { shallowVerify } from '../middleware/shallowVerify'

const usersRouter = express.Router()

const userStore = UserStoreImpl
const userSchoolLikeStore = UserSchoolLikeStoreImpl
const userController = new UserController({
  userStore,
  userSchoolLikeStore,
})

usersRouter.put('/', authenticateJWT, shallowVerify, userController.signUp)

usersRouter.get('/', authenticateJWT, shallowVerify, userController.signIn)

usersRouter.get(
  '/like',
  authenticateJWT,
  shallowVerify,
  userController.likeSchool
)

usersRouter.get(
  '/unlike',
  authenticateJWT,
  shallowVerify,
  userController.unlikeSchool
)

export default usersRouter
