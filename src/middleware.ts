import axios from 'axios'
import { NextFunction, Request, Response } from 'express'
import { APIResponse } from './@types/response'

export function ValidateQuery(req: Request, res: Response, next: NextFunction) {
  const { cpf, policyId } = req.query

  if (!cpf && !policyId) {
    res.json({
      error: 'Missing query parameters',
    })
  }

  next()
}

export function ValidatePath(req: Request, res: Response, next: NextFunction) {
  const [, endpoint, resource] = req.path.split('/')

  if (!endpoint || !resource) {
    res.status(400).json({
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
    return res.status(400).json({
      error: 'An problem ocurred on get S3 object',
      calledUrl: e.config.url || undefined,
    })
  }
}
