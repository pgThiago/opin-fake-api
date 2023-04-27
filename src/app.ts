import 'express-async-errors'

import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'
import { GetData, ValidatePath, ValidateQuery } from './middleware'
import { GetByCPF, GetByPolicyId } from './handlers'
import { ErrorHandler } from './exceptions/HttpError'

const app = express()

app.use(cors())
app.use(express.json())

// handling Health Check
app.get('/', (req, res) => res.json({ status: 'ok' }))

app.use(ValidatePath)
app.use(ValidateQuery)

app.use(GetData)

app.use(GetByCPF)
app.use(GetByPolicyId)

app.get('/*', async (req, res) => {
  return res.json(res.locals.responseData)
})

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ErrorHandler) {
    const error = err as ErrorHandler
    return res.status(error.statusCode).json({ ...error.errorData })
  }

  if (err.message) {
    return res.status(400).json({
      error: err.message,
    })
  }

  return res.status(500).json({
    error: `Internal Error - ${err.message}`,
  })
})

export { app }
