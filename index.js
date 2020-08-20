const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb://wonjin:wjdqhrtns1@cluster0-shard-00-00.ktca5.mongodb.net:27017,cluster0-shard-00-01.ktca5.mongodb.net:27017,cluster0-shard-00-02.ktca5.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-gb244j-shard-0&authSource=admin&retryWrites=true&w=majority'
    , { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})