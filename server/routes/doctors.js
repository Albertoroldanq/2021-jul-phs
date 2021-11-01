import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}

const router = express.Router()

import { getDoctors, getDoctorBookedTimes } from '../controllers/doctors.js'
import { createAppointment } from '../controllers/appointments.js'

router.get('/doctors', cors(corsOptions), getDoctors)
router.get('/doctors/:id/:date', cors(corsOptions), getDoctorBookedTimes)
router.post('/appointmentBooked', cors(corsOptions), createAppointment)

//
// function routes(app) {
//     app.get('/doctors', cors(corsOptions), (request, response) => {
//         MongoClient.connect(mongoUrl, mongoSettings, async (error, client) => {
//             const db = client.db('phs')
//             const doctorsCollection = db.collection('doctors')
//             const doctors = await doctorsCollection.find().toArray()
//
//             response.json(doctors)
//         })
//     })
//
//     app.get('/doctors/:id/:date', cors(corsOptions), (request, response) => {
//             let id = ObjectId(request.params.id)
//             let day = request.params.date
//             MongoClient.connect(mongoUrl, mongoSettings, async (error, client) => {
//                     const db = client.db('phs')
//                     const doctors = db.collection('doctors')
//                     const doctor = await doctors.find({_id: id}).toArray()
//                     let doctorBookedTimes = []
//                     if (doctor[0].appointments[day]) {
//                         doctor[0].appointments[day].forEach(time => {
//                             doctorBookedTimes.push(time.time)
//                         })
//                     }
//                     response.json(doctorBookedTimes)
//                 }
//             )
//         }
//     )
//
//     app.post('/appointmentBooked/', (request, response) => {
//         let doctorId = request.body.doctorId
//         let date = request.body.date.toString()
//         let data =
//             {
//                 time: request.body.time,
//                 name: request.body.name,
//                 email: request.body.email,
//                 description: request.body.description
//             }
//
//         let dataToDisplay = data
//         MongoClient.connect(mongoUrl, mongoSettings, async (error, client) => {
//             const db = client.db('phs')
//             const doctorsCollection = db.collection('doctors')
//
//             const doctors = await doctorsCollection.updateOne({_id: ObjectId(doctorId)}, {$push: {[`appointments.${date}`]: data}})
//
//             response.json(dataToDisplay)
//         })
//     })
//
//
// }
//
export default router