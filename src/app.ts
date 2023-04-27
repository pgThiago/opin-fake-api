import cors from 'cors'
import express from 'express'
import { GetData, ValidatePath, ValidateQuery } from './middleware'
import { GetByCPF, GetByPolicyId } from './handlers'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.json({ status: 'ok' }))

app.use(ValidatePath)
app.use(ValidateQuery)

app.use(GetData)

app.use(GetByCPF)
app.use(GetByPolicyId)

app.get('/*', async (req, res) => {
  return res.json(res.locals.responseData)
})

export { app }
