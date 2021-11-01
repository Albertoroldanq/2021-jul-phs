import express from 'express';
import mongoose from 'mongoose';

import Doctor from '../models/doctor.js';

export const createAppointment = async (request, response) => {
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

    try {
        const doctors = await Doctor.updateOne({_id: doctorId}, {$push: {[`appointments.${date}`]: data}})
        response.status(200).json(dataToDisplay)
    } catch (error) {
        response.status(404).json({message: error.message})

    }
}