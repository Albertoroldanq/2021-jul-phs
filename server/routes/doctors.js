import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}

const router = express.Router()

import {getDoctors, getDoctorBookedTimesPerDay} from '../controllers/doctors.js'
import {createAppointment} from '../controllers/appointments.js'

router.get('/doctors', cors(corsOptions), getDoctors)
router.get('/doctors/:id/:date', cors(corsOptions), getDoctorBookedTimesPerDay)
router.post('/appointmentBooked/', cors(corsOptions), createAppointment)

export default router