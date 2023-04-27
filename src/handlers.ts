import { NextFunction, Request, Response } from 'express'
import { APIResponse } from './@types/response'

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
