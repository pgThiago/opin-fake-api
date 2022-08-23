const resources = [
  {
    cpf: "85711574051",
    resourceId: "25cac914-d8ae-6789-b215-650a6215820d",
    type: "CUSTOMERS_PERSONAL_IDENTIFICATIONS",
    status: "AVAILABLE",
  },
  {
    cpf: "85711574051",
    resourceId: "25cac914-d8ae-6789-b215-650a6215820d",
    type: "CUSTOMERS_PERSONAL_QUALIFICATION",
    status: "UNAVAILABLE",
  },
  {
    cpf: "85711574051",
    resourceId: "25cac914-d8ae-6789-b215-650a6215820d",
    type: "CUSTOMERS_PERSONAL_ADITTIONALINFO",
    status: "TEMPORARILY_UNAVAILABLE",
  },
  {
    cpf: "85711574051",
    resourceId: "25cac914-d8ae-6789-b215-650a6215820d",
    type: "CUSTOMERS_BUSINESS_IDENTIFICATIONS",
    status: "PENDING_AUTHORISATION",
  },
  {
    cpf: "85711574051",
    resourceId: "25cac914-d8ae-6789-b215-650a6215820d",
    type: "CUSTOMERS_BUSINESS_QUALIFICATION",
    status: "AVAILABLE",
  },
  {
    cpf: "85711574051",
    resourceId: "25cac914-d8ae-6789-b215-650a6215820d",
    type: "CUSTOMERS_BUSINESS_ADITTIONALINFO",
    status: "UNAVAILABLE",
  },
  {
    cpf: "85711574051",
    resourceId: "25cac914-d8ae-6789-b215-650a6215820d",
    type: "CAPITALIZATION_TITLES",
    status: "TEMPORARILY_UNAVAILABLE",
  },
  {
    cpf: "85711574051",
    resourceId: "25cac914-d8ae-6789-b215-650a6215820d",
    type: "PENSION_RISK",
    status: "PENDING_AUTHORISATION",
  },
  {
    cpf: "85711574051",
    resourceId: "25cac914-d8ae-6789-b215-650a6215820d",
    type: "DAMAGES_AND_PEOPLE_PATRIMONIAL",
    status: "AVAILABLE",
  },
  {
    cpf: "85711574051",
    resourceId: "25cac914-d8ae-6789-b215-650a6215820d",
    type: "DAMAGES_AND_PEOPLE_AERONAUTICAL",
    status: "UNAVAILABLE",
  },
  {
    cpf: "85711574051",
    resourceId: "25cac914-d8ae-6789-b215-650a6215820d",
    type: "DAMAGES_AND_PEOPLE_NAUTICAL",
    status: "TEMPORARILY_UNAVAILABLE",
  },
  {
    cpf: "85711574051",
    resourceId: "25cac914-d8ae-6789-b215-650a6215820d",
    type: "DAMAGES_AND_PEOPLE_NUCLEAR",
    status: "PENDING_AUTHORISATION",
  },
  {
    cpf: "85711574051",
    resourceId: "25cac914-d8ae-6789-b215-650a6215820d",
    type: "DAMAGES_AND_PEOPLE_OIL",
    status: "AVAILABLE",
  },
  {
    cpf: "85711574051",
    resourceId: "25cac914-d8ae-6789-b215-650a6215820d",
    type: "DAMAGES_AND_PEOPLE_RESPONSABILITY",
    status: "UNAVAILABLE",
  },
  {
    cpf: "85711574051",
    resourceId: "25cac914-d8ae-6789-b215-650a6215820d",
    type: "DAMAGES_AND_PEOPLE_TRANSPORT",
    status: "TEMPORARILY_UNAVAILABLE",
  },
  {
    cpf: "85711574051",
    resourceId: "25cac914-d8ae-6789-b215-650a6215820d",
    type: "DAMAGES_AND_PEOPLE_FINANCIAL_RISKS",
    status: "PENDING_AUTHORISATION",
  },
  {
    cpf: "85711574051",
    resourceId: "25cac914-d8ae-6789-b215-650a6215820d",
    type: "DAMAGES_AND_PEOPLE_RURAL",
    status: "AVAILABLE",
  },
  {
    cpf: "85711574051",
    resourceId: "25cac914-d8ae-6789-b215-650a6215820d",
    type: "DAMAGES_AND_PEOPLE_AUTO",
    status: "UNAVAILABLE",
  },
  {
    cpf: "85711574051",
    resourceId: "25cac914-d8ae-6789-b215-650a6215820d",
    type: "DAMAGES_AND_PEOPLE_HOUSING",
    status: "TEMPORARILY_UNAVAILABLE",
  },
  {
    cpf: "85711574051",
    resourceId: "25cac914-d8ae-6789-b215-650a6215820d",
    type: "DAMAGES_AND_PEOPLE_PEOPLE",
    status: "PENDING_AUTHORISATION",
  },
  {
    cpf: "85711574051",
    resourceId: "25cac914-d8ae-6789-b215-650a6215820d",
    type: "DAMAGES_AND_PEOPLE_ACCEPTANCE_AND_BRANCHES_ABROAD",
    status: "AVAILABLE",
  },
];

exports.getResources = (req, res, next) => {
  const { cpf } = req.params;

  const filteredData = resources.filter((item) => item.cpf === cpf);

  res.json(filteredData);
};
