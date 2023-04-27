import cors from 'cors'
import express from 'express'
import {
  GetByCPF,
  GetByPolicyId,
  GetData,
  ValidatePath,
  ValidateQuery,
} from './middleware'

const app = express()

app.use(cors())
app.use(express.json())

app.use(ValidatePath)
app.use(ValidateQuery)

app.use(GetData)

app.use(GetByCPF)
app.use(GetByPolicyId)

app.get('/*', async (req, res) => {
  return res.json(res.locals.responseData)
})

export { app }
