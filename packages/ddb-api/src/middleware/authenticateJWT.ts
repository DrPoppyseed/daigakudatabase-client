import { NextFunction, Request, Response } from 'express'
import admin from 'firebase-admin'
import logger from '../config/logger'

const authenticateJWT = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization
  const encodedToken = authHeader && authHeader.split(' ')[1]

  if (encodedToken) {
    try {
      req.firebaseToken = await admin.auth().verifyIdToken(encodedToken)
      next()
    } catch (error) {
      req.firebaseToken = undefined
      logger.error(error)
      next()
    }
  } else {
    req.firebaseToken = undefined
    next()
  }
}

export default authenticateJWT
