const quotePatrimonialDiverseRisksRequest = [
  {
    policyId: '22261a20-b7c1-4f86-9209-f7357746f661',
    status: 'OK',
    statusUpdateDateTime: new Date().toISOString(),
  },
]

const quotePatrimonialDiverseRisksQuoteStatus = [
  {
    policyId: '22261a20-b7c1-4f86-9209-f7357746f661',
    status: 'stri',
    statusUpdateDateTime: new Date().toISOString(),
    quoteData: {
      customerInfo: {
        identification: {
          updateDateTime: new Date().toISOString(),
          personalId: '578-psd-71md6971kjh-2d414',
          brandName: 'Organização A',
          civilName: 'Juan Kaique Cláudio Fernandes',
          socialName: 'string',
          cpfNumber: 'NA',
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
        qualification: {
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
        complimentaryInfo: {
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
      quoteInfo: {
        isCollectiveStipulated: true,
        includesAssistanceServices: true,
        termStartDate: '2022-10-02T00:00:00.000Z',
        termEndDate: '2022-10-02T00:00:00.000Z',
        insuranceTermStartDate: '2022-10-02T00:00:00.000Z',
        quoteId: '12345678',
        insuranceType: 'NOVO',
        policyId: '111111',
        insurerId: 'string',
        currency: 'BRL',
        insuredObjectType: 'EQUIPAMENTO_MOVEL',
        maxLMG: {
          amount: '2000.00',
          unit: {
            code: 'R$',
            description: 'BRL',
          },
        },
        insuredObjects: [
          {
            identification: 'string',
            coverages: [
              {
                branch: '0111',
                code: 'RESIDENCIAL_IMOVEL_BASICA',
                description: 'string',
                internalCode: 'string',
              },
            ],
            equipmentType: 'EQUIPAMENTO_DE_CONSTRUCAO_CIVIL',
            equipmentData: {
              fixedMachinery: true,
              mainBranch: 'string',
              equipmentLocal: 'SERVICOS',
              forAgriculturalOrMixedActivities: true,
              equipmentDescription: 'string',
              brand: 'string',
              manufacturingYear: 0,
              serialNumber: 0,
              brandNew: true,
              invoiceIssuedDate: '2022-10-02T00:00:00.000Z',
              invoiceNumber: 0,
              isRented: true,
              isBorrowed: true,
              isFinanced: true,
              ownOperation: true,
              operationLocation: 'LOCAL_FECHADO',
              buildingSiteOperation: true,
            },
            geographicRegion: 'ZONA_URBANA',
            propertiesForCoverage: 'PREDIO_E_CONTEUDO',
            isNewValueContract: true,
            riskLocationInfo: {
              isSameAsTheProponent: true,
              address: 'Avenida Paulista, 2000',
              additionalInfo: 'Apartamento 1304',
              districtName: 'Cerqueira César',
              townName: 'São Paulo',
              countrySubDivision: 'AC',
              postCode: '1310200',
              billingAddress: 'Avenida Paulista, 2000',
              billingAdditionalInfo: 'Apartamento 1304',
              billingDistrictName: 'Cerqueira César',
              billingTownName: 'São Paulo',
              billingCountrySubDivision: 'AC',
              billingPostCode: '1310200',
              securityProtection: ['CAMERA_CFTV'],
              fireProtection: ['EXTINTOR'],
            },
            wasThereAClaim: true,
            claimNotifications: [
              {
                claimAmount: {
                  amount: '2000.00',
                  unit: {
                    code: 'R$',
                    description: 'BRL',
                  },
                },
                claimDescription: 'string',
              },
            ],
          },
        ],
        beneficiaries: [
          {
            identification: '12345678900',
            identificationType: 'CPF',
            name: 'Nome Sobrenome',
          },
        ],
      },
      quotes: [
        {
          quoteDateTime: '2023-05-21T08:30:00Z',
          susepProcessNumbers: ['XXXXXXX1234'],
          updatingIndex: 'IPCA',
          updatingPeriodicity: 'ANUAL',
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
              internalCode: 'string',
              gracePeriod: 0,
              gracePeriodicity: 'DIA',
              gracePeriodCountingMethod: 'DIAS_UTEIS',
              gracePeriodStartDate: '2022-10-02T00:00:00.000Z',
              gracePeriodEndDate: '2022-10-02T00:00:00.000Z',
            },
          ],
          assistances: [
            {
              type: 'ASSISTENCIA_AUTO',
              service: 'ACIONAMENTO_E_OU_AGENDAMENTO_DE_LEVA_E_TRAZ',
              description: 'string',
              assistancePremiumAmount: {
                amount: '2000.00',
                unit: {
                  code: 'R$',
                  description: 'BRL',
                },
              },
            },
          ],
          premiumInfo: {
            paymentsQuantity: 4,
            totalPremiumAmount: {
              amount: '2000.00',
              unit: {
                code: 'R$',
                description: 'BRL',
              },
            },
            totalNetAmount: {
              amount: '2000.00',
              unit: {
                code: 'R$',
                description: 'BRL',
              },
            },
            IOF: {
              amount: '2000.00',
              unit: {
                code: 'R$',
                description: 'BRL',
              },
            },
            interestRateOverPayments: 10,
            coverages: [
              {
                branch: '0111',
                code: 'RESIDENCIAL_IMOVEL_BASICA',
                description: 'string',
                internalCode: 'string',
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
                amount: {
                  amount: '2000.00',
                  unit: {
                    code: 'R$',
                    description: 'BRL',
                  },
                },
                paymentType: 'BOLETO',
              },
            ],
          },
          links: {
            redirect: 'http://www.abcseguros.com/propostas_cotacao?propID=003',
          },
        },
      ],
      customData: {
        customerIdentification: [
          {
            fieldId: '578-psd-71md6971kjh-2d414',
            value: 'string',
          },
        ],
        customerQualification: [
          {
            fieldId: '578-psd-71md6971kjh-2d414',
            value: 'string',
          },
        ],
        customerComplimentaryInfo: [
          {
            fieldId: '578-psd-71md6971kjh-2d414',
            value: 'string',
          },
        ],
        generalQuoteInfo: [
          {
            fieldId: '578-psd-71md6971kjh-2d414',
            value: 'string',
          },
        ],
        riskLocationInfo: [
          {
            fieldId: '578-psd-71md6971kjh-2d414',
            value: 'string',
          },
        ],
        insuredObjects: [
          {
            fieldId: '578-psd-71md6971kjh-2d414',
            value: 'string',
          },
        ],
        beneficiaries: [
          {
            fieldId: '578-psd-71md6971kjh-2d414',
            value: 'string',
          },
        ],
        coverages: [
          {
            fieldId: '578-psd-71md6971kjh-2d414',
            value: 'string',
          },
        ],
        generalClaimInfo: [
          {
            fieldId: '578-psd-71md6971kjh-2d414',
            value: 'string',
          },
        ],
      },
    },
  },
]

exports.getPatrimonialDiverseRisksQuoteStatus = (req, res, next) => {
  res.json(quotePatrimonialDiverseRisksQuoteStatus)
}

exports.getPatrimonialDiverseRisksRequest = (req, res, next) => {
  res.json(quotePatrimonialDiverseRisksRequest)
}
