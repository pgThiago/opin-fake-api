const express = require('express');
const cors = require('cors');
const app = express();
const { getPatrimonial, getPatrimonialClaim, getPatrimonialPolicyInfo, getPatrimonialPremium } = require('./patrimonial')
const { getAuto, getAutoClaim, getAutoPolicyInfo, getAutoPremium } = require('./auto')
const { getAviation, getAviationClaim, getAviationPolicyInfo, getAviationPremium } = require('./aviation')
const { getfinancialRisk, getfinancialRiskClaim, getfinancialRiskPolicyInfo, getfinancialRiskPremium } = require('./financial-risk')
const { getNautical, getNauticalClaim, getNauticalPolicyInfo, getNauticalPremium } = require('./nautical')
const { getPetroleum, getPetroleumClaim, getPetroleumPolicyInfo, getPetroleumPremium } = require('./pretroleum')
const { getResponsibility, getResponsibilityClaim, getResponsibilityPolicyInfo, getResponsibilityPremium } = require('./responsibility')
const { getRural, getRuralClaim, getRuralPolicyInfo, getRuralPremium } = require('./rural')

app.use(cors());
app.use(express.json());

app.get('/patrimonial/:cpf', (req, res) => getPatrimonial(req, res))
app.get('/patrimonial/:cpf/premium', (req, res) => getPatrimonialPremium(req, res))
app.get('/patrimonial/:cpf/policy-info', (req, res) => getPatrimonialPolicyInfo(req, res))
app.get('/patrimonial/:cpf/claim', (req, res) => getPatrimonialClaim(req, res))

app.get('/auto/:cpf', (req, res) => getAuto(req, res))
app.get('/auto/:cpf/premium', (req, res) => getAutoPremium(req, res))
app.get('/auto/:cpf/policy-info', (req, res) => getAutoPolicyInfo(req, res))
app.get('/auto/:cpf/claim', (req, res) => getAutoClaim(req, res))

app.get('/aviation/:cpf', (req, res) => getAviation(req, res))
app.get('/aviation/:cpf/premium', (req, res) => getAviationPremium(req, res))
app.get('/aviation/:cpf/policy-info', (req, res) => getAviationPolicyInfo(req, res))
app.get('/aviation/:cpf/claim', (req, res) => getAviationClaim(req, res))

app.get('/financial-risk/:cpf', (req, res) => getfinancialRisk(req, res))
app.get('/financial-risk/:cpf/premium', (req, res) => getfinancialRiskPremium(req, res))
app.get('/financial-risk/:cpf/policy-info', (req, res) => getfinancialRiskPolicyInfo(req, res))
app.get('/financial-risk/:cpf/claim', (req, res) => getfinancialRiskClaim(req, res))

app.get('/nautical/:cpf', (req, res) => getNautical(req, res))
app.get('/nautical/:cpf/premium', (req, res) => getNauticalPremium(req, res))
app.get('/nautical/:cpf/policy-info', (req, res) => getNauticalPolicyInfo(req, res))
app.get('/nautical/:cpf/claim', (req, res) => getNauticalClaim(req, res))

app.get('/petroleum/:cpf', (req, res) => getPetroleum(req, res))
app.get('/petroleum/:cpf/premium', (req, res) => getPetroleumPremium(req, res))
app.get('/petroleum/:cpf/policy-info', (req, res) => getPetroleumPolicyInfo(req, res))
app.get('/petroleum/:cpf/claim', (req, res) => getPetroleumClaim(req, res))

app.get('/responsibility/:cpf', (req, res) => getResponsibility(req, res))
app.get('/responsibility/:cpf/premium', (req, res) => getResponsibilityPremium(req, res))
app.get('/responsibility/:cpf/policy-info', (req, res) => getResponsibilityPolicyInfo(req, res))
app.get('/responsibility/:cpf/claim', (req, res) => getResponsibilityClaim(req, res))

app.get('/rural/:cpf', (req, res) => getRural(req, res))
app.get('/rural/:cpf/premium', (req, res) => getRuralPremium(req, res))
app.get('/rural/:cpf/policy-info', (req, res) => getRuralPolicyInfo(req, res))
app.get('/rural/:cpf/claim', (req, res) => getRuralClaim(req, res))



app.listen(process.env.PORT || 80);