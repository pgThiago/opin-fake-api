const quotePatrimonialLeadRequest = [
    {
        status: 'stri',
        statusUpdateDateTime: new Date().toISOString(),
    },
]

exports.getPatrimonialLeadRequest = (req, res, next) => {
    res.json(quotePatrimonialLeadRequest)
}
