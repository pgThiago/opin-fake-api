const patrimonialData = [
  {
    cpf: '02325899926',
    brand: 'MAPFRE',
    companies: [
      {
        companyName: 'MAPFRE Patrimonial Mock',
        cnpjNumber: '12345678901234',
        policies: [
          'f762dcb3-5b5d-54ff-988f-93defd8dd01b',
          'f9421cf6-fa6a-4545-879e-b67d63bd8b66',
          'ddcc22fa-ab36-40e1-a01f-a5fb09c8c600',
          'c50873ea-f526-4149-8285-02ba6e1ab960',
          'e76d5d9a-87b4-44e3-92df-085469c8dffe',
          '06ee745b-9c2d-47ae-b9c2-a0814f1ebad9',
          '92682926-a159-4afd-a094-54baa3eadfec',
          '1a4b8499-9d78-4a71-a176-72518f766c7c',
          '29b10fd3-40f9-4762-a871-6d5d46d719e6',
          'c4834650-c909-4a58-a74c-9596267b7ce5',
        ],
      },
    ],
  },
  {
    cpf: '02188705076',
    brand: 'MAPFRE',
    companies: [
      {
        companyName: 'MAPFRE Patrimonial Mock',
        cnpjNumber: '12345678901234',
        policies: ['22261a20-b7c1-4f86-9209-f7357746f661'],
      },
    ],
  },
  {
    cpf: '15387180065',
    brand: 'MAPFRE',
    companies: [
      {
        companyName: 'MAPFRE Patrimonial Mock',
        cnpjNumber: '12345678901234',
        policies: ['071641e8-1050-11ed-861d-0242ac120002'],
      },
    ],
  },
]

const patrimonialPremiumData = [
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
        branch: '111',
        code: 'LUCRO_BRUTO',
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
        movementDate: 'AAAA-MM-DD',
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
      amount: '2000.00',
      unit: {
        code: 'R$',
        description: 'BRL',
      },
    },
    coverages: [
      {
        branch: '111',
        code: 'LUCRO_BRUTO',
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
        movementDate: 'AAAA-MM-DD',
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
    policyId: '22261a20-b7c1-4f86-9209-f7357746f661',
    cpf: '02188705076',
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
        branch: '111',
        code: 'LUCRO_BRUTO',
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
        movementDate: 'AAAA-MM-DD',
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

const patrimonialClaimData = [
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
        branch: '111',
        code: 'LUCRO_BRUTO',
        description: 'string',
        warningDate: '2022-05-01',
        thirdPartyClaimDate: '2022-05-01',
      },
    ],
  },
  {
    cpf: '02188705076',
    policyId: '22261a20-b7c1-4f86-9209-f7357746f661',
    identification: 'string',
    documentationDeliveryDate: 'AAAA-MM-DD',
    status: 'ABERTO',
    statusAlterationDate: 'AAAA-MM-DD',
    occurrenceDate: 'AAAA-MM-DD',
    warningDate: 'AAAA-MM-DD',
    thirdPartyClaimDate: 'AAAA-MM-DD',
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
        branch: '111',
        code: 'LUCRO_BRUTO',
        description: 'string',
        warningDate: '2022-05-01',
        thirdPartyClaimDate: '2022-05-01',
      },
    ],
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
        branch: '111',
        code: 'LUCRO_BRUTO',
        description: 'string',
        warningDate: '2022-05-01',
        thirdPartyClaimDate: '2022-05-01',
      },
    ],
  },
]

const patrimonialPolicyInfoData = [
  {
    documentType: 'APOLICE_INDIVIDUAL',
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
            branch: '0114',
            code: 'IMOVEL_BASICA',
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
        code: 'IMOVEL_BASICA',
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
      basicCoverageIndex: 'SIMPLES',
      insuredObjects: [
        {
          identification: 'string',
          propertyType: 'CASA',
          structuringType: 'CONDOMINIO_VERTICAL',
          postCode: '10000000',
          businessActivity: '1234567',
        },
      ],
    },
  },
  {
    documentType: 'APOLICE_INDIVIDUAL',
    policyId: '22261a20-b7c1-4f86-9209-f7357746f661',
    susepProcessNumber: 'string',
    groupCertificateId: 'string',
    issuanceType: 'EMISSAO_PROPRIA',
    issuanceDate: 'AAAA-MM-DD',
    termStartDate: 'AAAA-MM-DD',
    termEndDate: 'AAAA-MM-DD',
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
            branch: '0114',
            code: 'IMOVEL_BASICA',
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
        code: 'IMOVEL_BASICA',
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
      basicCoverageIndex: 'SIMPLES',
      insuredObjects: [
        {
          identification: 'string',
          propertyType: 'CASA',
          structuringType: 'CONDOMINIO_VERTICAL',
          postCode: '10000000',
          businessActivity: '1234567',
        },
      ],
    },
  },
  {
    documentType: 'APOLICE_INDIVIDUAL',
    policyId: 'f9421cf6-fa6a-4545-879e-b67d63bd8b66',
    susepProcessNumber: 'string',
    groupCertificateId: 'string',
    issuanceType: 'EMISSAO_PROPRIA',
    issuanceDate: 'AAAA-MM-DD',
    termStartDate: 'AAAA-MM-DD',
    termEndDate: 'AAAA-MM-DD',
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
            branch: '0116',
            code: 'IMOVEL_BASICA',
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
        code: 'IMOVEL_BASICA',
        description: 'string',
        deductible: {
          type: 'DEDUTIVEL',
          typeAdditionalInfo: 'string',
          amount: {
            amount: '2000',
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
      basicCoverageIndex: 'SIMPLES',
      insuredObjects: [
        {
          identification: 'string',
          propertyType: 'CASA',
          structuringType: 'CONDOMINIO_VERTICAL',
          postCode: '10000000',
          businessActivity: '1234567',
        },
      ],
    },
  },
  {
    documentType: 'APOLICE_INDIVIDUAL',
    policyId: 'ddcc22fa-ab36-40e1-a01f-a5fb09c8c600',
    susepProcessNumber: 'string',
    groupCertificateId: 'string',
    issuanceType: 'EMISSAO_PROPRIA',
    issuanceDate: 'AAAA-MM-DD',
    termStartDate: 'AAAA-MM-DD',
    termEndDate: 'AAAA-MM-DD',
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
            branch: '0118',
            code: 'IMOVEL_BASICA',
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
        code: 'IMOVEL_BASICA',
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
      basicCoverageIndex: 'SIMPLES',
      insuredObjects: [
        {
          identification: 'string',
          propertyType: 'CASA',
          structuringType: 'CONDOMINIO_VERTICAL',
          postCode: '10000000',
          businessActivity: '1234567',
        },
      ],
    },
  },
  {
    documentType: 'APOLICE_INDIVIDUAL',
    policyId: 'c50873ea-f526-4149-8285-02ba6e1ab960',
    susepProcessNumber: 'string',
    groupCertificateId: 'string',
    issuanceType: 'EMISSAO_PROPRIA',
    issuanceDate: 'AAAA-MM-DD',
    termStartDate: 'AAAA-MM-DD',
    termEndDate: 'AAAA-MM-DD',
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
            branch: '0196',
            code: 'IMOVEL_BASICA',
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
        code: 'IMOVEL_BASICA',
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
      basicCoverageIndex: 'SIMPLES',
      insuredObjects: [
        {
          identification: 'string',
          propertyType: 'CASA',
          structuringType: 'CONDOMINIO_VERTICAL',
          postCode: '10000000',
          businessActivity: '1234567',
        },
      ],
    },
  },
  {
    documentType: 'APOLICE_INDIVIDUAL',
    policyId: 'e76d5d9a-87b4-44e3-92df-085469c8dffe',
    susepProcessNumber: 'string',
    groupCertificateId: 'string',
    issuanceType: 'EMISSAO_PROPRIA',
    issuanceDate: 'AAAA-MM-DD',
    termStartDate: 'AAAA-MM-DD',
    termEndDate: 'AAAA-MM-DD',
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
            branch: '0173',
            code: 'IMOVEL_BASICA',
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
        code: 'IMOVEL_BASICA',
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
      basicCoverageIndex: 'SIMPLES',
      insuredObjects: [
        {
          identification: 'string',
          propertyType: 'CASA',
          structuringType: 'CONDOMINIO_VERTICAL',
          postCode: '10000000',
          businessActivity: '1234567',
        },
      ],
    },
  },
  {
    documentType: 'APOLICE_INDIVIDUAL',
    policyId: '06ee745b-9c2d-47ae-b9c2-a0814f1ebad9',
    susepProcessNumber: 'string',
    groupCertificateId: 'string',
    issuanceType: 'EMISSAO_PROPRIA',
    issuanceDate: 'AAAA-MM-DD',
    termStartDate: 'AAAA-MM-DD',
    termEndDate: 'AAAA-MM-DD',
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
            branch: '0141',
            code: 'IMOVEL_BASICA',
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
        code: 'IMOVEL_BASICA',
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
      basicCoverageIndex: 'SIMPLES',
      insuredObjects: [
        {
          identification: 'string',
          propertyType: 'CASA',
          structuringType: 'CONDOMINIO_VERTICAL',
          postCode: '10000000',
          businessActivity: '1234567',
        },
      ],
    },
  },
  {
    documentType: 'APOLICE_INDIVIDUAL',
    policyId: '92682926-a159-4afd-a094-54baa3eadfec',
    susepProcessNumber: 'string',
    groupCertificateId: 'string',
    issuanceType: 'EMISSAO_PROPRIA',
    issuanceDate: 'AAAA-MM-DD',
    termStartDate: 'AAAA-MM-DD',
    termEndDate: 'AAAA-MM-DD',
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
            branch: '0167',
            code: 'IMOVEL_BASICA',
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
        code: 'IMOVEL_BASICA',
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
      basicCoverageIndex: 'SIMPLES',
      insuredObjects: [
        {
          identification: 'string',
          propertyType: 'CASA',
          structuringType: 'CONDOMINIO_VERTICAL',
          postCode: '10000000',
          businessActivity: '1234567',
        },
      ],
    },
  },
  {
    documentType: 'APOLICE_INDIVIDUAL',
    policyId: '1a4b8499-9d78-4a71-a176-72518f766c7c',
    susepProcessNumber: 'string',
    groupCertificateId: 'string',
    issuanceType: 'EMISSAO_PROPRIA',
    issuanceDate: 'AAAA-MM-DD',
    termStartDate: 'AAAA-MM-DD',
    termEndDate: 'AAAA-MM-DD',
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
            branch: '0112',
            code: 'IMOVEL_BASICA',
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
        code: 'IMOVEL_BASICA',
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
      basicCoverageIndex: 'SIMPLES',
      insuredObjects: [
        {
          identification: 'string',
          propertyType: 'CASA',
          structuringType: 'CONDOMINIO_VERTICAL',
          postCode: '10000000',
          businessActivity: '1234567',
        },
      ],
    },
  },
  {
    documentType: 'APOLICE_INDIVIDUAL',
    policyId: '29b10fd3-40f9-4762-a871-6d5d46d719e6',
    susepProcessNumber: 'string',
    groupCertificateId: 'string',
    issuanceType: 'EMISSAO_PROPRIA',
    issuanceDate: 'AAAA-MM-DD',
    termStartDate: 'AAAA-MM-DD',
    termEndDate: 'AAAA-MM-DD',
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
            branch: '0171',
            code: 'IMOVEL_BASICA',
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
        code: 'IMOVEL_BASICA',
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
      basicCoverageIndex: 'SIMPLES',
      insuredObjects: [
        {
          identification: 'string',
          propertyType: 'CASA',
          structuringType: 'CONDOMINIO_VERTICAL',
          postCode: '10000000',
          businessActivity: '1234567',
        },
      ],
    },
  },
  {
    documentType: 'APOLICE_INDIVIDUAL',
    policyId: 'c4834650-c909-4a58-a74c-9596267b7ce5',
    susepProcessNumber: 'string',
    groupCertificateId: 'string',
    issuanceType: 'EMISSAO_PROPRIA',
    issuanceDate: 'AAAA-MM-DD',
    termStartDate: 'AAAA-MM-DD',
    termEndDate: 'AAAA-MM-DD',
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
            branch: '0195',
            code: 'IMOVEL_BASICA',
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
        code: 'IMOVEL_BASICA',
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
      basicCoverageIndex: 'SIMPLES',
      insuredObjects: [
        {
          identification: 'string',
          propertyType: 'CASA',
          structuringType: 'CONDOMINIO_VERTICAL',
          postCode: '10000000',
          businessActivity: '1234567',
        },
      ],
    },
  },
]

exports.getPatrimonial = (req, res, next) => {
  const { cpf } = req.params

  const filteredData = patrimonialData
    .filter((item) => item.cpf === cpf)
    .map((i) => {
      const { cpf, ...rest } = i
      return rest
    })

  res.json(filteredData)
}

exports.getPatrimonialClaim = (req, res, next) => {
  const { policyId } = req.params

  const filteredData = patrimonialClaimData
    .filter((item) => item.policyId === policyId)
    .map((i) => {
      const { policyId, cpf, ...rest } = i
      return rest
    })

  res.json(filteredData)
}

exports.getPatrimonialPolicyInfo = (req, res, next) => {
  const { policyId } = req.params

  const filteredData = patrimonialPolicyInfoData.find(
    (item) => item.policyId === policyId,
  )

  if (filteredData) {
    const { cpf, ...rest } = filteredData
    res.json(rest)
  }

  res.json()
}

exports.getPatrimonialPremium = (req, res, next) => {
  const { policyId } = req.params

  const filteredData = patrimonialPremiumData.find(
    (item) => item.policyId === policyId,
  )

  if (filteredData) {
    const { policyId, cpf, ...rest } = filteredData
    res.json(rest)
  }

  res.json()
}
