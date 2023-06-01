const transportData = [
  {
    cpf: '02325899926',
    brand: 'MAPFRE',
    companies: [
      {
        companyName: 'MAPFRE Transport Mock',
        cnpjNumber: '12345678901234',
        policies: ['f762dcb3-5b5d-54ff-988f-93defd8dd01b'],
      },
    ],
  },
  {
    cpf: '02188705076',
    brand: 'MAPFRE',
    companies: [
      {
        companyName: 'MAPFRE Transport Mock',
        cnpjNumber: '12345678901234',
        policies: ['e00dace0-104e-11ed-861d-0242ac120002'],
      },
    ],
  },
]

const transportPremiumData = [
  {
    policyId: 'e00dace0-104e-11ed-861d-0242ac120002',
    paymentsQuantity: 4,
    amount: {
      amount: 2000,
      currency: 'BRL',
    },
    coverages: [
      {
        branch: '0111',
        code: 'ACIDENTES_PESSOAIS_COM_PASSAGEIROS',
        description: 'string',
        premiumAmount: {
          amount: 2000,
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
          amount: 2000,
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
  {
    policyId: 'f762dcb3-5b5d-54ff-988f-93defd8dd01b',
    paymentsQuantity: 4,
    amount: {
      amount: 2000,
      currency: 'BRL',
    },
    coverages: [
      {
        branch: '0111',
        code: 'ACIDENTES_PESSOAIS_COM_PASSAGEIROS',
        description: 'string',
        premiumAmount: {
          amount: 2000,
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
          amount: 2000,
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

const transportClaimData = [
  {
    policyId: 'e00dace0-104e-11ed-861d-0242ac120002',
    identification: 'string',
    documentationDeliveryDate: '2022-12-31',
    status: 'ABERTO',
    statusAlterationDate: '2022-12-31',
    occurrenceDate: '2022-12-31',
    warningDate: '2022-12-31',
    thirdPartyClaimDate: '2022-12-31',
    amount: {
      amount: 2000,
      currency: 'BRL',
    },
    denialJustification: 'RISCO_EXCLUIDO',
    denialJustificationDescription: 'string',
    coverages: [
      {
        insuredObjectId: 'string',
        branch: '0111',
        code: 'ACIDENTES_PESSOAIS_COM_PASSAGEIROS',
        description: 'string',
        warningDate: '2022-12-31',
        thirdPartyClaimDate: '2022-12-31',
      },
    ],
  },
  {
    policyId: 'f762dcb3-5b5d-54ff-988f-93defd8dd01b',
    identification: 'string',
    documentationDeliveryDate: '2022-12-31',
    status: 'ABERTO',
    statusAlterationDate: '2022-12-31',
    occurrenceDate: '2022-12-31',
    warningDate: '2022-12-31',
    thirdPartyClaimDate: '2022-12-31',
    amount: {
      amount: 2000,
      currency: 'BRL',
    },
    denialJustification: 'RISCO_EXCLUIDO',
    denialJustificationDescription: 'string',
    coverages: [
      {
        insuredObjectId: 'string',
        branch: '0111',
        code: 'ACIDENTES_PESSOAIS_COM_PASSAGEIROS',
        description: 'string',
        warningDate: '2022-12-31',
        thirdPartyClaimDate: '2022-12-31',
      },
    ],
  },
]

const transportPolicyInfoData = [
  {
    policyId: 'e00dace0-104e-11ed-861d-0242ac120002',
    documentType: 'APOLICE_INDIVIDUAL',
    policyId: '111111',
    susepProcessNumber: 'string',
    groupCertificateId: 'string',
    issuanceType: 'EMISSAO_PROPRIA',
    issuanceDate: '2022-12-31',
    termStartDate: '2022-12-31',
    termEndDate: '2022-12-31',
    leadInsurerCode: 'string',
    leadInsurerPolicyId: 'string',
    maxLMG: {
      amount: 2000,
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
          amount: 2000,
          currency: 'BRL',
        },
        coverages: [
          {
            branch: '0111',
            code: 'ACIDENTES_PESSOAIS_COM_PASSAGEIROS',
            description: 'string',
            internalCode: 'string',
            susepProcessNumber: 'string',
            LMI: {
              amount: 2000,
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
        code: 'ACIDENTES_PESSOAIS_COM_PASSAGEIROS',
        description: 'string',
        deductible: {
          type: 'DEDUTIVEL',
          typeAdditionalInfo: 'string',
          amount: {
            amount: 2000,
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
            amount: 2000,
            currency: 'BRL',
          },
          maxValue: {
            amount: 2000,
            currency: 'BRL',
          },
          percentage: 10,
        },
      },
    ],
    coinsuranceRetainedPercentage: 10,
    coinsurers: [
      {
        identification: 'string',
        cededPercentage: 10,
      },
    ],
    branchInfo: {
      endorsements: [
        {
          travelType: 'INTERNACIONAL_IMPORTACAO',
          transportType: 'AEREO',
          shipmentsNumber: 10,
          branch: '0111',
          shipmentsPremium: {
            amount: 2000,
            currency: 'BRL',
          },
          shipmentsPremiumBRL: 2000,
          shipmentsInsuredsAmount: {
            amount: 2000,
            currency: 'BRL',
          },
          minInsuredAmount: {
            amount: 2000,
            currency: 'BRL',
          },
          maxInsuredAmount: {
            amount: 2000,
            currency: 'BRL',
          },
        },
      ],
    },
  },
  {
    policyId: 'f762dcb3-5b5d-54ff-988f-93defd8dd01b',
    documentType: 'APOLICE_INDIVIDUAL',
    policyId: '111111',
    susepProcessNumber: 'string',
    groupCertificateId: 'string',
    issuanceType: 'EMISSAO_PROPRIA',
    issuanceDate: '2022-12-31',
    termStartDate: '2022-12-31',
    termEndDate: '2022-12-31',
    leadInsurerCode: 'string',
    leadInsurerPolicyId: 'string',
    maxLMG: {
      amount: 2000,
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
          amount: 2000,
          currency: 'BRL',
        },
        coverages: [
          {
            branch: '0111',
            code: 'ACIDENTES_PESSOAIS_COM_PASSAGEIROS',
            description: 'string',
            internalCode: 'string',
            susepProcessNumber: 'string',
            LMI: {
              amount: 2000,
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
        code: 'ACIDENTES_PESSOAIS_COM_PASSAGEIROS',
        description: 'string',
        deductible: {
          type: 'DEDUTIVEL',
          typeAdditionalInfo: 'string',
          amount: {
            amount: 2000,
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
            amount: 2000,
            currency: 'BRL',
          },
          maxValue: {
            amount: 2000,
            currency: 'BRL',
          },
          percentage: 10,
        },
      },
    ],
    coinsuranceRetainedPercentage: 10,
    coinsurers: [
      {
        identification: 'string',
        cededPercentage: 10,
      },
    ],
    branchInfo: {
      endorsements: [
        {
          travelType: 'INTERNACIONAL_IMPORTACAO',
          transportType: 'AEREO',
          shipmentsNumber: 10,
          branch: '0111',
          shipmentsPremium: {
            amount: 2000,
            currency: 'BRL',
          },
          shipmentsPremiumBRL: 2000,
          shipmentsInsuredsAmount: {
            amount: 2000,
            currency: 'BRL',
          },
          minInsuredAmount: {
            amount: 2000,
            currency: 'BRL',
          },
          maxInsuredAmount: {
            amount: 2000,
            currency: 'BRL',
          },
        },
      ],
    },
  },
]

exports.getTransport = (req, res, next) => {
  const { cpf } = req.params

  const filteredData = transportData
    .filter((item) => item.cpf === cpf)
    .map((i) => {
      const { ...rest } = i
      return rest
    })

  res.json(filteredData)
}

exports.getTransportClaim = (req, res, next) => {
  const { policyId } = req.params

  const filteredData = transportClaimData
    .filter((item) => item.policyId === policyId)
    .map((i) => {
      const { ...rest } = i
      return rest
    })

  res.json(filteredData)
}

exports.getTransportPolicyInfo = (req, res, next) => {
  const { policyId } = req.params

  const filteredData = transportPolicyInfoData.find(
    (item) => item.policyId === policyId,
  )

  if (filteredData) {
    const { ...rest } = filteredData
    res.json(rest)
  }

  res.json()
}

exports.getTransportPremium = (req, res, next) => {
  const { policyId } = req.params

  const filteredData = transportPremiumData.find(
    (item) => item.policyId === policyId,
  )

  if (filteredData) {
    const { ...rest } = filteredData
    res.json(rest)
  }

  res.json()
}
