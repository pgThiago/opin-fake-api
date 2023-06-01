const quotePatrimonialCondominiumRequest = [
  {
    policyId: '22261a20-b7c1-4f86-9209-f7357746f661',
    status: 'OK',
    statusUpdateDateTime: new Date().toISOString(),
  },
]

const quotePatrimonialCondominiumQuoteStatus = [
  {
    policyId: '22261a20-b7c1-4f86-9209-f7357746f661',
    status: 'stri',
    statusUpdateDateTime: '2021-05-21T08:30:00Z',
    quoteData: {
      customerInfo: {
        identification: {
          updateDateTime: '2021-05-21T08:30:00Z',
          businessId: '578-psd-71md6971kjh-2d414',
          brandName: 'Organização A',
          companyInfo: {
            cnpjNumber: '01773247000563',
            name: 'Empresa da Organização A',
          },
          businessName: 'Luiza e Benjamin Assessoria Jurídica Ltda',
          businessTradeName: 'Organização B',
          incorporationDate: '2012-05-21',
          document: {
            businesscnpjNumber: '50685362006773',
            businessRegisterNumberOriginCountry: 'string',
            country: 'BRA',
            expirationDate: '2023-05-21',
          },
          type: 'PRIVADO',
          contact: {
            postalAddresses: [
              {
                address: 'Av Naburo Ykesaki, 1270',
                additionalInfo: 'Fundos',
                districtName: 'Centro',
                townName: 'Marília',
                countrySubDivision: 'SP',
                postCode: '17500001',
                ibgeTownCode: '17500001',
                country: 'Brasil',
                countryCode: 'BRA',
                geographicCoordinates: {
                  latitude: '-23.5475000',
                  longitude: '-46.6361100',
                },
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
          parties: [
            {
              type: 'SOCIO',
              civilName: 'Juan Kaique Cláudio Fernandes',
              socialName: 'string',
              startDate: '2014-05-21',
              shareholding: '0.510000',
              documentType: 'CPF',
              documentNumber: '73677831148',
              documentCountry: 'BRA',
              documentExpirationDate: '2021-05-21',
            },
          ],
        },
        qualification: {
          updateDateTime: '2021-05-21T08:30:00Z',
          mainBranch: 'string',
          secondaryBranch: 'string',
          informedRevenue: {
            incomeFrequency: 'DIARIA',
            currency: 'BRL',
            amount: '100000.04',
            year: '2010',
          },
          informedPatrimony: {
            currency: 'BRL',
            amount: '100000.04',
            date: '2012-05-21',
          },
        },
        complimentaryInfo: {
          updateDateTime: '2020-07-21T08:30:00Z',
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
        mainActivity: 'COMERCIO',
        isLegallyConstituted: true,
        condominiumType: true,
        termStartDate: '2022-10-02T00:00:00.000Z',
        termEndDate: '2022-10-02T00:00:00.000Z',
        quoteId: '12345678',
        insuranceTermStartDate: '2022-10-02T00:00:00.000Z',
        insuranceType: 'NOVO',
        policyId: '111111',
        insurerId: 'string',
        currency: 'BRL',
        basicCoverageIndex: 'SIMPLES',
        maxLMG: {
          amount: '2000.00',
          unit: {
            code: 'R$',
            description: 'BRL',
          },
        },
        includesAssistanceServices: true,
        claimAmount: {
          amount: '2000.00',
          unit: {
            code: 'R$',
            description: 'BRL',
          },
        },
        claimDescription: 'string',
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
            structuringType: 'CONDOMINIO_VERTICAL',
            propertyType: 'CONDOMINIO_RESIDENCIAL_COM_COMERCIO_NO_TERREO',
            hasElevator: true,
            isFullyOrPartiallyListed: true,
            numberOfBlocks: '3',
            condominiumAge: '20',
            hasReuseOfWater: true,
            securityProtection: ['CAMERA_CFTV'],
            riskLocationInfo: {
              address: 'Avenida Paulista, 2000',
              additionalInfo: 'Apartamento 1304',
              districtName: 'Cerqueira César',
              townName: 'São Paulo',
              countrySubDivision: 'AC',
              postCode: '1310200',
            },
            indenizationWithoutDepreciation: true,
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
      },
      quotes: [
        {
          quoteDateTime: '2023-05-21T08:30:00Z',
          susepProcessNumbers: ['string'],
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

exports.getPatrimonialCondominiumQuoteStatus = (req, res, next) => {
  res.json(quotePatrimonialCondominiumQuoteStatus)
}

exports.getPatrimonialCondominiumRequest = (req, res, next) => {
  res.json(quotePatrimonialCondominiumRequest)
}
