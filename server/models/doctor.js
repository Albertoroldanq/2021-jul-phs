import mongoose from 'mongoose'

const doctorSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    appointments: {}
    }
)

const Doctor = mongoose.model('Doctor', doctorSchema)

export default Doctor