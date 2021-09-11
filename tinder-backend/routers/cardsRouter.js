const {Router} = require('express')
const router = Router()
const{Cards, validateData} = require('../models/cardModel')

// /api/tinder/card

router.post('/card', async (req, res)=>{
    try {
        const {error} = validateData(req.body)
        if(error){
            res.status(400).json({
                error, message: error.message
            })
        }
        const createCard = new Cards({name: req.body.name, imgUrl: req.body.imgUrl})
        await createCard.save()
        res.status(201).json({message: createCard})
    } catch (error) {
        res.status(500).json({message: "Serverga ma'lumot kelmadi..."})
    }
})

router.get('/card', async (req, res)=>{
    try {
        const card = await Cards.find()
        res.status(200).send(card)
        
    } catch (error) {
        res.status(500).json({message: "Serverda xatolik yuz berdi"})
    }
})


module.exports = router