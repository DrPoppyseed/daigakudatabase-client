import mongoose from 'mongoose'
import { InternalError } from '../utils/error'
import logger from './logger'

const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING as string)
  } catch (error) {
    logger.error(error)
    throw new InternalError(JSON.stringify(error))
  }
}

export default connect
