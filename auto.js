const autoData = [
  {
    cpf: "85711574051",
    brand: "MAPFRE",
    companies: [
      {
        companyName: "MAPFRE Auto Mock",
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
        companyName: "MAPFRE Auto Mock",
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
        companyName: "MAPFRE Auto Mock",
        cnpjNumber: "12345678901234",
        policies: ["071641e8-1050-11ed-861d-0242ac120002"],
      },
    ],
  },
];

const autoPremiumData = [
  {
    policyId: "f762dcb3-5b5d-54ff-988f-93defd8dd01b",
    cpf: "85711574051",
    paymentsQuantity: 4,
    amount: {
      amount: 2000,
      currency: "BRL",
    },
    coverages: [
      {
        branch: "111",
        code: "CASCO_COMPREENSIVA",
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
    policyId: "071641e8-1050-11ed-861d-0242ac120002",
    cpf: "15387180065",
    paymentsQuantity: 4,
    amount: {
      amount: 2000,
      currency: "BRL",
    },
    coverages: [
      {
        branch: "111",
        code: "CASCO_COMPREENSIVA",
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
        code: "CASCO_COMPREENSIVA",
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

const autoClaimData = [
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
    },
    denialJustification: "RISCO_EXCLUIDO",
    denialJustificationDescription: "string",
    coverages: [
      {
        insuredObjectId: "string",
        branch: "111",
        code: "CASCO_COMPREENSIVA",
        description: "string",
        warningDate: "2022-05-01",
        thirdPartyClaimDate: "2022-05-01",
      },
    ],
    branchInfo: {
      covenantNumber: "string",
      occurrenceCause: "ROUBO_OU_FURTO",
      driverAtOccurrenceSex: "MASCULINO",
      driverAtOccurrenceBirthDate: "AAAA-MM-DD",
      occurrenceCountry: "BRA",
      occurrencePostCode: "10000000",
    },
  },
  {
    policyId: "e00dace0-104e-11ed-861d-0242ac120002",
    cpf: "02188705076",
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
        code: "CASCO_COMPREENSIVA",
        description: "string",
        warningDate: "2022-05-01",
        thirdPartyClaimDate: "2022-05-01",
      },
    ],
    branchInfo: {
      covenantNumber: "string",
      occurrenceCause: "ROUBO_OU_FURTO",
      driverAtOccurrenceSex: "MASCULINO",
      driverAtOccurrenceBirthDate: "AAAA-MM-DD",
      occurrenceCountry: "BRA",
      occurrencePostCode: "10000000",
    },
  },
  {
    policyId: "071641e8-1050-11ed-861d-0242ac120002",
    cpf: "15387180065",
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
        code: "CASCO_COMPREENSIVA",
        description: "string",
        warningDate: "2022-05-01",
        thirdPartyClaimDate: "2022-05-01",
      },
    ],
    branchInfo: {
      covenantNumber: "string",
      occurrenceCause: "ROUBO_OU_FURTO",
      driverAtOccurrenceSex: "MASCULINO",
      driverAtOccurrenceBirthDate: "AAAA-MM-DD",
      occurrenceCountry: "BRA",
      occurrencePostCode: "10000000",
    },
  },
];

const autoPolicyInfoData = [
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
        hasExactVehicleIdentification: true,
        modality: "VALOR_DE_MERCADO_REFERENCIADO",
        amountReferenceTable: "MOLICAR",
        model: "string",
        year: "6206",
        fareCategory: "10",
        riskPostCode: "10000000",
        vehicleUsage: "LAZER",
        frequentDestinationPostCode: "10000000",
        overnightPostCode: "10000000",
        coverages: [
          {
            branch: "111",
            code: "CASCO_COMPREENSIVA",
            description: "string",
            internalCode: "string",
            susepProcessNumber: "string",
            LMI: {
              amount: 2000,
              currency: "BRL",
            },
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
            adjustmentRate: 10,
            premiumAmount: {
              amount: 2000,
              currency: "BRL",
            },
            compensationType: "PARCIAL",
            partialCompensationPercentage: 10,
            percentageOverLMI: 10,
            daysForTotalCompensation: 0,
            boundCoverage: "VEICULO",
          },
        ],
      },
    ],
    coverages: [
      {
        branch: "111",
        code: "CASCO_COMPREENSIVA",
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
    repairNetwork: "REDE_REFERENCIADA",
    repairedPartsUsageType: "NOVA_E_USADA",
    repairedPartsClassification: "ORIGINAL_E_COMPATIVEL",
    repairedPartsNationality: "NACIONAL_E_IMPORTADA",
    validityType: "SEMESTRAL_INTERMITENTE",
    otherCompensations: "string",
    otherBenefits: "DESCONTOS",
    assistancePackages: "ATE_DEZ_SERVICOS",
    isExpiredRiskPolicy: true,
    bonusDiscountRate: 0,
    bonusClass: "string",
    drivers: [
      {
        identification: "12345678900",
        sex: "MASCULINO",
        birthDate: "AAAA-MM-DD",
        licensedExperience: 4,
      },
    ],
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
        hasExactVehicleIdentification: true,
        modality: "VALOR_DE_MERCADO_REFERENCIADO",
        amountReferenceTable: "MOLICAR",
        model: "string",
        year: "6206",
        fareCategory: "10",
        riskPostCode: "10000000",
        vehicleUsage: "LAZER",
        frequentDestinationPostCode: "10000000",
        overnightPostCode: "10000000",
        coverages: [
          {
            branch: "111",
            code: "CASCO_COMPREENSIVA",
            description: "string",
            internalCode: "string",
            susepProcessNumber: "string",
            LMI: {
              amount: 2000,
              currency: "BRL",
            },
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
            adjustmentRate: 10,
            premiumAmount: {
              amount: 2000,
              currency: "BRL",
            },
            compensationType: "PARCIAL",
            partialCompensationPercentage: 10,
            percentageOverLMI: 10,
            daysForTotalCompensation: 0,
            boundCoverage: "VEICULO",
          },
        ],
      },
    ],
    coverages: [
      {
        branch: "111",
        code: "CASCO_COMPREENSIVA",
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
    repairNetwork: "REDE_REFERENCIADA",
    repairedPartsUsageType: "NOVA_E_USADA",
    repairedPartsClassification: "ORIGINAL_E_COMPATIVEL",
    repairedPartsNationality: "NACIONAL_E_IMPORTADA",
    validityType: "SEMESTRAL_INTERMITENTE",
    otherCompensations: "string",
    otherBenefits: "DESCONTOS",
    assistancePackages: "ATE_DEZ_SERVICOS",
    isExpiredRiskPolicy: true,
    bonusDiscountRate: 0,
    bonusClass: "string",
    drivers: [
      {
        identification: "12345678900",
        sex: "MASCULINO",
        birthDate: "AAAA-MM-DD",
        licensedExperience: 4,
      },
    ],
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
        hasExactVehicleIdentification: true,
        modality: "VALOR_DE_MERCADO_REFERENCIADO",
        amountReferenceTable: "MOLICAR",
        model: "string",
        year: "6206",
        fareCategory: "10",
        riskPostCode: "10000000",
        vehicleUsage: "LAZER",
        frequentDestinationPostCode: "10000000",
        overnightPostCode: "10000000",
        coverages: [
          {
            branch: "111",
            code: "CASCO_COMPREENSIVA",
            description: "string",
            internalCode: "string",
            susepProcessNumber: "string",
            LMI: {
              amount: 2000,
              currency: "BRL",
            },
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
            adjustmentRate: 10,
            premiumAmount: {
              amount: 2000,
              currency: "BRL",
            },
            compensationType: "PARCIAL",
            partialCompensationPercentage: 10,
            percentageOverLMI: 10,
            daysForTotalCompensation: 0,
            boundCoverage: "VEICULO",
          },
        ],
      },
    ],
    coverages: [
      {
        branch: "111",
        code: "CASCO_COMPREENSIVA",
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
    repairNetwork: "REDE_REFERENCIADA",
    repairedPartsUsageType: "NOVA_E_USADA",
    repairedPartsClassification: "ORIGINAL_E_COMPATIVEL",
    repairedPartsNationality: "NACIONAL_E_IMPORTADA",
    validityType: "SEMESTRAL_INTERMITENTE",
    otherCompensations: "string",
    otherBenefits: "DESCONTOS",
    assistancePackages: "ATE_DEZ_SERVICOS",
    isExpiredRiskPolicy: true,
    bonusDiscountRate: 0,
    bonusClass: "string",
    drivers: [
      {
        identification: "12345678900",
        sex: "MASCULINO",
        birthDate: "AAAA-MM-DD",
        licensedExperience: 4,
      },
    ],
  },
];

exports.getAuto = (req, res, next) => {
  const { cpf } = req.params;

  const filteredData = autoData
    .filter((item) => item.cpf === cpf)
    .map((i) => {
      const { cpf, ...rest } = i;
      return rest;
    });

  res.json(filteredData);
};

exports.getAutoClaim = (req, res, next) => {
  const { policyId } = req.params;

  const filteredData = autoClaimData
    .filter((item) => item.policyId === policyId)
    .map((i) => {
      const { cpf, ...rest } = i;
      return rest;
    });

  res.json(filteredData);
};

exports.getAutoPolicyInfo = (req, res, next) => {
  const { policyId } = req.params;

  const filteredData = autoPolicyInfoData.find(
    (item) => item.policyId === policyId
  );

  if (filteredData) {
    const { cpf, ...rest } = filteredData;
    res.json(rest);
  }

  res.json();
};

exports.getAutoPremium = (req, res, next) => {
  const { policyId } = req.params;

  const filteredData = autoPremiumData.find(
    (item) => item.policyId === policyId
  );

  if (filteredData) {
    const { cpf, ...rest } = filteredData;
    res.json(rest);
  }

  res.json();
};
