const express = require('express');
const cors = require('cors');
const app = express();
const { getPatrimonial, getClaim, getPolicyInfo, getPremium } = require('./patrimonial')

app.use(cors());
app.use(express.json());

app.get('/patrimonial/:cpf', (req, res) => getPatrimonial(req, res))
app.get('/patrimonial/:cpf/premium', (req, res) => getPremium(req, res))
app.get('/patrimonial/:cpf/policy-info', (req, res) => getPolicyInfo(req, res))
app.get('/patrimonial/:cpf/claim', (req, res) => getClaim(req, res))



app.listen(3333);