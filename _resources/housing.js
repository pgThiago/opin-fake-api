const housingData = [
  {
    cpf: '02325899926',
    brand: 'MAPFRE',
    companies: [
      {
        companyName: 'MAPFRE Housing Mock',
        cnpjNumber: '12345678901234',
        policies: ['f762dcb3-5b5d-54ff-988f-93defd8dd01b'],
      },
    ],
  },
]

const housingPremiumData = [
  {
    policyId: 'f762dcb3-5b5d-54ff-988f-93defd8dd01b',
    cpf: '02325899926',
    paymentsQuantity: 4,
    amount: {
      amount: '2000.00',
      currency: 'BRL',
    },
    coverages: [
      {
        branch: '0111',
        code: 'DANOS_ELETRICOS',
        description: 'string',
        premiumAmount: {
          amount: '2000.00',
          currency: 'BRL',
        },
      },
    ],
    payments: [
      {
        movementDate: '2022-12-31',
        movementType: 'LIQUIDACAO_DE_PREMIO',
        movementOrigin: 'EMISSAO_DIRETA',
        movementPaymentsNumber: 0,
        amount: {
          amount: '2000.00',
          currency: 'BRL',
        },
        maturityDate: '2022-12-31',
        tellerId: 'string',
        tellerIdType: 'CPF',
        tellerName: 'string',
        financialInstitutionCode: 'string',
        paymentType: 'BOLETO',
      },
    ],
  },
]

const housingClaimData = [
  {
    policyId: 'f762dcb3-5b5d-54ff-988f-93defd8dd01b',
    cpf: '02325899926',
    identification: 'string',
    documentationDeliveryDate: '2022-12-31',
    status: 'ABERTO',
    statusAlterationDate: '2022-12-31',
    occurrenceDate: '2022-12-31',
    warningDate: '2022-12-31',
    thirdPartyClaimDate: '2022-12-31',
    amount: {
      amount: '2000.00',
      currency: 'BRL',
    },
    denialJustification: 'RISCO_EXCLUIDO',
    denialJustificationDescription: 'string',
    coverages: [
      {
        insuredObjectId: 'string',
        branch: '0111',
        code: 'DANOS_ELETRICOS',
        description: 'string',
        warningDate: '2022-12-31',
        thirdPartyClaimDate: '2022-12-31',
      },
    ],
  },
]

const housingPolicyInfoData = [
  {
    cpf: '02325899926',
    policyId: 'f762dcb3-5b5d-54ff-988f-93defd8dd01b',
    documentType: 'APOLICE_INDIVIDUAL',
    susepProcessNumber: 'string',
    groupCertificateId: 'string',
    issuanceType: 'EMISSAO_PROPRIA',
    issuanceDate: '2022-12-31',
    termStartDate: '2022-12-31',
    termEndDate: '2022-12-31',
    leadInsurerCode: 'string',
    leadInsurerPolicyId: 'string',
    maxLMG: {
      amount: '2000.00',
      currency: 'BRL',
    },
    proposalId: 'string',
    insureds: [
      {
        identification: '12345678900',
        identificationType: 'CPF',
        name: 'Nome Sobrenome',
        postCode: '10000000',
        email: 'string',
        city: 'string',
        state: 'string',
        country: 'BRA',
        address: 'string',
      },
    ],
    beneficiaries: [
      {
        identification: '12345678900',
        identificationType: 'CPF',
        name: 'Nome Sobrenome',
      },
    ],
    principals: [
      {
        identification: '12345678900',
        identificationType: 'CPF',
        name: 'Nome Sobrenome',
        postCode: '10000000',
        email: 'string',
        city: 'string',
        state: 'string',
        country: 'BRA',
        address: 'string',
      },
    ],
    intermediaries: [
      {
        type: 'REPRESENTANTE',
        identification: '12345678900',
        brokerId: 'string',
        identificationType: 'CPF',
        name: 'Nome Sobrenome',
        postCode: '10000000',
        city: 'string',
        state: 'string',
        country: 'BRA',
        address: 'string',
      },
    ],
    insuredObjects: [
      {
        identification: 'string',
        type: 'CONTRATO',
        typeAdditionalInfo: 'string',
        description: 'string',
        amount: {
          amount: '2000.00',
          currency: 'BRL',
        },
        coverages: [
          {
            branch: '0111',
            code: 'DANOS_ELETRICOS',
            description: 'string',
            internalCode: 'string',
            susepProcessNumber: 'string',
            LMI: {
              amount: '2000.00',
              currency: 'BRL',
            },
            isLMISublimit: true,
            termStartDate: '2022-12-31',
            termEndDate: '2022-12-31',
            isMainCoverage: true,
            feature: 'MASSIFICADOS',
            type: 'PARAMETRICO',
            gracePeriod: 0,
            gracePeriodicity: 'DIA',
            gracePeriodCountingMethod: 'DIAS_UTEIS',
            gracePeriodStartDate: '2022-12-31',
            gracePeriodEndDate: '2022-12-31',
          },
        ],
      },
    ],
    coverages: [
      {
        branch: '0111',
        code: 'DANOS_ELETRICOS',
        description: 'string',
        deductible: {
          type: 'DEDUTIVEL',
          typeAdditionalInfo: 'string',
          amount: {
            amount: '2000.00',
            currency: 'BRL',
          },
          period: 10,
          periodicity: 'DIA',
          periodCountingMethod: 'DIAS_UTEIS',
          periodStartDate: '2022-05-16',
          periodEndDate: '2022-05-17',
          description: 'Franquia de exemplo',
        },
        POS: {
          applicationType: 'VALOR',
          description: 'Descrição de exemplo',
          minValue: {
            amount: '2000.00',
            currency: 'BRL',
          },
          maxValue: {
            amount: '2000.00',
            currency: 'BRL',
          },
          percentage: '10.00',
        },
      },
    ],
    coinsuranceRetainedPercentage: '10.00',
    coinsurers: [
      {
        identification: 'string',
        cededPercentage: '10.00',
      },
    ],
    branchInfo: {
      insuredObjects: [
        {
          identification: 'string',
          propertyType: 'CASA',
          propertyTypeAdditionalInfo: 'string',
          postCode: '10000000',
          interestRate: '10.00',
          costRate: '10.00',
          updateIndexOthers: 'Índice de atualização',
          lenders: ['12345678901234'],
        },
      ],
      insureds: [
        {
          identification: '12345678900',
          identificationType: 'CPF',
          birthDate: '2022-12-31',
        },
      ],
    },
  },
]

exports.getHousing = (req, res, next) => {
  const { cpf } = req.params

  const filteredData = housingData
    .filter((item) => item.cpf === cpf)
    .map((i) => {
      const { cpf, ...rest } = i
      return rest
    })

  res.json(filteredData)
}

exports.getHousingClaim = (req, res, next) => {
  const { policyId } = req.params

  const filteredData = housingClaimData
    .filter((item) => item.policyId === policyId)
    .map((i) => {
      const { cpf, policyId, ...rest } = i
      return rest
    })

  res.json(filteredData)
}

exports.getHousingPolicyInfo = (req, res, next) => {
  const { policyId } = req.params

  const filteredData = housingPolicyInfoData.find(
    (item) => item.policyId === policyId,
  )

  if (filteredData) {
    const { cpf, ...rest } = filteredData
    res.json(rest)
  }

  res.json()
}

exports.getHousingPremium = (req, res, next) => {
  const { policyId } = req.params

  const filteredData = housingPremiumData.find(
    (item) => item.policyId === policyId,
  )

  if (filteredData) {
    const { cpf, policyId, ...rest } = filteredData
    res.json(rest)
  }

  res.json()
}
