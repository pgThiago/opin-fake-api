const express = require("express");
const cors = require("cors");
const app = express();
const {
  getPatrimonial,
  getPatrimonialClaim,
  getPatrimonialPolicyInfo,
  getPatrimonialPremium,
} = require("./patrimonial");
const {
  getAuto,
  getAutoClaim,
  getAutoPolicyInfo,
  getAutoPremium,
} = require("./auto");
const {
  getAviation,
  getAviationClaim,
  getAviationPolicyInfo,
  getAviationPremium,
} = require("./aviation");
const {
  getfinancialRisk,
  getfinancialRiskClaim,
  getfinancialRiskPolicyInfo,
  getfinancialRiskPremium,
} = require("./financial-risk");
const {
  getNautical,
  getNauticalClaim,
  getNauticalPolicyInfo,
  getNauticalPremium,
} = require("./nautical");
const {
  getPetroleum,
  getPetroleumClaim,
  getPetroleumPolicyInfo,
  getPetroleumPremium,
} = require("./pretroleum");
const {
  getResponsibility,
  getResponsibilityClaim,
  getResponsibilityPolicyInfo,
  getResponsibilityPremium,
} = require("./responsibility");
const {
  getRural,
  getRuralClaim,
  getRuralPolicyInfo,
  getRuralPremium,
} = require("./rural");

const {
  getBusinessComplimentaryInfo,
  getBusinessIdentification,
  getBusinessQualification,
} = require("./customers-business");
const {
  getPersonalComplimentaryInfo,
  getPersonalIdentification,
  getPersonalQualification,
} = require("./customers-personal");

const { getResources } = require("./resources");

app.use(cors());
app.use(express.json());

app.get("/patrimonial/:policyId", (req, res) => getPatrimonial(req, res));
app.get("/patrimonial/:policyId/premium", (req, res) =>
  getPatrimonialPremium(req, res)
);
app.get("/patrimonial/:policyId/policy-info", (req, res) =>
  getPatrimonialPolicyInfo(req, res)
);
app.get("/patrimonial/:policyId/claim", (req, res) => getPatrimonialClaim(req, res));

app.get("/auto/:policyId", (req, res) => getAuto(req, res));
app.get("/auto/:policyId/premium", (req, res) => getAutoPremium(req, res));
app.get("/auto/:policyId/policy-info", (req, res) => getAutoPolicyInfo(req, res));
app.get("/auto/:policyId/claim", (req, res) => getAutoClaim(req, res));

app.get("/aviation/:policyId", (req, res) => getAviation(req, res));
app.get("/aviation/:policyId/premium", (req, res) => getAviationPremium(req, res));
app.get("/aviation/:policyId/policy-info", (req, res) =>
  getAviationPolicyInfo(req, res)
);
app.get("/aviation/:policyId/claim", (req, res) => getAviationClaim(req, res));

app.get("/financial-risk/:policyId", (req, res) => getfinancialRisk(req, res));
app.get("/financial-risk/:policyId/premium", (req, res) =>
  getfinancialRiskPremium(req, res)
);
app.get("/financial-risk/:policyId/policy-info", (req, res) =>
  getfinancialRiskPolicyInfo(req, res)
);
app.get("/financial-risk/:policyId/claim", (req, res) =>
  getfinancialRiskClaim(req, res)
);

app.get("/nautical/:policyId", (req, res) => getNautical(req, res));
app.get("/nautical/:policyId/premium", (req, res) => getNauticalPremium(req, res));
app.get("/nautical/:policyId/policy-info", (req, res) =>
  getNauticalPolicyInfo(req, res)
);
app.get("/nautical/:policyId/claim", (req, res) => getNauticalClaim(req, res));

app.get("/petroleum/:policyId", (req, res) => getPetroleum(req, res));
app.get("/petroleum/:policyId/premium", (req, res) => getPetroleumPremium(req, res));
app.get("/petroleum/:policyId/policy-info", (req, res) =>
  getPetroleumPolicyInfo(req, res)
);
app.get("/petroleum/:policyId/claim", (req, res) => getPetroleumClaim(req, res));

app.get("/responsibility/:policyId", (req, res) => getResponsibility(req, res));
app.get("/responsibility/:policyId/premium", (req, res) =>
  getResponsibilityPremium(req, res)
);
app.get("/responsibility/:policyId/policy-info", (req, res) =>
  getResponsibilityPolicyInfo(req, res)
);
app.get("/responsibility/:policyId/claim", (req, res) =>
  getResponsibilityClaim(req, res)
);

app.get("/rural/:policyId", (req, res) => getRural(req, res));
app.get("/rural/:policyId/premium", (req, res) => getRuralPremium(req, res));
app.get("/rural/:policyId/policy-info", (req, res) => getRuralPolicyInfo(req, res));
app.get("/rural/:policyId/claim", (req, res) => getRuralClaim(req, res));

app.get("/business/identifications/:cnpj", (req, res) =>
  getBusinessIdentification(req, res)
);
app.get("/business/qualifications/:cnpj", (req, res) =>
  getBusinessQualification(req, res)
);
app.get("/business/complimentary-information/:cnpj", (req, res) =>
  getBusinessComplimentaryInfo(req, res)
);

app.get("/personal/identifications/:cpf", (req, res) =>
  getPersonalIdentification(req, res)
);
app.get("/personal/qualifications/:cpf", (req, res) =>
  getPersonalQualification(req, res)
);
app.get("/personal/complimentary-information/:cpf", (req, res) =>
  getPersonalComplimentaryInfo(req, res)
);

app.get("/resources/:cpf", (req, res) => getResources(req, res));

app.listen(process.env.PORT || 80);
