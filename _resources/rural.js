const ruralData = [
  {
    cpf: '02325899926',
    brand: 'MAPFRE',
    companies: [
      {
        companyName: 'MAPFRE Rural Mock',
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
        companyName: 'MAPFRE Rural Mock',
        cnpjNumber: '12345678901234',
        policies: ['e00dace0-104e-11ed-861d-0242ac120002'],
      },
    ],
  },
  {
    cpf: '15387180065',
    brand: 'MAPFRE',
    companies: [
      {
        companyName: 'MAPFRE Rural Mock',
        cnpjNumber: '12345678901234',
        policies: ['071641e8-1050-11ed-861d-0242ac120002'],
      },
    ],
  },
]

const ruralPremiumData = [
  {
    policyId: 'f762dcb3-5b5d-54ff-988f-93defd8dd01b',
    cpf: '02325899926',
    paymentsQuantity: 4,
    amount: {
      amount: 2000,
      currency: 'BRL',
    },
    coverages: [
      {
        branch: '111',
        code: 'GRANIZO',
        description: 'string',
        premiumAmount: {
          amount: 2000,
          currency: 'BRL',
        },
      },
    ],
    payments: [
      {
        movementDate: 'AAAA-MM-DD',
        movementType: 'LIQUIDACAO_DE_PREMIO',
        movementOrigin: 'EMISSAO_DIRETA',
        movementPaymentsNumber: 0,
        amount: {
          amount: 2000,
          currency: 'BRL',
        },
        maturityDate: 'AAAA-MM-DD',
        tellerId: 'string',
        tellerIdType: 'CPF',
        tellerName: 'string',
        financialInstitutionCode: 'string',
        paymentType: 'BOLETO',
      },
    ],
  },
  {
    cpf: '15387180065',
    policyId: '071641e8-1050-11ed-861d-0242ac120002',
    paymentsQuantity: 4,
    amount: {
      amount: 2000,
      currency: 'BRL',
    },
    coverages: [
      {
        branch: '111',
        code: 'GRANIZO',
        description: 'string',
        premiumAmount: {
          amount: 2000,
          currency: 'BRL',
        },
      },
    ],
    payments: [
      {
        movementDate: 'AAAA-MM-DD',
        movementType: 'LIQUIDACAO_DE_PREMIO',
        movementOrigin: 'EMISSAO_DIRETA',
        movementPaymentsNumber: 0,
        amount: {
          amount: 2000,
          currency: 'BRL',
        },
        maturityDate: 'AAAA-MM-DD',
        tellerId: 'string',
        tellerIdType: 'CPF',
        tellerName: 'string',
        financialInstitutionCode: 'string',
        paymentType: 'BOLETO',
      },
    ],
  },
  {
    cpf: '02188705076',
    policyId: 'e00dace0-104e-11ed-861d-0242ac120002',
    paymentsQuantity: 4,
    amount: {
      amount: 2000,
      currency: 'BRL',
    },
    coverages: [
      {
        branch: '111',
        code: 'GRANIZO',
        description: 'string',
        premiumAmount: {
          amount: 2000,
          currency: 'BRL',
        },
      },
    ],
    payments: [
      {
        movementDate: 'AAAA-MM-DD',
        movementType: 'LIQUIDACAO_DE_PREMIO',
        movementOrigin: 'EMISSAO_DIRETA',
        movementPaymentsNumber: 0,
        amount: {
          amount: 2000,
          currency: 'BRL',
        },
        maturityDate: 'AAAA-MM-DD',
        tellerId: 'string',
        tellerIdType: 'CPF',
        tellerName: 'string',
        financialInstitutionCode: 'string',
        paymentType: 'BOLETO',
      },
    ],
  },
]

const ruralClaimData = [
  {
    policyId: 'f762dcb3-5b5d-54ff-988f-93defd8dd01b',
    cpf: '02325899926',
    identification: 'string',
    documentationDeliveryDate: 'AAAA-MM-DD',
    status: 'ABERTO',
    statusAlterationDate: 'AAAA-MM-DD',
    occurrenceDate: 'AAAA-MM-DD',
    warningDate: 'AAAA-MM-DD',
    thirdPartyClaimDate: 'AAAA-MM-DD',
    amount: {
      amount: 2000,
      currency: 'BRL',
    },
    denialJustification: 'RISCO_EXCLUIDO',
    denialJustificationDescription: 'string',
    coverages: [
      {
        insuredObjectId: 'string',
        branch: '111',
        code: 'GRANIZO',
        description: 'string',
        warningDate: '2022-05-01',
        thirdPartyClaimDate: '2022-05-01',
      },
    ],
    branchInfo: {
      surveyDate: 'AAAA-MM-DD',
      surveyAddress: 'string',
      surveyCountrySubDivision: 'SP',
      surveyPostCode: '10000000',
      surveyCountryCode: 'BRA',
      surveyorIdType: 'CPF',
      surveyorId: '40',
      surveyorName: 'string',
    },
  },
  {
    cpf: '02188705076',
    policyId: 'e00dace0-104e-11ed-861d-0242ac120002',
    identification: 'string',
    documentationDeliveryDate: 'AAAA-MM-DD',
    status: 'ABERTO',
    statusAlterationDate: 'AAAA-MM-DD',
    occurrenceDate: 'AAAA-MM-DD',
    warningDate: 'AAAA-MM-DD',
    thirdPartyClaimDate: 'AAAA-MM-DD',
    amount: {
      amount: 2000,
      currency: 'BRL',
    },
    denialJustification: 'RISCO_EXCLUIDO',
    denialJustificationDescription: 'string',
    coverages: [
      {
        insuredObjectId: 'string',
        branch: '111',
        code: 'GRANIZO',
        description: 'string',
        warningDate: '2022-05-01',
        thirdPartyClaimDate: '2022-05-01',
      },
    ],
    branchInfo: {
      surveyDate: 'AAAA-MM-DD',
      surveyAddress: 'string',
      surveyCountrySubDivision: 'SP',
      surveyPostCode: '10000000',
      surveyCountryCode: 'BRA',
      surveyorIdType: 'CPF',
      surveyorId: '40',
      surveyorName: 'string',
    },
  },
  {
    cpf: '15387180065',
    policyId: '071641e8-1050-11ed-861d-0242ac120002',
    identification: 'string',
    documentationDeliveryDate: 'AAAA-MM-DD',
    status: 'ABERTO',
    statusAlterationDate: 'AAAA-MM-DD',
    occurrenceDate: 'AAAA-MM-DD',
    warningDate: 'AAAA-MM-DD',
    thirdPartyClaimDate: 'AAAA-MM-DD',
    amount: {
      amount: 2000,
      currency: 'BRL',
    },
    denialJustification: 'RISCO_EXCLUIDO',
    denialJustificationDescription: 'string',
    coverages: [
      {
        insuredObjectId: 'string',
        branch: '111',
        code: 'GRANIZO',
        description: 'string',
        warningDate: '2022-05-01',
        thirdPartyClaimDate: '2022-05-01',
      },
    ],
    branchInfo: {
      surveyDate: 'AAAA-MM-DD',
      surveyAddress: 'string',
      surveyCountrySubDivision: 'SP',
      surveyPostCode: '10000000',
      surveyCountryCode: 'BRA',
      surveyorIdType: 'CPF',
      surveyorId: '40',
      surveyorName: 'string',
    },
  },
]

const ruralPolicyInfoData = [
  {
    documentType: 'APOLICE_INDIVIDUAL',
    cpf: '02325899926',
    policyId: 'f762dcb3-5b5d-54ff-988f-93defd8dd01b',
    susepProcessNumber: 'string',
    groupCertificateId: 'string',
    issuanceType: 'EMISSAO_PROPRIA',
    issuanceDate: 'AAAA-MM-DD',
    termStartDate: 'AAAA-MM-DD',
    termEndDate: 'AAAA-MM-DD',
    leadInsurerCode: 'string',
    leadInsurerPolicyId: 'string',
    maxLMG: {
      amount: 2000,
      currency: 'BRL',
    },
    proposalId: 'string',
    insureds: [
      {
        identification: '02325899926',
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
        postCode: '10000000',
        email: 'string',
        city: 'string',
        state: 'string',
        country: 'BRA',
        address: 'string',
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
            branch: '111',
            code: 'GRANIZO',
            description: 'string',
            internalCode: 'string',
            susepProcessNumber: 'string',
            LMI: {
              amount: 2000,
              currency: 'BRL',
            },
            isLMISublimit: true,
            termStartDate: 'AAAA-MM-DD',
            termEndDate: 'AAAA-MM-DD',
            isMainCoverage: true,
            feature: 'MASSIFICADOS',
            type: 'PARAMETRICO',
            gracePeriod: 0,
            gracePeriodicity: 'DIA',
            gracePeriodCountingMethod: 'DIAS_UTEIS',
            gracePeriodStartDate: 'AAAA-MM-DD',
            gracePeriodEndDate: 'AAAA-MM-DD',
          },
        ],
      },
    ],
    coverages: [
      {
        branch: '111',
        code: 'GRANIZO',
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
      insuredObjects: [
        {
          identification: 'string',
          isFESRParticipant: true,
          subventionAmount: {
            amount: 2000,
            currency: 'BRL',
          },
          subventionType: 'AC',
          safeArea: 2000,
          unitMeasure: 'HECTAR',
          cultureCode: 11111111,
          flockCode: 'BOVINOS',
          forestCode: 'PINUS',
          surveyDate: 'AAAA-MM-DD',
          surveyAddress: 'string',
          surveyCountrySubDivision: 'SP',
          surveyPostCode: '10000000',
          surveyCountryCode: 'BRA',
          surveyorIdType: 'CPF',
          surveyorId: '40',
          surveyorName: 'string',
          modelType: 'CLIMATICOS',
          areAssetsCovered: true,
          coveredAnimalDestination: 'CONSUMO',
          animalType: 'ELITE',
        },
      ],
    },
  },
  {
    documentType: 'APOLICE_INDIVIDUAL',
    cpf: '02188705076',
    policyId: 'e00dace0-104e-11ed-861d-0242ac120002',
    susepProcessNumber: 'string',
    groupCertificateId: 'string',
    issuanceType: 'EMISSAO_PROPRIA',
    issuanceDate: 'AAAA-MM-DD',
    termStartDate: 'AAAA-MM-DD',
    termEndDate: 'AAAA-MM-DD',
    leadInsurerCode: 'string',
    leadInsurerPolicyId: 'string',
    maxLMG: {
      amount: 2000,
      currency: 'BRL',
    },
    proposalId: 'string',
    insureds: [
      {
        identification: '02188705076',
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
        postCode: '10000000',
        email: 'string',
        city: 'string',
        state: 'string',
        country: 'BRA',
        address: 'string',
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
            branch: '111',
            code: 'GRANIZO',
            description: 'string',
            internalCode: 'string',
            susepProcessNumber: 'string',
            LMI: {
              amount: 2000,
              currency: 'BRL',
            },
            isLMISublimit: true,
            termStartDate: 'AAAA-MM-DD',
            termEndDate: 'AAAA-MM-DD',
            isMainCoverage: true,
            feature: 'MASSIFICADOS',
            type: 'PARAMETRICO',
            gracePeriod: 0,
            gracePeriodicity: 'DIA',
            gracePeriodCountingMethod: 'DIAS_UTEIS',
            gracePeriodStartDate: 'AAAA-MM-DD',
            gracePeriodEndDate: 'AAAA-MM-DD',
          },
        ],
      },
    ],
    coverages: [
      {
        branch: '111',
        code: 'GRANIZO',
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
      insuredObjects: [
        {
          identification: 'string',
          isFESRParticipant: true,
          subventionAmount: {
            amount: 2000,
            currency: 'BRL',
          },
          subventionType: 'AC',
          safeArea: 2000,
          unitMeasure: 'HECTAR',
          cultureCode: 11111111,
          flockCode: 'BOVINOS',
          forestCode: 'PINUS',
          surveyDate: 'AAAA-MM-DD',
          surveyAddress: 'string',
          surveyCountrySubDivision: 'SP',
          surveyPostCode: '10000000',
          surveyCountryCode: 'BRA',
          surveyorIdType: 'CPF',
          surveyorId: '40',
          surveyorName: 'string',
          modelType: 'CLIMATICOS',
          areAssetsCovered: true,
          coveredAnimalDestination: 'CONSUMO',
          animalType: 'ELITE',
        },
      ],
    },
  },

  {
    documentType: 'APOLICE_INDIVIDUAL',
    cpf: '15387180065',
    policyId: '071641e8-1050-11ed-861d-0242ac120002',
    susepProcessNumber: 'string',
    groupCertificateId: 'string',
    issuanceType: 'EMISSAO_PROPRIA',
    issuanceDate: 'AAAA-MM-DD',
    termStartDate: 'AAAA-MM-DD',
    termEndDate: 'AAAA-MM-DD',
    leadInsurerCode: 'string',
    leadInsurerPolicyId: 'string',
    maxLMG: {
      amount: 2000,
      currency: 'BRL',
    },
    proposalId: 'string',
    insureds: [
      {
        identification: '02188705076',
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
        postCode: '10000000',
        email: 'string',
        city: 'string',
        state: 'string',
        country: 'BRA',
        address: 'string',
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
            branch: '111',
            code: 'GRANIZO',
            description: 'string',
            internalCode: 'string',
            susepProcessNumber: 'string',
            LMI: {
              amount: 2000,
              currency: 'BRL',
            },
            isLMISublimit: true,
            termStartDate: 'AAAA-MM-DD',
            termEndDate: 'AAAA-MM-DD',
            isMainCoverage: true,
            feature: 'MASSIFICADOS',
            type: 'PARAMETRICO',
            gracePeriod: 0,
            gracePeriodicity: 'DIA',
            gracePeriodCountingMethod: 'DIAS_UTEIS',
            gracePeriodStartDate: 'AAAA-MM-DD',
            gracePeriodEndDate: 'AAAA-MM-DD',
          },
        ],
      },
    ],
    coverages: [
      {
        branch: '111',
        code: 'GRANIZO',
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
      insuredObjects: [
        {
          identification: 'string',
          isFESRParticipant: true,
          subventionAmount: {
            amount: 2000,
            currency: 'BRL',
          },
          subventionType: 'AC',
          safeArea: 2000,
          unitMeasure: 'HECTAR',
          cultureCode: 11111111,
          flockCode: 'BOVINOS',
          forestCode: 'PINUS',
          surveyDate: 'AAAA-MM-DD',
          surveyAddress: 'string',
          surveyCountrySubDivision: 'SP',
          surveyPostCode: '10000000',
          surveyCountryCode: 'BRA',
          surveyorIdType: 'CPF',
          surveyorId: '40',
          surveyorName: 'string',
          modelType: 'CLIMATICOS',
          areAssetsCovered: true,
          coveredAnimalDestination: 'CONSUMO',
          animalType: 'ELITE',
        },
      ],
    },
  },
]

exports.getRural = (req, res, next) => {
  const { cpf } = req.params

  const filteredData = ruralData
    .filter((item) => item.cpf === cpf)
    .map((i) => {
      const { cpf, ...rest } = i
      return rest
    })

  res.json(filteredData)
}

exports.getRuralClaim = (req, res, next) => {
  const { policyId } = req.params

  const filteredData = ruralClaimData
    .filter((item) => item.policyId === policyId)
    .map((i) => {
      const { cpf, ...rest } = i
      return rest
    })

  res.json(filteredData)
}

exports.getRuralPolicyInfo = (req, res, next) => {
  const { policyId } = req.params

  const filteredData = ruralPolicyInfoData.find(
    (item) => item.policyId === policyId,
  )

  if (filteredData) {
    const { cpf, ...rest } = filteredData
    res.json(rest)
  }

  res.json()
}

exports.getRuralPremium = (req, res, next) => {
  const { policyId } = req.params

  const filteredData = ruralPremiumData.find(
    (item) => item.policyId === policyId,
  )

  if (filteredData) {
    const { cpf, ...rest } = filteredData
    res.json(rest)
  }

  res.json()
}
