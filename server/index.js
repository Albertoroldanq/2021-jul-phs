const express = require('express')
const router = require('./router/')
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId

const app = express()
const port = 5000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())
app.use(express.static('public'))

router(app)

app.listen(port)