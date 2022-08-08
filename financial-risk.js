const finacialRiskData = [
    {
        "cpf": "85711574051",
        "brand": "MAPFRE",
        "companies": [
            {
                "companyName": "MAPFRE Financial Risk Mock",
                "cnpjNumber": "12345678901234",
                "policies": [
                    "ae96b143-00ae-4d1c-b00e-20bed164a1f2",
                    "bccac844-104e-11ed-861d-0242ac120002",
                    "c054c3fc-104e-11ed-861d-0242ac120002"
                ]
            }
        ]
    },
    {
        "cpf": "02188705076",
        "brand": "MAPFRE",
        "companies": [
            {
                "companyName": "MAPFRE Financial Risk Mock",
                "cnpjNumber": "12345678901234",
                "policies": [
                    "e00dace0-104e-11ed-861d-0242ac120002"
                ]
            }
        ]
    },
    {
        "cpf": "15387180065",
        "brand": "MAPFRE",
        "companies": [
            {
                "companyName": "MAPFRE Financial Risk Mock",
                "cnpjNumber": "12345678901234",
                "policies": [
                    "071641e8-1050-11ed-861d-0242ac120002",
                    "0d61917e-1050-11ed-861d-0242ac120002",
                    "1510c386-1050-11ed-861d-0242ac120002",
                    "1b53ec64-1050-11ed-861d-0242ac120002"
                ]
            }
        ]
    }
]

const finacialRiskPremiumData = [
    {
        "cpf": "85711574051",
        "paymentsQuantity": 4,
        "amount": {
            "amount": 2000,
            "currency": "BRL"
        },
        "coverages": [
            {
                "branch": "111",
                "code": "LUCRO_BRUTO",
                "description": "string",
                "premiumAmount": {
                    "amount": 2000,
                    "currency": "BRL"
                }
            }
        ],
        "payments": [
            {
                "movementDate": "AAAA-MM-DD",
                "movementType": "LIQUIDACAO_DE_PREMIO",
                "movementOrigin": "EMISSAO_DIRETA",
                "movementPaymentsNumber": 0,
                "amount": {
                    "amount": 2000,
                    "currency": "BRL"
                },
                "maturityDate": "AAAA-MM-DD",
                "tellerId": "string",
                "tellerIdType": "CPF",
                "tellerName": "string",
                "financialInstitutionCode": "string",
                "paymentType": "BOLETO"
            }
        ]
    },
    {
        "cpf": "15387180065",
        "paymentsQuantity": 4,
        "amount": {
            "amount": 2000,
            "currency": "BRL"
        },
        "coverages": [
            {
                "branch": "111",
                "code": "LUCRO_BRUTO",
                "description": "string",
                "premiumAmount": {
                    "amount": 2000,
                    "currency": "BRL"
                }
            }
        ],
        "payments": [
            {
                "movementDate": "AAAA-MM-DD",
                "movementType": "LIQUIDACAO_DE_PREMIO",
                "movementOrigin": "EMISSAO_DIRETA",
                "movementPaymentsNumber": 0,
                "amount": {
                    "amount": 2000,
                    "currency": "BRL"
                },
                "maturityDate": "AAAA-MM-DD",
                "tellerId": "string",
                "tellerIdType": "CPF",
                "tellerName": "string",
                "financialInstitutionCode": "string",
                "paymentType": "BOLETO"
            }
        ]
    },
    {
        "cpf": "02188705076",
        "paymentsQuantity": 4,
        "amount": {
            "amount": 2000,
            "currency": "BRL"
        },
        "coverages": [
            {
                "branch": "111",
                "code": "LUCRO_BRUTO",
                "description": "string",
                "premiumAmount": {
                    "amount": 2000,
                    "currency": "BRL"
                }
            }
        ],
        "payments": [
            {
                "movementDate": "AAAA-MM-DD",
                "movementType": "LIQUIDACAO_DE_PREMIO",
                "movementOrigin": "EMISSAO_DIRETA",
                "movementPaymentsNumber": 0,
                "amount": {
                    "amount": 2000,
                    "currency": "BRL"
                },
                "maturityDate": "AAAA-MM-DD",
                "tellerId": "string",
                "tellerIdType": "CPF",
                "tellerName": "string",
                "financialInstitutionCode": "string",
                "paymentType": "BOLETO"
            }
        ]
    }
]

const finacialRiskClaimData = [
    {
        "cpf": "85711574051",
        "identification": "string",
        "documentationDeliveryDate": "AAAA-MM-DD",
        "status": "ABERTO",
        "statusAlterationDate": "AAAA-MM-DD",
        "occurrenceDate": "AAAA-MM-DD",
        "warningDate": "AAAA-MM-DD",
        "thirdPartyClaimDate": "AAAA-MM-DD",
        "amount": {
            "amount": 2000,
            "currency": "BRL"
        },
        "denialJustification": "RISCO_EXCLUIDO",
        "denialJustificationDescription": "string",
        "coverages": [
            {
                "insuredObjectId": "string",
                "branch": "111",
                "code": "LUCRO_BRUTO",
                "description": "string",
                "warningDate": "2022-05-01",
                "thirdPartyClaimDate": "2022-05-01"
            }
        ]
    },
    {
        "cpf": "02188705076",
        "identification": "string",
        "documentationDeliveryDate": "AAAA-MM-DD",
        "status": "ABERTO",
        "statusAlterationDate": "AAAA-MM-DD",
        "occurrenceDate": "AAAA-MM-DD",
        "warningDate": "AAAA-MM-DD",
        "thirdPartyClaimDate": "AAAA-MM-DD",
        "amount": {
            "amount": 2000,
            "currency": "BRL"
        },
        "denialJustification": "RISCO_EXCLUIDO",
        "denialJustificationDescription": "string",
        "coverages": [
            {
                "insuredObjectId": "string",
                "branch": "111",
                "code": "LUCRO_BRUTO",
                "description": "string",
                "warningDate": "2022-05-01",
                "thirdPartyClaimDate": "2022-05-01"
            }
        ]
    },
    {
        "cpf": "15387180065",
        "identification": "string",
        "documentationDeliveryDate": "AAAA-MM-DD",
        "status": "ABERTO",
        "statusAlterationDate": "AAAA-MM-DD",
        "occurrenceDate": "AAAA-MM-DD",
        "warningDate": "AAAA-MM-DD",
        "thirdPartyClaimDate": "AAAA-MM-DD",
        "amount": {
            "amount": 2000,
            "currency": "BRL"
        },
        "denialJustification": "RISCO_EXCLUIDO",
        "denialJustificationDescription": "string",
        "coverages": [
            {
                "insuredObjectId": "string",
                "branch": "111",
                "code": "LUCRO_BRUTO",
                "description": "string",
                "warningDate": "2022-05-01",
                "thirdPartyClaimDate": "2022-05-01"
            }
        ]
    }
]

const finacialRiskPolicyInfoData = [
    {
        "documentType": "APOLICE_INDIVIDUAL",
        "cpf": "85711574051",
        "susepProcessNumber": "string",
        "groupCertificateId": "string",
        "issuanceType": "EMISSAO_PROPRIA",
        "issuanceDate": "AAAA-MM-DD",
        "termStartDate": "AAAA-MM-DD",
        "termEndDate": "AAAA-MM-DD",
        "leadInsurerCode": "string",
        "leadInsurerPolicyId": "string",
        "maxLMG": {
            "amount": 2000,
            "currency": "BRL"
        },
        "proposalId": "string",
        "insureds": [
            {
                "identification": "85711574051",
                "identificationType": "CPF",
                "name": "Nome Sobrenome",
                "postCode": "10000000",
                "email": "string",
                "city": "string",
                "state": "string",
                "country": "BRA",
                "address": "string"
            }
        ],
        "beneficiaries": [
            {
                "identification": "12345678900",
                "identificationType": "CPF",
                "name": "Nome Sobrenome",
                "postCode": "10000000",
                "email": "string",
                "city": "string",
                "state": "string",
                "country": "BRA",
                "address": "string"
            }
        ],
        "principals": [
            {
                "identification": "12345678900",
                "identificationType": "CPF",
                "name": "Nome Sobrenome",
                "postCode": "10000000",
                "email": "string",
                "city": "string",
                "state": "string",
                "country": "BRA",
                "address": "string"
            }
        ],
        "intermediaries": [
            {
                "type": "REPRESENTANTE",
                "identification": "12345678900",
                "brokerId": "string",
                "identificationType": "CPF",
                "name": "Nome Sobrenome",
                "postCode": "10000000",
                "city": "string",
                "state": "string",
                "country": "BRA",
                "address": "string"
            }
        ],
        "insuredObjects": [
            {
                "identification": "string",
                "type": "CONTRATO",
                "typeAdditionalInfo": "string",
                "description": "string",
                "amount": {
                    "amount": 2000,
                    "currency": "BRL"
                },
                "coverages": [
                    {
                        "branch": "111",
                        "code": "LUCRO_BRUTO",
                        "description": "string",
                        "internalCode": "string",
                        "susepProcessNumber": "string",
                        "LMI": {
                            "amount": 2000,
                            "currency": "BRL"
                        },
                        "isLMISublimit": true,
                        "termStartDate": "AAAA-MM-DD",
                        "termEndDate": "AAAA-MM-DD",
                        "isMainCoverage": true,
                        "feature": "MASSIFICADOS",
                        "type": "PARAMETRICO",
                        "gracePeriod": 0,
                        "gracePeriodicity": "DIA",
                        "gracePeriodCountingMethod": "DIAS_UTEIS",
                        "gracePeriodStartDate": "AAAA-MM-DD",
                        "gracePeriodEndDate": "AAAA-MM-DD"
                    }
                ]
            }
        ],
        "coverages": [
            {
                "branch": "111",
                "code": "LUCRO_BRUTO",
                "description": "string",
                "deductible": {
                    "type": "DEDUTIVEL",
                    "typeAdditionalInfo": "string",
                    "amount": {
                        "amount": 2000,
                        "currency": "BRL"
                    },
                    "period": 10,
                    "periodicity": "DIA",
                    "periodCountingMethod": "DIAS_UTEIS",
                    "periodStartDate": "2022-05-16",
                    "periodEndDate": "2022-05-17",
                    "description": "Franquia de exemplo"
                },
                "POS": {
                    "applicationType": "VALOR",
                    "description": "Descrição de exemplo",
                    "minValue": {
                        "amount": 2000,
                        "currency": "BRL"
                    },
                    "maxValue": {
                        "amount": 2000,
                        "currency": "BRL"
                    },
                    "percentage": 10
                }
            }
        ],
        "coinsuranceRetainedPercentage": 10,
        "coinsurers": [
            {
                "identification": "string",
                "cededPercentage": 10
            }
        ],
        "branchInfo": {
            "basicCoverageIndex": "SIMPLES",
            "insuredObjects": [
                {
                    "identification": "string",
                    "propertyType": "CASA",
                    "structuringType": "CONDOMINIO_VERTICAL",
                    "postCode": "10000000",
                    "businessActivity": "1234567"
                }
            ]
        }
    },
    {
        "documentType": "APOLICE_INDIVIDUAL",
        "cpf": "02188705076",
        "susepProcessNumber": "string",
        "groupCertificateId": "string",
        "issuanceType": "EMISSAO_PROPRIA",
        "issuanceDate": "AAAA-MM-DD",
        "termStartDate": "AAAA-MM-DD",
        "termEndDate": "AAAA-MM-DD",
        "leadInsurerCode": "string",
        "leadInsurerPolicyId": "string",
        "maxLMG": {
            "amount": 2000,
            "currency": "BRL"
        },
        "proposalId": "string",
        "insureds": [
            {
                "identification": "02188705076",
                "identificationType": "CPF",
                "name": "Nome Sobrenome",
                "postCode": "10000000",
                "email": "string",
                "city": "string",
                "state": "string",
                "country": "BRA",
                "address": "string"
            }
        ],
        "beneficiaries": [
            {
                "identification": "12345678900",
                "identificationType": "CPF",
                "name": "Nome Sobrenome",
                "postCode": "10000000",
                "email": "string",
                "city": "string",
                "state": "string",
                "country": "BRA",
                "address": "string"
            }
        ],
        "principals": [
            {
                "identification": "12345678900",
                "identificationType": "CPF",
                "name": "Nome Sobrenome",
                "postCode": "10000000",
                "email": "string",
                "city": "string",
                "state": "string",
                "country": "BRA",
                "address": "string"
            }
        ],
        "intermediaries": [
            {
                "type": "REPRESENTANTE",
                "identification": "12345678900",
                "brokerId": "string",
                "identificationType": "CPF",
                "name": "Nome Sobrenome",
                "postCode": "10000000",
                "city": "string",
                "state": "string",
                "country": "BRA",
                "address": "string"
            }
        ],
        "insuredObjects": [
            {
                "identification": "string",
                "type": "CONTRATO",
                "typeAdditionalInfo": "string",
                "description": "string",
                "amount": {
                    "amount": 2000,
                    "currency": "BRL"
                },
                "coverages": [
                    {
                        "branch": "111",
                        "code": "LUCRO_BRUTO",
                        "description": "string",
                        "internalCode": "string",
                        "susepProcessNumber": "string",
                        "LMI": {
                            "amount": 2000,
                            "currency": "BRL"
                        },
                        "isLMISublimit": true,
                        "termStartDate": "AAAA-MM-DD",
                        "termEndDate": "AAAA-MM-DD",
                        "isMainCoverage": true,
                        "feature": "MASSIFICADOS",
                        "type": "PARAMETRICO",
                        "gracePeriod": 0,
                        "gracePeriodicity": "DIA",
                        "gracePeriodCountingMethod": "DIAS_UTEIS",
                        "gracePeriodStartDate": "AAAA-MM-DD",
                        "gracePeriodEndDate": "AAAA-MM-DD"
                    }
                ]
            }
        ],
        "coverages": [
            {
                "branch": "111",
                "code": "LUCRO_BRUTO",
                "description": "string",
                "deductible": {
                    "type": "DEDUTIVEL",
                    "typeAdditionalInfo": "string",
                    "amount": {
                        "amount": 2000,
                        "currency": "BRL"
                    },
                    "period": 10,
                    "periodicity": "DIA",
                    "periodCountingMethod": "DIAS_UTEIS",
                    "periodStartDate": "2022-05-16",
                    "periodEndDate": "2022-05-17",
                    "description": "Franquia de exemplo"
                },
                "POS": {
                    "applicationType": "VALOR",
                    "description": "Descrição de exemplo",
                    "minValue": {
                        "amount": 2000,
                        "currency": "BRL"
                    },
                    "maxValue": {
                        "amount": 2000,
                        "currency": "BRL"
                    },
                    "percentage": 10
                }
            }
        ],
        "coinsuranceRetainedPercentage": 10,
        "coinsurers": [
            {
                "identification": "string",
                "cededPercentage": 10
            }
        ],
        "branchInfo": {
            "basicCoverageIndex": "SIMPLES",
            "insuredObjects": [
                {
                    "identification": "string",
                    "propertyType": "CASA",
                    "structuringType": "CONDOMINIO_VERTICAL",
                    "postCode": "10000000",
                    "businessActivity": "1234567"
                }
            ]
        }
    }
]

exports.getfinancialRisk = (req, res, next) => {
    const { cpf } = req.params

    const filteredData = finacialRiskData.filter(item => item.cpf === cpf)

    res.json(filteredData)
};

exports.getfinancialRiskClaim = (req, res, next) => {
    const { cpf } = req.params

    const filteredData = finacialRiskClaimData.filter(item => item.cpf === cpf)

    res.json(filteredData)
};

exports.getfinancialRiskPolicyInfo = (req, res, next) => {
    const { cpf } = req.params

    const filteredData = finacialRiskPolicyInfoData.filter(item => item.cpf === cpf)

    res.json(filteredData)
};

exports.getfinancialRiskPremium = (req, res, next) => {
    const { cpf } = req.params

    const filteredData = finacialRiskPremiumData.filter(item => item.cpf === cpf)

    res.json(filteredData)
};