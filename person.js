const personData = [
    {
        cpf: '02325899926',
        brand: {
            name: 'MAPFRE',
            companies: [
                {
                    companyName: 'MAPFRE Person Mock',
                    cnpjNumber: '12345678901234',
                    policies: [
                        {
                            productName: 'Produto A Pessoas',
                            policyId: 'f762dcb3-5b5d-54ff-988f-93defd8dd01b',
                        },
                    ],
                },
            ],
        },
    },
]

const personMovementsData = [
    {
        policyId: 'f762dcb3-5b5d-54ff-988f-93defd8dd01b',
        movementContributions: [
            {
                contributionAmount: {
                    amount: '2000.00',
                    unit: {
                        code: 'R$',
                        description: 'BRL',
                    },
                },
                contributionPaymentDate: '2021-05-21',
                contributionExpirationDate: '2021-05-21',
                chargedInAdvanceAmount: {
                    amount: '2000.00',
                    unit: {
                        code: 'R$',
                        description: 'BRL',
                    },
                },
                periodicity: 'MENSAL',
            },
        ],
        movementBenefits: [
            {
                benefitAmount: {
                    amount: '2000.00',
                    unit: {
                        code: 'R$',
                        description: 'BRL',
                    },
                },
                benefitPaymentDate: '2021-05-21',
            },
        ],
    },
]

const personClaimData = [
    {
        policyId: 'f762dcb3-5b5d-54ff-988f-93defd8dd01b',
        status: 'ABERTO',
        warningDate: '2022-12-31',
        warningRegisterDate: '2022-12-31',
        recipientIdentification: '12345678901',
        recipientIdentificationType: 'CPF',
        recipientName: 'Nome Sobrenome',
        recipientClassification: 'SEGURADO',
        recipientBirthDate: '1990-12-31',
        incomeModality: 'RENDA_VITALICIA',
        incomeModalityOthers: 'Outros',
        incomeReversed: true,
        incomeValueUniquePayment: {
            amount: '2000.00',
            unit: {
                code: 'R$',
                description: 'BRL',
            },
        },
        incomeTerm: 'string',
        recipientNumber: 3,
        concessionStartDate: '2020-12-31',
        monetaryUpdateIndex: 'IGPM-FGV',
        monetaryUpdateIndexOthers: 'OUTROS',
        lastUpdateDate: '2020-12-31',
        defermentDueDate: '2025-12-31',
    },
]

const personPolicyInfoData = [
    {
        contractingType: 'COLETIVO',
        policyId: 'f762dcb3-5b5d-54ff-988f-93defd8dd01b',
        certificateId: '67',
        termStartDate: '2022-12-31',
        termEndDate: '2022-12-31',
        withdrawals: [
            {
                occurrenceWithdrawal: true,
                type: 'PARCIAL',
                requestDate: '2020-12-31',
                amount: {
                    amount: '2000.00',
                    unit: {
                        code: 'R$',
                        description: 'BRL',
                    },
                },
                movementDate: '2020-12-31',
                chargingValue: {
                    amount: '2000.00',
                    unit: {
                        code: 'R$',
                        description: 'BRL',
                    },
                },
                withdrawalCause: 'RESGATE_REGULAR',
                FIE: [
                    {
                        FIECNPJ: '12345678901234',
                        FIEName: 'RAZÃO SOCIAL',
                        FIETradeName: 'NOME FANTASIA',
                    },
                ],
            },
        ],
        portabilities: [
            {
                occurrencePortability: true,
                direction: 'ENTRADA',
                type: 'PARCIAL',
                amount: {
                    amount: '2000.00',
                    unit: {
                        code: 'R$',
                        description: 'BRL',
                    },
                },
                requestDate: '2020-12-31',
                movementDate: '2020-12-31',
                chargingValue: {
                    amount: '2000.00',
                    unit: {
                        code: 'R$',
                        description: 'BRL',
                    },
                },
                sourceEntityCode: 'ABC123',
                targetEntityCode: 'ABC123',
                sourceEntitySusepProcessNumber: 'ABC123',
                taxRegime: 'PROGRESSIVO',
                FIE: [
                    {
                        FIECNPJ: '12345678901234',
                        FIEName: 'RAZÃO SOCIAL',
                        FIETradeName: 'NOME FANTASIA',
                        portedType: 'ORIGEM',
                    },
                ],
            },
        ],
        proposalId: 'ABC123',
        insureds: [
            {
                identificationType: 'CPF',
                identificationTypeOthers: 'OUTROS',
                identification: '12345678900',
                name: 'Nome Sobrenome',
                birthDate: '2022-12-31',
                gender: 'MASCULINO',
                postCode: '10000000',
                email: 'string',
                city: 'string',
                state: 'string',
                country: 'BRA',
                address: 'string',
                addressAdditionalInfo: 'Fundos',
            },
        ],
        beneficiaries: [
            {
                identification: '12345678900',
                identificationType: 'CPF',
                identificationTypeOthers: 'OUTROS',
                name: 'Nome Sobrenome',
                participationPercentage: '10.00',
            },
        ],
        intermediaries: [
            {
                type: 'REPRESENTANTE',
                typeOthers: 'OUTROS',
                identification: '12345678900',
                brokerId: 'string',
                identificationType: 'CPF',
                identificationTypeOthers: 'OUTROS',
                name: 'Nome Sobrenome',
                postCode: '10000000',
                city: 'string',
                state: 'string',
                country: 'BRA',
                address: 'string',
            },
        ],
        coverages: [
            {
                branch: '0111',
                planType: 'AVERBADO',
                coverageCode: '1999',
                internalCode: 'string',
                susepProcessNumber: 'string',
                feesTax: 'FORMATO NÃO DEFINIDO',
                paymentPeriod: 'MENSAL',
                grace: [
                    {
                        type: 'RESGATE',
                        gracePeriod: 0,
                        gracePeriodicity: 'DIA',
                        gracePeriodCountingMethod: 'DIAS_UTEIS',
                        gracePeriodStartDate: '2022-12-31',
                        gracePeriodEndDate: '2022-12-31',
                        period: 0,
                        periodType: 'DIA',
                    },
                ],
                pmbacInterestRate: '10.00',
                pmbacMonetaryUpdateIndex: 'IGPM-FGV',
                pmbacMonetaryUpdateIndexOthers: 'OUTROS',
                pmbacIndexLag: 5,
                incomeInterestRate: '10.00',
                pricingForm: 'POR_IDADE',
                pricingFormOthers: 'OUTROS',
                triggerEvent: 'INVALIDEZ',
                triggerEventOthers: 'OUTROS',
                financialtype: 'REPARTICAO_SIMPLES',
                coverageUpdateIndex: 'IGPM-FGV',
                coverageUpdateIndexOthers: 'OUTROS',
                periodicityValue: 5,
                periodicity: 'DIA',
                IndexLag: 5,
                chargedAmount: {
                    amount: '2000.00',
                    unit: {
                        code: 'R$',
                        description: 'BRL',
                    },
                },
                insuredDependentsInclusionClause: 'NAO_HA',
                tripScope: 'NACIONAL',
                insuredCapitalType: 'FIXO',
                moneylenderType: 'BASICO',
                creditor: {
                    identification: '12345678901',
                    identificationType: 'CPF',
                    name: 'string',
                },
                obligations: [
                    {
                        type: 'EMPRESTIMO',
                        typeOthers: 'string',
                    },
                ],
                personIdentification: {
                    identification: '12345678900',
                    identificationType: 'CPF',
                    name: 'Nome Sobrenome',
                },
                insuredCapitalPercentage: '20.00',
                dependents: [
                    {
                        identification: '12345678901234',
                        identificationType: 'CPF',
                        name: 'Nome Sobrenome',
                        kinshipDegree: 'CONJUGE',
                    },
                ],
                educationalInstitution: {
                    identification: '12345678901',
                    identificationType: 'CPF',
                    name: 'Nome Sobrenome',
                },
                benefitAmount: {
                    amount: '2000.00',
                    unit: {
                        code: 'R$',
                        description: 'BRL',
                    },
                },
                plan: 'PGBL',
                planOthers: 'OUTROS',
                planBlock: false,
                structureModality: 'BENEFICIO_DEFINIDO',
                qualifiedProposer: 'SIM',
                biometricTable: '1  - Mortalidade Geral / Beneficiário - AT49 M',
                benefitPaymentModality: 'RENDA',
                financialResultReversal: 'SIM',
                financialResultReversalPercentage: '10.00',
                minimumWarrantyIndex: 'IGP-DI-FGV',
                minimumWarrantyPercentage: '10.00',
                taxRegime: 'PROGRESSIVO',
                calculationBasis: 'MENSAL',
            },
        ],
        conjugatedPlan: true,
        PMBaC: {
            pmbacAmount: {
                amount: '2000.00',
                unit: {
                    code: 'R$',
                    description: 'BRL',
                },
            },
            provisionSurplusAmount: {
                amount: '2000.00',
                unit: {
                    code: 'R$',
                    description: 'BRL',
                },
            },
            FIE: [
                {
                    FIECNPJ: '12345678901234',
                    FIEName: 'RAZÃO SOCIAL',
                    FIETradeName: 'NOME FANTASIA',
                },
            ],
        },
    },
]

exports.getPerson = (req, res, next) => {
    const { cpf } = req.params

    const filteredData = personData
        .filter((item) => item.cpf === cpf)
        .map((i) => {
            const { cpf, ...rest } = i
            return rest
        })

    res.json(filteredData)
}

exports.getPersonClaim = (req, res, next) => {
    const { policyId } = req.params

    const filteredData = personClaimData
        .filter((item) => item.policyId === policyId)

    res.json(filteredData)
}

exports.getPersonPolicyInfo = (req, res, next) => {
    const { policyId } = req.params

    const filteredData = personPolicyInfoData.find((item) => item.policyId === policyId)

    if (filteredData) {
        res.json(filteredData)
    }

    res.json()
}

exports.getPersonMovements = (req, res, next) => {
    const { policyId } = req.params

    const filteredData = personMovementsData.find((item) => item.policyId === policyId)

    if (filteredData) {
        res.json(filteredData)
    }

    res.json()
}
