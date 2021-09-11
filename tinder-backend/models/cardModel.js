const {Schema,  model} = require('mongoose')
const Joi = require('joi')
const cardSchema = new Schema({
    name:  String,
    imgUrl: String
})

function validateData(card) {
    const schema  = Joi.object({
        name: Joi.string().required(),
        imgUrl: Joi.string().required()

    })
    return schema.validate(card)
}

module.exports.validateData = validateData
module.exports.Cards = model('Cards', cardSchema)