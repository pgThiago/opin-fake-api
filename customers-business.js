const complimentaryInfo = [
  {
    cnpj: "73418285000159",
    updateDateTime: "2020-07-21T08:30:00Z",
    startDate: "2014-05-21",
    relationshipBeginning: "2014-05-21",
    productsServices: [
      {
        contract: "string",
        type: "MICROSSEGUROS",
        insuranceLineCode: "6272",
        procurators: [
          {
            nature: "PROCURADOR",
            cpfNumber: "73677831148",
            civilName: "Elza Milena Stefany Teixeira",
            socialName: "string",
          },
        ],
      },
    ],
  },
];

const qualification = [
  {
    cnpj: "73418285000159",
    updateDateTime: "2021-05-21T08:30:00Z",
    mainBranch: "string",
    secondaryBranch: "string",
    informedRevenue: {
      incomeFrequency: "MENSAL",
      currency: "BRL",
      amount: 100000.04,
      year: "2010",
    },
    informedPatrimony: {
      currency: "BRL",
      amount: 100000.04,
      date: "2012-05-21",
    },
  },
];
const identification = [
  {
    cnpj: "73418285000159",
    updateDateTime: "2021-05-21T08:30:00Z",
    businessId: "578-psd-71md6971kjh-2d414",
    brandName: "Organização A",
    companyInfo: {
      cnpjNumber: "01773247000563",
      name: "Empresa da Organização A",
    },
    businessName: "Luiza e Benjamin Assessoria Jurídica Ltda",
    businessTradeName: "Organização B",
    incorporationDate: "2012-05-21",
    document: {
      businesscnpjNumber: "50685362006773",
      businessRegisterNumberOriginCountry: "string",
      country: "BRA",
      expirationDate: "2023-05-21",
    },
    type: "PRIVADO",
    contact: {
      postalAddresses: [
        {
          address: "Av Naburo Ykesaki, 1270",
          additionalInfo: "Fundos",
          districtName: "Centro",
          townName: "Marília",
          countrySubDivision: "SP",
          postCode: "17500001",
          ibgeTownCode: "17500001",
          country: "Brasil",
          countryCode: "BRA",
          geographicCoordinates: {
            latitude: "-23.5475000",
            longitude: "-46.6361100",
          },
        },
      ],
      phones: [
        {
          countryCallingCode: "55",
          areaCode: "19",
          number: "29875132",
          phoneExtension: "932",
        },
      ],
      emails: [
        {
          email: "nome@br.net",
        },
      ],
    },
    parties: [
      {
        type: "SOCIO",
        civilName: "Juan Kaique Cláudio Fernandes",
        socialName: "string",
        startDate: "2014-05-21",
        shareholding: "0.510000",
        documentType: "CPF",
        documentNumber: "73677831148",
        documentCountry: "BRA",
        documentExpirationDate: "2021-05-21",
      },
    ],
  },
];

exports.getBusinessIdentification = (req, res, next) => {
  const { cnpj } = req.params;

  const filteredData = identification.filter((item) => item.cnpj === cnpj);

  res.json(filteredData);
};

exports.getBusinessQualification = (req, res, next) => {
  const { cnpj } = req.params;

  const filteredData = qualification.filter((item) => item.cnpj === cnpj);

  res.json(filteredData);
};

exports.getBusinessComplimentaryInfo = (req, res, next) => {
  const { cnpj } = req.params;

  const filteredData = complimentaryInfo.find((item) => item.cnpj === cnpj);

  res.json(filteredData);
};
