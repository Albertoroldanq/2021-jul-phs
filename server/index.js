import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import doctorRoutes from './routes/doctors.js'

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())
app.use(express.static('public'))
app.use(cors())
app.use('/', doctorRoutes)

const mongoUrl = 'mongodb://root:password@127.0.0.1:27017/phs?authSource=admin'
const mongoSettings = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const port = 5000

mongoose.connect(mongoUrl, mongoSettings)
    .then(() => app.listen(port, () => console.log(`Server running on port: ${port}`)))
    .catch((error)=> console.log(error.message) )

