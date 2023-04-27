import axios from 'axios'
import { NextFunction, Request, Response } from 'express'

interface APIResponse {
  cpf?: string
  policyId?: string
}

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

export function GetByCPF(req: Request, res: Response, next: NextFunction) {
  const { cpf } = req.query

  const alreadyHasData =
    res.locals?.responseData && res.locals.responseData.length

  if (!cpf || alreadyHasData) return next()

  console.log('get - cpf')

  const data = res.locals.data as APIResponse[]

  const filteredData = data
    .filter((item) => item.cpf === cpf)
    .map((item) => {
      const { cpf, ...rest } = item
      return rest
    })

  res.locals.responseData = filteredData
  next()
}

export function GetByPolicyId(req: Request, res: Response, next: NextFunction) {
  const { policyId } = req.query
  const alreadyHasData =
    res.locals?.responseData && res.locals.responseData.length

  if (!policyId || alreadyHasData) return next()

  console.log('get - policyId')

  const data = res.locals.data as APIResponse[]

  const filteredData = data
    .filter((item) => item.policyId === policyId)
    .map((item) => {
      const { cpf, policyId, ...rest } = item
      return rest
    })

  res.locals.responseData = filteredData
  next()
}
