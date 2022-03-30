import { Request, Response, NextFunction } from 'express'

const handleError = (
  error: any,
  req: Request,
  res: Response,
  _: NextFunction
) => {
  const status = error.statusCode || 500
  const { message } = error
  const { data } = error
  res.status(status).json({
    message,
    data,
  })
}

export default handleError
