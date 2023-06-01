const responsibilityData = [
  {
    cpf: '02325899926',
    brand: 'MAPFRE',
    companies: [
      {
        companyName: 'MAPFRE Responsibility Mock',
        cnpjNumber: '12345678901234',
        policies: ['f762dcb3-5b5d-54ff-988f-93defd8dd01b'],
      },
    ],
  },
]

const responsibilityPremiumData = [
  {
    policyId: 'f762dcb3-5b5d-54ff-988f-93defd8dd01b',
    cpf: '02325899926',
    paymentsQuantity: 4,
    amount: {
      amount: '2000.00',
      unit: {
        code: 'R$',
        description: 'BRL',
      },
    },
    coverages: [
      {
        branch: '0111',
        code: 'DANOS_CAUSADOS_A_TERCEIROS',
        description: 'string',
        premiumAmount: {
          amount: '2000.00',
          unit: {
            code: 'R$',
            description: 'BRL',
          },
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
          unit: {
            code: 'R$',
            description: 'BRL',
          },
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

const responsibilityClaimData = [
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
      unit: {
        code: 'R$',
        description: 'BRL',
      },
    },
    denialJustification: 'RISCO_EXCLUIDO',
    denialJustificationDescription: 'string',
    coverages: [
      {
        insuredObjectId: 'string',
        branch: '0111',
        code: 'DANOS_CAUSADOS_A_TERCEIROS',
        description: 'string',
        warningDate: '2022-12-31',
        thirdPartyClaimDate: '2022-12-31',
      },
    ],
  },
]

const responsibilityPolicyInfoData = [
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
      unit: {
        code: 'R$',
        description: 'BRL',
      },
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
          unit: {
            code: 'R$',
            description: 'BRL',
          },
        },
        coverages: [
          {
            branch: '0111',
            code: 'DANOS_CAUSADOS_A_TERCEIROS',
            description: 'string',
            internalCode: 'string',
            susepProcessNumber: 'string',
            LMI: {
              amount: '2000.00',
              unit: {
                code: 'R$',
                description: 'BRL',
              },
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
        code: 'DANOS_CAUSADOS_A_TERCEIROS',
        description: 'string',
        deductible: {
          type: 'DEDUTIVEL',
          typeAdditionalInfo: 'string',
          amount: {
            amount: '2000.00',
            unit: {
              code: 'R$',
              description: 'BRL',
            },
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
            unit: {
              code: 'R$',
              description: 'BRL',
            },
          },
          maxValue: {
            amount: '2000.00',
            unit: {
              code: 'R$',
              description: 'BRL',
            },
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
      coverages: [
        {
          branch: '0111',
          code: 'DANOS_CAUSADOS_A_TERCEIROS',
          description: 'string',
          type: 'POR_OCORRENCIA',
          typeDescription: 'string',
          retroactivityDate: '2022-12-31',
          retroactivityPeriod: 'string',
          retroactivityTimeUnit: 'DIA',
          retroactivityWorkingDaysIndex: 'DIAS_UTEIS',
          complementaryTermStartDate: '2022-12-31',
          complementaryTermEndDate: '2022-12-31',
          complementaryTerm: 'string',
          complementaryTermTimeUnit: 'DIA',
          complementaryTermWorkingDaysIndex: 'DIAS_UTEIS',
          supplementaryTermStartDate: '2022-12-31',
          supplementaryTermEndDate: '2022-12-31',
          supplementaryTerm: 'string',
          supplementaryTermTimeUnit: 'DIA',
          supplementaryTermWorkingDaysIndex: 'DIAS_UTEIS',
          lawyerRecommendation: 'ESCOLHIDO_PELO_SEGURADO',
          lawyerRecommendationDescription: 'string',
        },
      ],
      insuredObjects: [
        {
          identification: 'string',
          hasComplementaryContract: true,
          complementaryContractAmount: {
            amount: '2000.00',
            unit: {
              code: 'R$',
              description: 'BRL',
            },
          },
          coveragesMaxAmount: {
            amount: '2000.00',
            unit: {
              code: 'R$',
              description: 'BRL',
            },
          },
          coveragesTermStartDate: '2022-12-31',
          coveragesTermEndDate: '2022-12-31',
          coveragesTerm: 100,
          coveragesUnit: 'DIA',
          coveragesWorkingDaysIndex: 'DIAS_UTEIS',
          hasTransportationPollutionDamage: true,
          hasThirdPatyDamage: true,
          professionalClass: 'ADMINISTRADOR_IMOBILIARIO',
          hasRetroactivityApplication: true,
        },
      ],
    },
  },
]

exports.getResponsibility = (req, res, next) => {
  const { cpf } = req.params

  const filteredData = responsibilityData
    .filter((item) => item.cpf === cpf)
    .map((i) => {
      const { cpf, ...rest } = i
      return rest
    })

  res.json(filteredData)
}

exports.getResponsibilityClaim = (req, res, next) => {
  const { policyId } = req.params

  const filteredData = responsibilityClaimData
    .filter((item) => item.policyId === policyId)
    .map((i) => {
      const { cpf, policyId, ...rest } = i
      return rest
    })

  res.json(filteredData)
}

exports.getResponsibilityPolicyInfo = (req, res, next) => {
  const { policyId } = req.params

  const filteredData = responsibilityPolicyInfoData.find(
    (item) => item.policyId === policyId,
  )

  if (filteredData) {
    const { cpf, ...rest } = filteredData
    res.json(rest)
  }

  res.json()
}

exports.getResponsibilityPremium = (req, res, next) => {
  const { policyId } = req.params

  const filteredData = responsibilityPremiumData.find(
    (item) => item.policyId === policyId,
  )

  if (filteredData) {
    const { cpf, policyId, ...rest } = filteredData
    res.json(rest)
  }

  res.json()
}
