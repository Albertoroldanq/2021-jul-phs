const express = require('express')
const router = require('./router/')
const bodyParser= require('body-parser')
const cors = require('cors')

const app = express()
const port = 5000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())
app.use(express.static('public'))
app.use(cors())


router(app)

app.listen(port)