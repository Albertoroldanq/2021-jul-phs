import express from 'express';
import mongoose from 'mongoose';

import Doctor from '../models/doctor.js';

export const getDoctors = async (request, response) => {
    try {
        const doctorData = await Doctor.find()
        response.status(200).json(doctorData)
    } catch (error) {
        response.status(404).json({message: error.message})
    }
}

export const getDoctorBookedTimes = async (request, response) => {
    let id = request.params.id
    let day = request.params.date
    try {
        const doctor = await Doctor.find({_id: id})
        let doctorBookedTimes = []
        if (doctor[0].appointments[day]) {
            doctor[0].appointments[day].forEach(time => {
                doctorBookedTimes.push(time.time)
            })
        }
        response.status(200).json(doctorBookedTimes)
    } catch (error) {
        response.status(404).json({message: error.message})
    }
}