const patrimonialData = [
<<<<<<< Updated upstream
    {
        "cpf": "85711574051",
        "policyId": "f762dcb3-5b5d-54ff-988f-93defd8dd01b",
        "brand": "MAPFRE",
        "companies": [
            {
                "companyName": "MAPFRE Patrimonial Mock",
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
                "companyName": "MAPFRE Patrimonial Mock",
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
                "companyName": "MAPFRE Patrimonial Mock",
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

const patrimonialPremiumData = [
    {
        "policyId": "f762dcb3-5b5d-54ff-988f-93defd8dd01b",
        "cpf": "urn:mapfre:b231567f-94e8-4cb1-8fca-d62c5d98abe9",
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
=======
  {
    cpf: "85711574051",
    brand: "MAPFRE",
    companies: [
      {
        companyName: "MAPFRE Patrimonial Mock",
        cnpjNumber: "12345678901234",
        policies: ["f762dcb3-5b5d-54ff-988f-93defd8dd01b"],
      },
    ],
  },
  {
    cpf: "02188705076",
    brand: "MAPFRE",
    companies: [
      {
        companyName: "MAPFRE Patrimonial Mock",
        cnpjNumber: "12345678901234",
        policies: ["e00dace0-104e-11ed-861d-0242ac120002"],
      },
    ],
  },
  {
    cpf: "15387180065",
    brand: "MAPFRE",
    companies: [
      {
        companyName: "MAPFRE Patrimonial Mock",
        cnpjNumber: "12345678901234",
        policies: ["071641e8-1050-11ed-861d-0242ac120002"],
      },
    ],
  },
];

const patrimonialPremiumData = [
  {
    policyId: "f762dcb3-5b5d-54ff-988f-93defd8dd01b",
    cpf: "85711574051",
    paymentsQuantity: 4,
    amount: {
      amount: 2000,
      currency: "BRL",
>>>>>>> Stashed changes
    },
    coverages: [
      {
        branch: "111",
        code: "LUCRO_BRUTO",
        description: "string",
        premiumAmount: {
          amount: 2000,
          currency: "BRL",
        },
      },
    ],
    payments: [
      {
        movementDate: "AAAA-MM-DD",
        movementType: "LIQUIDACAO_DE_PREMIO",
        movementOrigin: "EMISSAO_DIRETA",
        movementPaymentsNumber: 0,
        amount: {
          amount: 2000,
          currency: "BRL",
        },
        maturityDate: "AAAA-MM-DD",
        tellerId: "string",
        tellerIdType: "CPF",
        tellerName: "string",
        financialInstitutionCode: "string",
        paymentType: "BOLETO",
      },
    ],
  },
  {
    cpf: "15387180065",
    policyId: "071641e8-1050-11ed-861d-0242ac120002",
    paymentsQuantity: 4,
    amount: {
      amount: 2000,
      currency: "BRL",
    },
<<<<<<< Updated upstream
    {
        "cpf": "urn:mapfre:7f1fb742-f5d0-41aa-894a-34b2fc7e9c16",
        "paymentsQuantity": 4,
        "amount": {
            "amount": 2000,
            "currency": "BRL"
=======
    coverages: [
      {
        branch: "111",
        code: "LUCRO_BRUTO",
        description: "string",
        premiumAmount: {
          amount: 2000,
          currency: "BRL",
>>>>>>> Stashed changes
        },
      },
    ],
    payments: [
      {
        movementDate: "AAAA-MM-DD",
        movementType: "LIQUIDACAO_DE_PREMIO",
        movementOrigin: "EMISSAO_DIRETA",
        movementPaymentsNumber: 0,
        amount: {
          amount: 2000,
          currency: "BRL",
        },
        maturityDate: "AAAA-MM-DD",
        tellerId: "string",
        tellerIdType: "CPF",
        tellerName: "string",
        financialInstitutionCode: "string",
        paymentType: "BOLETO",
      },
    ],
  },
  {
    policyId: "e00dace0-104e-11ed-861d-0242ac120002",
    cpf: "02188705076",
    paymentsQuantity: 4,
    amount: {
      amount: 2000,
      currency: "BRL",
    },
    coverages: [
      {
        branch: "111",
        code: "LUCRO_BRUTO",
        description: "string",
        premiumAmount: {
          amount: 2000,
          currency: "BRL",
        },
      },
    ],
    payments: [
      {
        movementDate: "AAAA-MM-DD",
        movementType: "LIQUIDACAO_DE_PREMIO",
        movementOrigin: "EMISSAO_DIRETA",
        movementPaymentsNumber: 0,
        amount: {
          amount: 2000,
          currency: "BRL",
        },
        maturityDate: "AAAA-MM-DD",
        tellerId: "string",
        tellerIdType: "CPF",
        tellerName: "string",
        financialInstitutionCode: "string",
        paymentType: "BOLETO",
      },
    ],
  },
];

const patrimonialClaimData = [
<<<<<<< Updated upstream
    {
        "policyId": "f762dcb3-5b5d-54ff-988f-93defd8dd01b",
        "cpf": "urn:mapfre:b231567f-94e8-4cb1-8fca-d62c5d98abe9",
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
=======
  {
    policyId: "f762dcb3-5b5d-54ff-988f-93defd8dd01b",
    cpf: "85711574051",
    identification: "string",
    documentationDeliveryDate: "AAAA-MM-DD",
    status: "ABERTO",
    statusAlterationDate: "AAAA-MM-DD",
    occurrenceDate: "AAAA-MM-DD",
    warningDate: "AAAA-MM-DD",
    thirdPartyClaimDate: "AAAA-MM-DD",
    amount: {
      amount: 2000,
      currency: "BRL",
>>>>>>> Stashed changes
    },
    denialJustification: "RISCO_EXCLUIDO",
    denialJustificationDescription: "string",
    coverages: [
      {
        insuredObjectId: "string",
        branch: "111",
        code: "LUCRO_BRUTO",
        description: "string",
        warningDate: "2022-05-01",
        thirdPartyClaimDate: "2022-05-01",
      },
    ],
  },
  {
    cpf: "02188705076",
    policyId: "e00dace0-104e-11ed-861d-0242ac120002",
    identification: "string",
    documentationDeliveryDate: "AAAA-MM-DD",
    status: "ABERTO",
    statusAlterationDate: "AAAA-MM-DD",
    occurrenceDate: "AAAA-MM-DD",
    warningDate: "AAAA-MM-DD",
    thirdPartyClaimDate: "AAAA-MM-DD",
    amount: {
      amount: 2000,
      currency: "BRL",
    },
<<<<<<< Updated upstream
    {
        "cpf": "urn:mapfre:7f1fb742-f5d0-41aa-894a-34b2fc7e9c16",
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

const patrimonialPolicyInfoData = [
    {
        "documentType": "APOLICE_INDIVIDUAL",
        "cpf": "urn:mapfre:b231567f-94e8-4cb1-8fca-d62c5d98abe9",
        "policyId": "f762dcb3-5b5d-54ff-988f-93defd8dd01b",
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
        "policyId": "f762dcb3-5b5d-54ff-988f-93defd8dd01b",
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
=======
    denialJustification: "RISCO_EXCLUIDO",
    denialJustificationDescription: "string",
    coverages: [
      {
        insuredObjectId: "string",
        branch: "111",
        code: "LUCRO_BRUTO",
        description: "string",
        warningDate: "2022-05-01",
        thirdPartyClaimDate: "2022-05-01",
      },
    ],
  },
  {
    cpf: "15387180065",
    policyId: "071641e8-1050-11ed-861d-0242ac120002",
    identification: "string",
    documentationDeliveryDate: "AAAA-MM-DD",
    status: "ABERTO",
    statusAlterationDate: "AAAA-MM-DD",
    occurrenceDate: "AAAA-MM-DD",
    warningDate: "AAAA-MM-DD",
    thirdPartyClaimDate: "AAAA-MM-DD",
    amount: {
      amount: 2000,
      currency: "BRL",
    },
    denialJustification: "RISCO_EXCLUIDO",
    denialJustificationDescription: "string",
    coverages: [
      {
        insuredObjectId: "string",
        branch: "111",
        code: "LUCRO_BRUTO",
        description: "string",
        warningDate: "2022-05-01",
        thirdPartyClaimDate: "2022-05-01",
      },
    ],
  },
];

const patrimonialPolicyInfoData = [
  {
    documentType: "APOLICE_INDIVIDUAL",
    cpf: "85711574051",
    policyId: "f762dcb3-5b5d-54ff-988f-93defd8dd01b",
    susepProcessNumber: "string",
    groupCertificateId: "string",
    issuanceType: "EMISSAO_PROPRIA",
    issuanceDate: "AAAA-MM-DD",
    termStartDate: "AAAA-MM-DD",
    termEndDate: "AAAA-MM-DD",
    leadInsurerCode: "string",
    leadInsurerPolicyId: "string",
    maxLMG: {
      amount: 2000,
      currency: "BRL",
    },
    proposalId: "string",
    insureds: [
      {
        identification: "85711574051",
        identificationType: "CPF",
        name: "Nome Sobrenome",
        postCode: "10000000",
        email: "string",
        city: "string",
        state: "string",
        country: "BRA",
        address: "string",
      },
    ],
    beneficiaries: [
      {
        identification: "12345678900",
        identificationType: "CPF",
        name: "Nome Sobrenome",
        postCode: "10000000",
        email: "string",
        city: "string",
        state: "string",
        country: "BRA",
        address: "string",
      },
    ],
    principals: [
      {
        identification: "12345678900",
        identificationType: "CPF",
        name: "Nome Sobrenome",
        postCode: "10000000",
        email: "string",
        city: "string",
        state: "string",
        country: "BRA",
        address: "string",
      },
    ],
    intermediaries: [
      {
        type: "REPRESENTANTE",
        identification: "12345678900",
        brokerId: "string",
        identificationType: "CPF",
        name: "Nome Sobrenome",
        postCode: "10000000",
        city: "string",
        state: "string",
        country: "BRA",
        address: "string",
      },
    ],
    insuredObjects: [
      {
        identification: "string",
        type: "CONTRATO",
        typeAdditionalInfo: "string",
        description: "string",
        amount: {
          amount: 2000,
          currency: "BRL",
>>>>>>> Stashed changes
        },
        coverages: [
          {
            branch: "111",
            code: "LUCRO_BRUTO",
            description: "string",
            internalCode: "string",
            susepProcessNumber: "string",
            LMI: {
              amount: 2000,
              currency: "BRL",
            },
            isLMISublimit: true,
            termStartDate: "AAAA-MM-DD",
            termEndDate: "AAAA-MM-DD",
            isMainCoverage: true,
            feature: "MASSIFICADOS",
            type: "PARAMETRICO",
            gracePeriod: 0,
            gracePeriodicity: "DIA",
            gracePeriodCountingMethod: "DIAS_UTEIS",
            gracePeriodStartDate: "AAAA-MM-DD",
            gracePeriodEndDate: "AAAA-MM-DD",
          },
        ],
      },
    ],
    coverages: [
      {
        branch: "111",
        code: "LUCRO_BRUTO",
        description: "string",
        deductible: {
          type: "DEDUTIVEL",
          typeAdditionalInfo: "string",
          amount: {
            amount: 2000,
            currency: "BRL",
          },
          period: 10,
          periodicity: "DIA",
          periodCountingMethod: "DIAS_UTEIS",
          periodStartDate: "2022-05-16",
          periodEndDate: "2022-05-17",
          description: "Franquia de exemplo",
        },
        POS: {
          applicationType: "VALOR",
          description: "Descrição de exemplo",
          minValue: {
            amount: 2000,
            currency: "BRL",
          },
          maxValue: {
            amount: 2000,
            currency: "BRL",
          },
          percentage: 10,
        },
      },
    ],
    coinsuranceRetainedPercentage: 10,
    coinsurers: [
      {
        identification: "string",
        cededPercentage: 10,
      },
    ],
    branchInfo: {
      basicCoverageIndex: "SIMPLES",
      insuredObjects: [
        {
          identification: "string",
          propertyType: "CASA",
          structuringType: "CONDOMINIO_VERTICAL",
          postCode: "10000000",
          businessActivity: "1234567",
        },
      ],
    },
  },
  {
    documentType: "APOLICE_INDIVIDUAL",
    cpf: "02188705076",
    policyId: "e00dace0-104e-11ed-861d-0242ac120002",
    susepProcessNumber: "string",
    groupCertificateId: "string",
    issuanceType: "EMISSAO_PROPRIA",
    issuanceDate: "AAAA-MM-DD",
    termStartDate: "AAAA-MM-DD",
    termEndDate: "AAAA-MM-DD",
    leadInsurerCode: "string",
    leadInsurerPolicyId: "string",
    maxLMG: {
      amount: 2000,
      currency: "BRL",
    },
    proposalId: "string",
    insureds: [
      {
        identification: "02188705076",
        identificationType: "CPF",
        name: "Nome Sobrenome",
        postCode: "10000000",
        email: "string",
        city: "string",
        state: "string",
        country: "BRA",
        address: "string",
      },
    ],
    beneficiaries: [
      {
        identification: "12345678900",
        identificationType: "CPF",
        name: "Nome Sobrenome",
        postCode: "10000000",
        email: "string",
        city: "string",
        state: "string",
        country: "BRA",
        address: "string",
      },
    ],
    principals: [
      {
        identification: "12345678900",
        identificationType: "CPF",
        name: "Nome Sobrenome",
        postCode: "10000000",
        email: "string",
        city: "string",
        state: "string",
        country: "BRA",
        address: "string",
      },
    ],
    intermediaries: [
      {
        type: "REPRESENTANTE",
        identification: "12345678900",
        brokerId: "string",
        identificationType: "CPF",
        name: "Nome Sobrenome",
        postCode: "10000000",
        city: "string",
        state: "string",
        country: "BRA",
        address: "string",
      },
    ],
    insuredObjects: [
      {
        identification: "string",
        type: "CONTRATO",
        typeAdditionalInfo: "string",
        description: "string",
        amount: {
          amount: 2000,
          currency: "BRL",
        },
        coverages: [
          {
            branch: "111",
            code: "LUCRO_BRUTO",
            description: "string",
            internalCode: "string",
            susepProcessNumber: "string",
            LMI: {
              amount: 2000,
              currency: "BRL",
            },
            isLMISublimit: true,
            termStartDate: "AAAA-MM-DD",
            termEndDate: "AAAA-MM-DD",
            isMainCoverage: true,
            feature: "MASSIFICADOS",
            type: "PARAMETRICO",
            gracePeriod: 0,
            gracePeriodicity: "DIA",
            gracePeriodCountingMethod: "DIAS_UTEIS",
            gracePeriodStartDate: "AAAA-MM-DD",
            gracePeriodEndDate: "AAAA-MM-DD",
          },
        ],
      },
    ],
    coverages: [
      {
        branch: "111",
        code: "LUCRO_BRUTO",
        description: "string",
        deductible: {
          type: "DEDUTIVEL",
          typeAdditionalInfo: "string",
          amount: {
            amount: 2000,
            currency: "BRL",
          },
          period: 10,
          periodicity: "DIA",
          periodCountingMethod: "DIAS_UTEIS",
          periodStartDate: "2022-05-16",
          periodEndDate: "2022-05-17",
          description: "Franquia de exemplo",
        },
        POS: {
          applicationType: "VALOR",
          description: "Descrição de exemplo",
          minValue: {
            amount: 2000,
            currency: "BRL",
          },
          maxValue: {
            amount: 2000,
            currency: "BRL",
          },
          percentage: 10,
        },
      },
    ],
    coinsuranceRetainedPercentage: 10,
    coinsurers: [
      {
        identification: "string",
        cededPercentage: 10,
      },
    ],
    branchInfo: {
      basicCoverageIndex: "SIMPLES",
      insuredObjects: [
        {
          identification: "string",
          propertyType: "CASA",
          structuringType: "CONDOMINIO_VERTICAL",
          postCode: "10000000",
          businessActivity: "1234567",
        },
      ],
    },
  },

  {
    documentType: "APOLICE_INDIVIDUAL",
    cpf: "15387180065",
    policyId: "071641e8-1050-11ed-861d-0242ac120002",
    susepProcessNumber: "string",
    groupCertificateId: "string",
    issuanceType: "EMISSAO_PROPRIA",
    issuanceDate: "AAAA-MM-DD",
    termStartDate: "AAAA-MM-DD",
    termEndDate: "AAAA-MM-DD",
    leadInsurerCode: "string",
    leadInsurerPolicyId: "string",
    maxLMG: {
      amount: 2000,
      currency: "BRL",
    },
    proposalId: "string",
    insureds: [
      {
        identification: "15387180065",
        identificationType: "CPF",
        name: "Nome Sobrenome",
        postCode: "10000000",
        email: "string",
        city: "string",
        state: "string",
        country: "BRA",
        address: "string",
      },
    ],
    beneficiaries: [
      {
        identification: "12345678900",
        identificationType: "CPF",
        name: "Nome Sobrenome",
        postCode: "10000000",
        email: "string",
        city: "string",
        state: "string",
        country: "BRA",
        address: "string",
      },
    ],
    principals: [
      {
        identification: "12345678900",
        identificationType: "CPF",
        name: "Nome Sobrenome",
        postCode: "10000000",
        email: "string",
        city: "string",
        state: "string",
        country: "BRA",
        address: "string",
      },
    ],
    intermediaries: [
      {
        type: "REPRESENTANTE",
        identification: "12345678900",
        brokerId: "string",
        identificationType: "CPF",
        name: "Nome Sobrenome",
        postCode: "10000000",
        city: "string",
        state: "string",
        country: "BRA",
        address: "string",
      },
    ],
    insuredObjects: [
      {
        identification: "string",
        type: "CONTRATO",
        typeAdditionalInfo: "string",
        description: "string",
        amount: {
          amount: 2000,
          currency: "BRL",
        },
        coverages: [
          {
            branch: "111",
            code: "LUCRO_BRUTO",
            description: "string",
            internalCode: "string",
            susepProcessNumber: "string",
            LMI: {
              amount: 2000,
              currency: "BRL",
            },
            isLMISublimit: true,
            termStartDate: "AAAA-MM-DD",
            termEndDate: "AAAA-MM-DD",
            isMainCoverage: true,
            feature: "MASSIFICADOS",
            type: "PARAMETRICO",
            gracePeriod: 0,
            gracePeriodicity: "DIA",
            gracePeriodCountingMethod: "DIAS_UTEIS",
            gracePeriodStartDate: "AAAA-MM-DD",
            gracePeriodEndDate: "AAAA-MM-DD",
          },
        ],
      },
    ],
    coverages: [
      {
        branch: "111",
        code: "LUCRO_BRUTO",
        description: "string",
        deductible: {
          type: "DEDUTIVEL",
          typeAdditionalInfo: "string",
          amount: {
            amount: 2000,
            currency: "BRL",
          },
          period: 10,
          periodicity: "DIA",
          periodCountingMethod: "DIAS_UTEIS",
          periodStartDate: "2022-05-16",
          periodEndDate: "2022-05-17",
          description: "Franquia de exemplo",
        },
        POS: {
          applicationType: "VALOR",
          description: "Descrição de exemplo",
          minValue: {
            amount: 2000,
            currency: "BRL",
          },
          maxValue: {
            amount: 2000,
            currency: "BRL",
          },
          percentage: 10,
        },
      },
    ],
    coinsuranceRetainedPercentage: 10,
    coinsurers: [
      {
        identification: "string",
        cededPercentage: 10,
      },
    ],
    branchInfo: {
      basicCoverageIndex: "SIMPLES",
      insuredObjects: [
        {
          identification: "string",
          propertyType: "CASA",
          structuringType: "CONDOMINIO_VERTICAL",
          postCode: "10000000",
          businessActivity: "1234567",
        },
      ],
    },
  },
];

exports.getPatrimonial = (req, res, next) => {
<<<<<<< Updated upstream
    const { policyId } = req.params

    const filteredData = patrimonialData.filter(item => item.policyId === policyId)
=======
  const { cpf } = req.params;

  const filteredData = patrimonialData.filter((item) => item.cpf === cpf);
>>>>>>> Stashed changes

  res.json(filteredData);
};

exports.getPatrimonialClaim = (req, res, next) => {
<<<<<<< Updated upstream
    const { policyId } = req.params

    const filteredData = patrimonialClaimData.filter(item => item.policyId === policyId)
=======
  const { policyId } = req.params;

  const filteredData = patrimonialClaimData.filter(
    (item) => item.policyId === policyId
  );
>>>>>>> Stashed changes

  res.json(filteredData);
};

exports.getPatrimonialPolicyInfo = (req, res, next) => {
<<<<<<< Updated upstream
    const { policyId } = req.params

    const filteredData = patrimonialPolicyInfoData.find(item => item.policyId === policyId)
    
    res.json(filteredData)
};

exports.getPatrimonialPremium = (req, res, next) => {
    const { policyId } = req.params

    const filteredData = patrimonialPremiumData.find(item => item.policyId === policyId)

    res.json(filteredData)
=======
  const { policyId } = req.params;

  const filteredData = patrimonialPolicyInfoData.find(
    (item) => item.policyId === policyId
  );

  res.json(filteredData);
};

exports.getPatrimonialPremium = (req, res, next) => {
  const { policyId } = req.params;

  const filteredData = patrimonialPremiumData.find(
    (item) => item.policyId === policyId
  );

  res.json(filteredData);
>>>>>>> Stashed changes
};
