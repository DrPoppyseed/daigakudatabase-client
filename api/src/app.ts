import dotenv from 'dotenv'

import express, { Request, Response } from 'express'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import admin from 'firebase-admin'
import rateLimit from 'express-rate-limit'
import cors from 'cors'
import mongodb from './config/mongodb'
import routes from './routes/routes'
import handleError from './middleware/handleError'
import morganLogger from './middleware/morganLogger'
import logger from './config/logger'

dotenv.config()

const app = express()

app.use(helmet())
app.set('trust proxy', 1)
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW as string, 10),
  max: parseInt(process.env.RATE_LIMIT_MAX as string, 10),
})
app.use(limiter)

const corsOption = {
  origin: true,
  secure: process.env.NODE_ENV !== 'development',
}

app.use(cors(corsOption))
app.use(cookieParser())
app.use(morganLogger)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

admin.initializeApp({
  credential: admin.credential.cert(
    JSON.parse(process.env.FIREBASE_SA_CREDENTIALS as string)
  ),
})

mongodb()
  .then(() => {
    app.use(routes)

    app.use(handleError)

    app.get('/', (req: Request, res: Response) => {
      logger.info('Console is working properly!')
      res.status(200).send('Server is running!')
    })
  })
  .catch(error => {
    logger.error(error)
  })

export default app
