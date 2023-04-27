const pensionContracts = [
    {
        cpf: '02325899926',
        brand: {
            name: 'MAPFRE',
            companies: [
                {
                    companyName: 'MAPFRE Person Mock',
                    cnpjNumber: '12345678901234',
                    contracts: [
                        {
                            productName: 'Produto A Pessoas',
                            pensionIdentification: 'f762dcb3-5b5d-54ff-988f-93defd8dd01b',
                        },
                    ],
                },
            ],
        },
    },
]

const pensionContractsInfo = [
    {
        pensionIdentification: 'f762dcb3-5b5d-54ff-988f-93defd8dd01b',
        contractingType: 'INDIVIDUAL',
        planType: 'AVERBADO',
        documents: [
            {
                certificateId: '67',
                contractId: '681',
                effectiveDateStart: '2021-05-21',
                effectiveDateEnd: '2021-05-21',
                proposalId: '987',
                insureds: [
                    {
                        documentType: 'CPF',
                        documentTypeOthers: 'OUTROS',
                        documentNumber: '12345678910',
                        name: 'Juan Kaique Cláudio Fernandes',
                        birthDate: '2021-05-21',
                        gender: 'MASCULINO',
                        postCode: '17500001',
                        email: 'nome@br.net',
                        townName: 'Rio de Janeiro',
                        countrySubDivision: 'RJ',
                        countryCode: 'BRA',
                        address: 'Av Naburo Ykesaki, 1270',
                        addressAdditionalInfo: 'Fundos',
                    },
                ],
                beneficiary: [
                    {
                        documentNumber: '12345678910',
                        documentType: 'CPF',
                        documentTypeOthers: 'OUTROS',
                        name: 'Juan Kaique Cláudio Fernandes',
                        participationPercentage: '10.00',
                    },
                ],
                intermediary: [
                    {
                        type: 'CORRETOR',
                        documentNumber: '12345678910',
                        intermediaryId: '12097',
                        documentType: 'CPF',
                        documentTypeOthers: 'OUTROS',
                        name: 'Empresa A',
                        postCode: '17500001',
                        townName: 'Rio de Janeiro',
                        countrySubDivision: 'RJ',
                        countryCode: 'BRA',
                        address: 'Av Naburo Ykesaki, 1270',
                        addressAdditionalInfo: 'Fundos',
                    },
                ],
                plans: [
                    {
                        coverages: [
                            {
                                coverageCode: '1999',
                                susepProcessNumber: '12345',
                                structureModality: 'BENEFICIO_DEFINIDO',
                                benefitAmount: {
                                    amount: '2000.00',
                                    unit: {
                                        code: 'R$',
                                        description: 'BRL',
                                    },
                                },
                                rentsInterestRate: '10.00',
                                periodicity: 'MENSAL',
                                coverageName: 'string',
                                lockedPlan: false,
                                termStartDate: '2021-05-21',
                                termEndDate: '2021-05-21',
                                financialRegime: 'REPARTICAO_SIMPLES',
                                benefitPaymentMethod: 'UNICO',
                                biometricTable: '1  - Mortalidade Geral / Beneficiário - AT49 M',
                                pricingMethod: 'POR_IDADE',
                                pricingMethodDescription: 'OUTROS',
                                events: [
                                    {
                                        eventType: 'INVALIDEZ',
                                        eventTypeOthers: 'OUTROS',
                                        eventInfo: {
                                            eventStatus: 'ABERTO',
                                            eventAlertDate: '2021-05-21',
                                            eventRegisterDate: '2021-05-21',
                                        },
                                    },
                                ],
                                updateIndex: 'IPC-FGV',
                                updateIndexDescription: 'OUTROS',
                                updatePeriodicity: 'PERIDIOCIDADE',
                                updatePeriodicityUnit: 'DIA',
                                updateIndexLagging: 1,
                                contributionAmount: {
                                    amount: '2000.00',
                                    unit: {
                                        code: 'R$',
                                        description: 'BRL',
                                    },
                                },
                                chargedAmount: {
                                    amount: '2000.00',
                                    unit: {
                                        code: 'R$',
                                        description: 'BRL',
                                    },
                                },
                            },
                        ],
                        grace: [
                            {
                                graceType: 'PORTABILIDADE',
                                gracePeriod: 4,
                                gracePeriodicity: 'DIA',
                                dayIndicator: 'UTEIS',
                                gracePeriodStart: '2021-05-21',
                                gracePeriodEnd: '2021-05-21',
                                gracePeriodBetween: 6,
                                gracePeriodBetweenType: 'DIA',
                            },
                        ],
                    },
                ],
            },
        ],
    },
]

const pensionClaim = [
    {
        pensionIdentification: 'f762dcb3-5b5d-54ff-988f-93defd8dd01b',
        beneficiaryDocument: '12345678910',
        beneficiaryDocumentType: 'CPF',
        beneficiaryName: 'NOME BENEFICIARIO',
        beneficiaryCategory: 'SEGURADO',
        beneficiaryBirthDate: '2021-05-21',
        incomeType: 'PAGAMENTO_UNICO',
        incomeTypeDetails: 'Descrição do Tipo de Renda',
        reversedIncome: false,
        incomeAmount: {
            amount: '2000.00',
            unit: {
                code: 'R$',
                description: 'BRL',
            },
        },
        paymentTerms: 'PRAZO',
        benefitAmount: 2,
        grantedDate: '2021-05-21',
        monetaryUpdateIndex: 'IPC-FGV',
        lastUpdateDate: '2021-05-21',
    },
]

const pensionMovements = [
    {
        pensionIdentification: 'f762dcb3-5b5d-54ff-988f-93defd8dd01b',
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

const pensionPortabilities = [
    {
        pensionIdentification: 'f762dcb3-5b5d-54ff-988f-93defd8dd01b',
        hasOccurredPortability: true,
        portabilityInfo: [
            {
                direction: 'ENTRADA',
                type: 'PARCIAL',
                amount: {
                    amount: '2000.00',
                    unit: {
                        code: 'R$',
                        description: 'BRL',
                    },
                },
                requestDate: '2022-05-16T00:00:00.000Z',
                liquidationDate: '2022-05-16T00:00:00.000Z',
                chargingValue: {
                    amount: '2000.00',
                    unit: {
                        code: 'R$',
                        description: 'BRL',
                    },
                },
                sourceEntity: 'string',
                targetEntity: 'string',
                susepProcess: '12345',
            },
        ],
    },
]

const pensionWithdrawals = [
    {
        pensionIdentification: 'f762dcb3-5b5d-54ff-988f-93defd8dd01b',
        withdrawalOccurence: true,
        type: 'PARCIAL',
        requestDate: '2022-05-16T00:00:00.000Z',
        amount: {
            amount: '2000.00',
            unit: {
                code: 'R$',
                description: 'BRL',
            },
        },
        liquidationDate: '2022-05-16T00:00:00.000Z',
        postedChargedAmount: {
            amount: '2000.00',
            unit: {
                code: 'R$',
                description: 'BRL',
            },
        },
        nature: 'RESGATE_REGULAR',
    },
]

exports.getPensionContracts = (req, res, next) => {
    const { cpf } = req.params

    const filteredData = pensionContracts
        .filter((item) => item.cpf === cpf)
        .map((i) => {
            const { cpf, ...rest } = i
            return rest
        })

    res.json(filteredData)
}

exports.getPensionClaim = (req, res, next) => {
    const { pensionIdentification } = req.params

    const filteredData = pensionClaim.filter((item) => item.pensionIdentification === pensionIdentification)

    res.json(filteredData)
}

exports.getPensionContractsInfo = (req, res, next) => {
    const { pensionIdentification } = req.params

    const filteredData = pensionContractsInfo.find((item) => item.pensionIdentification === pensionIdentification)

    if (filteredData) {
        res.json(filteredData)
    }

    res.json()
}

exports.getPensionMovements = (req, res, next) => {
    const { pensionIdentification } = req.params

    const filteredData = pensionMovements.find((item) => item.pensionIdentification === pensionIdentification)

    if (filteredData) {
        res.json(filteredData)
    }

    res.json()
}

exports.getPensionPortabilities = (req, res, next) => {
    const { pensionIdentification } = req.params

    const filteredData = pensionPortabilities.find((item) => item.pensionIdentification === pensionIdentification)

    if (filteredData) {
        res.json(filteredData)
    }

    res.json()
}

exports.getPensionWithdrawals = (req, res, next) => {
    const { pensionIdentification } = req.params

    const filteredData = pensionWithdrawals.filter((item) => item.pensionIdentification === pensionIdentification)

    res.json(filteredData)
}
