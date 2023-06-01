const quotePatrimonialLeadRequest = [
  {
    policyId: '22261a20-b7c1-4f86-9209-f7357746f661',
    status: 'stri',
    statusUpdateDateTime: new Date().toISOString(),
  },
]

exports.getPatrimonialLeadRequest = (req, res, next) => {
  res.json(quotePatrimonialLeadRequest)
}
