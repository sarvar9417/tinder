const express = require('express')
const mongoose = require('mongoose')
const app = express()
// const Cards = require('./models/cardModel')
 const config = require('config')
const port = process.env.PORT || 5000
const mongoUri = config.get('mongoUri')
const Cors = require('cors')

app.use(express.json())
app.use(Cors())
app.use('/api/tinder/', require('./routers/cardsRouter'))

async function start(){
    try {
        await mongoose.connect(mongoUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
            .then(()=>console.log('Connect to MongoDB'))
            .catch(()=>console.log('Connecting error to MongoDB'))
        app.listen(port, ()=>console.log(`App has been startted on port ${port}`))
    } catch (error) {
        console.log('Serverda xatolik yuz berdi')  
        process.exit(1)
    }
}

start()