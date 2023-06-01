const quotePatrimonialHomeRequest = [
  {
    policyId: '22261a20-b7c1-4f86-9209-f7357746f661',
    status: 'OK',
    statusUpdateDateTime: new Date().toISOString(),
  },
]

const quotePatrimonialHomeQuoteStatus = [
  {
    policyId: '22261a20-b7c1-4f86-9209-f7357746f661',
    status: 'OK',
    statusUpdateDateTime: new Date().toISOString(),
    quoteCustomer: {
      identificationData: {
        updateDateTime: '2021-05-21T08:30:00Z',
        personalId: '578-psd-71md6971kjh-2d414',
        brandName: 'Organização A',
        civilName: 'Juan Kaique Cláudio Fernandes',
        socialName: 'string',
        cpfNumber: '08707048096',
        companyInfo: {
          cnpjNumber: '01773247000563',
          name: 'Empresa da Organização A',
        },
        documents: [
          {
            type: 'CNH',
            number: '15291908',
            expirationDate: '2023-05-21',
            issueLocation: 'string',
          },
        ],
        hasBrazilianNationality: false,
        otherNationalitiesInfo: 'CAN',
        otherDocuments: {
          type: 'SOCIAL SEC',
          number: '15291908',
          country: 'string',
          expirationDate: '2023-05-21',
        },
        contact: {
          postalAddresses: [
            {
              address: 'Av Naburo Ykesaki, 1270',
              additionalInfo: 'Fundos',
              districtName: 'Centro',
              townName: 'Marília',
              countrySubDivision: 'SP',
              postCode: '17500001',
              country: 'BRA',
            },
          ],
          phones: [
            {
              countryCallingCode: '55',
              areaCode: '19',
              number: '29875132',
              phoneExtension: '932',
            },
          ],
          emails: [
            {
              email: 'nome@br.net',
            },
          ],
        },
        civilStatusCode: 'SOLTEIRO',
        sex: 'FEMININO',
        birthDate: '2021-05-21',
        filiation: {
          type: 'MAE',
          civilName: 'Marcelo Cláudio Fernandes',
        },
        identificationDetails: {
          civilName: 'Juan Kaique Cláudio Fernandes',
          cpfNumber: '21149314852',
        },
      },
      qualificationData: {
        updateDateTime: '2021-05-21T08:30:00Z',
        pepIdentification: 'NAO_EXPOSTO',
        occupation: [
          {
            details: 'string',
            occupationCode: 'RECEITA_FEDERAL',
            occupationCodeType: 'RFB',
          },
        ],
        lifePensionPlans: 'SIM',
        informedRevenue: {
          incomeFrequency: 'DIARIA',
          currency: 'BRL',
          amount: '100000.04',
          date: '2012-05-21',
        },
        informedPatrimony: {
          currency: 'BRL',
          amount: '100000.04',
          year: '2010',
        },
      },
      complimentaryInformationData: {
        updateDateTime: '2021-05-21T08:30:00Z',
        startDate: '2014-05-21',
        relationshipBeginning: '2014-05-21',
        productsServices: [
          {
            contract: 'string',
            type: 'MICROSSEGUROS',
            insuranceLineCode: '6272',
            procurators: [
              {
                nature: 'PROCURADOR',
                cpfNumber: '73677831148',
                civilName: 'Elza Milena Stefany Teixeira',
                socialName: 'string',
              },
            ],
          },
        ],
      },
      customData: [
        {
          fieldCategory: 'IDENTIFICATION',
          fields: [
            {
              fieldId: '578-psd-71md6971kjh-2d414',
              value: 'string',
            },
          ],
        },
      ],
    },
    quoteData: {
      hasCommercialActivity: true,
      isCollectiveStipulated: true,
      hasOneRiskLocation: true,
      termStartDate: '2022-10-02',
      termEndDate: '2022-10-02',
      quoteId: '12345678',
      insuranceType: 'NOVO',
      policyId: '111111',
      insurerId: 'string',
      currency: 'BRL',
      maxLMG: {
        amount: '2000.00',
        unit: {
          code: 'R$',
          description: 'BRL',
        },
      },
      includesAssistanceServices: true,
      insuredObjects: [
        {
          identification: 'string',
          propertyType: 'CASA',
          geographicRegion: 'ZONA_URBANA',
          propertiesForCoverage: 'PREDIO_E_CONTEUDO',
          indenizationWithoutDepreciation: true,
          riskLocationInfo: {
            isSameAsTheProponent: true,
            address: 'Avenida Paulista, 2000',
            additionalInfo: 'Apartamento 1304',
            districtName: 'Cerqueira César',
            townName: 'São Paulo',
            countrySubDivision: 'AC',
            postCode: '1310200',
            propertyUsageType: 'HABITUAL',
            propertyBuildType: 'ALVENARIA',
            isListedDisappropriatedCondemned: true,
            isUnderConstructionRenovation: true,
            securityProtection: ['CAMERA_CFTV'],
            fireProtection: ['EXTINTOR'],
            propertyUseType: 'PROPRIO',
          },
          coverages: [
            {
              branch: '0111',
              code: 'RESIDENCIAL_IMOVEL_BASICA',
              description: 'string',
              internalCode: 'string',
            },
          ],
          wasThereAClaim: true,
        },
      ],
      beneficiaries: [
        {
          identification: '12345678900',
          identificationType: 'CPF',
          name: 'Nome Sobrenome',
        },
      ],
      coverages: [
        {
          branch: '0111',
          code: 'RESIDENCIAL_IMOVEL_BASICA',
          description: 'string',
          isSeparateContractingAllowed: true,
          maxLMI: {
            amount: '2000.00',
            unit: {
              code: 'R$',
              description: 'BRL',
            },
          },
          internalCode: 'string',
        },
      ],
    },
    historicalData: {
      customer: {
        identificationData: {
          updateDateTime: '2021-05-21T08:30:00Z',
          personalId: '578-psd-71md6971kjh-2d414',
          brandName: 'Organização A',
          civilName: 'Juan Kaique Cláudio Fernandes',
          socialName: 'string',
          cpfNumber: '70571413463',
          companyInfo: {
            cnpjNumber: '01773247000563',
            name: 'Empresa da Organização A',
          },
          documents: [
            {
              type: 'CNH',
              number: '15291908',
              expirationDate: '2023-05-21',
              issueLocation: 'string',
            },
          ],
          hasBrazilianNationality: false,
          otherNationalitiesInfo: 'CAN',
          otherDocuments: {
            type: 'SOCIAL SEC',
            number: '15291908',
            country: 'string',
            expirationDate: '2023-05-21',
          },
          contact: {
            postalAddresses: [
              {
                address: 'Av Naburo Ykesaki, 1270',
                additionalInfo: 'Fundos',
                districtName: 'Centro',
                townName: 'Marília',
                countrySubDivision: 'SP',
                postCode: '17500001',
                country: 'BRA',
              },
            ],
            phones: [
              {
                countryCallingCode: '55',
                areaCode: '19',
                number: '29875132',
                phoneExtension: '932',
              },
            ],
            emails: [
              {
                email: 'nome@br.net',
              },
            ],
          },
          civilStatusCode: 'SOLTEIRO',
          sex: 'FEMININO',
          birthDate: '2021-05-21',
          filiation: {
            type: 'MAE',
            civilName: 'Marcelo Cláudio Fernandes',
          },
          identificationDetails: {
            civilName: 'Juan Kaique Cláudio Fernandes',
            cpfNumber: 'NA',
          },
        },
        qualificationData: {
          updateDateTime: '2021-05-21T08:30:00Z',
          pepIdentification: 'NAO_EXPOSTO',
          occupation: [
            {
              details: 'string',
              occupationCode: 'RECEITA_FEDERAL',
              occupationCodeType: 'RFB',
            },
          ],
          lifePensionPlans: 'SIM',
          informedRevenue: {
            incomeFrequency: 'DIARIA',
            currency: 'BRL',
            amount: '100000.04',
            date: '2012-05-21',
          },
          informedPatrimony: {
            currency: 'BRL',
            amount: '100000.04',
            year: '2010',
          },
        },
        complimentaryInformationData: {
          updateDateTime: '2021-05-21T08:30:00Z',
          startDate: '2014-05-21',
          relationshipBeginning: '2014-05-21',
          productsServices: [
            {
              contract: 'string',
              type: 'MICROSSEGUROS',
              insuranceLineCode: '6272',
              procurators: [
                {
                  nature: 'PROCURADOR',
                  cpfNumber: '73677831148',
                  civilName: 'Elza Milena Stefany Teixeira',
                  socialName: 'string',
                },
              ],
            },
          ],
        },
      },
      policies: [
        {
          policyInfo: {
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
                email: 'nome@br.net',
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
                email: 'nome@br.net',
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
          premium: {
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
                code: 'IMOVEL_BASICA',
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
          claim: {
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
                code: 'IMOVEL_BASICA',
                description: 'string',
                warningDate: '2022-12-31',
                thirdPartyClaimDate: '2022-12-31',
              },
            ],
          },
        },
      ],
    },
  },
]

// const quotePatrimonialHomeRequestConsentId = {}

exports.getPatrimonialHomeQuoteStatus = (req, res, next) => {
  res.json(quotePatrimonialHomeQuoteStatus)
}

exports.getPatrimonialHomeRequest = (req, res, next) => {
  res.json(quotePatrimonialHomeRequest)
}
