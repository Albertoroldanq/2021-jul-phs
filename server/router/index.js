const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId
const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}

const mongoUrl = 'mongodb://root:password@localhost:27017'
const mongoSettings = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}


function router(app) {
    app.get('/doctors', cors(corsOptions), (request, response) => {
        MongoClient.connect(mongoUrl, mongoSettings, async (error, client) => {
            const db = client.db('phs')
            const doctorsCollection = db.collection('doctors')
            const doctors = await doctorsCollection.find().toArray()

            response.json(doctors)
        })
    })

    app.get('/patients', (request, response) => {
        MongoClient.connect(mongoUrl, mongoSettings, async (error, client) => {
            const db = client.db('phs')
            const patientsCollection = db.collection('patients')
            const patients = await patientsCollection.find().toArray()

            response.json(patients)
        })
    })

    app.get('/appointments', (request, response) => {
        MongoClient.connect(mongoUrl, mongoSettings, async (error, client) => {
            const db = client.db('phs')
            const appointmentsCollection = db.collection('appointments')
            const appointments = await appointmentsCollection.find().toArray()

            response.json(appointments)
        })
    })

    app.get('/appointments/:doctorId/:day', (request, response) => {
        const doctorId = request.params.doctorId
        const day = request.params.day
        MongoClient.connect(mongoUrl, mongoSettings, async (error, client) => {
            const db = client.db('phs')
            const appointmentsCollection = db.collection('appointments')
            const appointmentsBookedDoctorDate = await appointmentsCollection.find({doctorId: doctorId, date: day}).toArray()

            response.json(appointmentsBookedDoctorDate)
        })
    })
}

module.exports = router