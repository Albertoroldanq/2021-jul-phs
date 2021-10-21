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


    app.get('/doctors/:id/:date', (request, response) => {
            let id = ObjectId(request.params.id)
            let day = request.params.date
            MongoClient.connect(mongoUrl, mongoSettings, async (error, client) => {
                    const db = client.db('phs')
                    const doctors = db.collection('doctors')
                    const doctor = await doctors.find({_id: id}).toArray()
                    let doctorBookedTimes = []
                    if (doctor[0].appointments[day]) {
                        doctor[0].appointments[day].forEach(time => {
                            doctorBookedTimes.push(time.time)

                        })
                    }
                    response.json(doctorBookedTimes)

                }
            )
        }
    )

    app.post('/appointmentBooked/', (request, response) => {
        let doctorId = request.body.doctor
        let date = request.body.date
        let id = ObjectId(doctorId)
        let data = {
            time: request.body.time,
            name: request.body.name,
            email: request.body.email,
            description: request.body.description
            // date: request.body.date,
            // time: request.body.time,
            // name: request.body.name,
            // email: request.body.email,
            // description: request.body.description
        }

        MongoClient.connect(mongoUrl, mongoSettings, async (error, client) => {
            const db = client.db('phs')
            const appointmentsCollection = db.collection('appointments')
            const appointments = await appointmentsCollection.updateOne({_id: id}, {$push: {appointments: {date: data}}})
            response.json(appointments)
        })
    })
}

module.exports = router