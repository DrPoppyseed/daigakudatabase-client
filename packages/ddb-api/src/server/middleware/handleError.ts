import { Request, Response } from 'express'

const handleError = (error: any, req: Request, res: Response) => {
  const status = error.statusCode || 500
  const { message } = error
  const { data } = error
  res.status(status).json({
    message,
    data,
  })
}

export default handleError
