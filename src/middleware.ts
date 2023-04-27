import axios from 'axios'
import { NextFunction, Request, Response } from 'express'
import { APIResponse } from './@types/response'
import { ErrorHandler } from './exceptions/HttpError'

export function ValidateQuery(req: Request, res: Response, next: NextFunction) {
  const { cpf, policyId } = req.query

  if (!cpf && !policyId) {
    throw new ErrorHandler(400, { error: 'Missing query parameters' })
  }

  next()
}

export function ValidatePath(req: Request, res: Response, next: NextFunction) {
  const [, endpoint, resource] = req.path.split('/')

  if (!endpoint || !resource) {
    throw new ErrorHandler(400, {
      error: 'Bad Path. use as host/<endpoint-name>/<resource>',
    })
  }

  next()
}

export async function GetData(req: Request, res: Response, next: NextFunction) {
  const [, endpoint, resource] = req.path.split('/')

  const url = `https://mock-mapfre-dev.s3.amazonaws.com/objects/${endpoint}/${resource}.json`

  try {
    const response = await axios.get<APIResponse[]>(url)
    const data = response.data

    res.locals.data = data
    next()
  } catch (e: any) {
    throw new ErrorHandler(421, {
      error: 'An problem ocurred on get S3 object',
      calledUrl: e.config.url || undefined,
    })
  }
}
