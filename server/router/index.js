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

    app.get('/doctors/:id/:date', cors(corsOptions), (request, response) => {
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
        let doctorId = request.body.doctorId
        let date = request.body.date.toString()
        let data =
            {
                time: request.body.time,
                name: request.body.name,
                email: request.body.email,
                description: request.body.description
            }

        let dataToDisplay = data
        MongoClient.connect(mongoUrl, mongoSettings, async (error, client) => {
            const db = client.db('phs')
            const doctorsCollection = db.collection('doctors')

            const doctors = await doctorsCollection.updateOne({_id: ObjectId(doctorId)}, {$push: {[`appointments.${date}`]: data}})

            response.json(dataToDisplay)
        })
    })


}

module.exports = router