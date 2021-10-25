import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'

import'./BookAppointmentForm.css'

const BookAppointmentForm = (props) => {
    const [patientName, setPatientName] = useState(null)
    const [patientEmail, setPatientEmail] = useState(null)
    const [appointmentDescription, setAppointmentDescription] = useState(null)
    const [bookedSuccessLink, setBookedSuccessLink] = useState('')
    const [bookButtonState, setBookButtonState] = useState('disabled')
    const [dataValidationErrorMessage, setDataValidationErrorMessage] = useState('hideDataValidationErrorMessage')

    const validateEmail = (mail) => {
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(mail !== null) {
            if (mail.match(mailformat)) {
                return true;
            } else {
                return false;
            }
        }
    }

    const handleEmail = (value) => {
        if (!validateEmail(value)) {
            setDataValidationErrorMessage('showDataValidationErrorMessage')
        } else {
            setDataValidationErrorMessage('hideDataValidationErrorMessage')
        }
    }

    const handleSubmit = async () => {
        if ((props.appointmentTime !== null || '') && (props.patientName !== null || '') && (props.patientEmail !== null) && (props.appointmentDescription !== null || '')) {
            const rawResponse = await fetch('http://localhost:5000/appointmentBooked/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "date": props.date,
                    "doctorId": props.currentDoctor._id,
                    "time": props.appointmentTime,
                    "name": patientName,
                    "email": patientEmail,
                    "description": appointmentDescription
                })
            })
        }
    }

    useEffect(() => {
        fetch('http://localhost:5000/doctors/' + props.currentDoctor._id + '/' + props.date).then(
            response => response.json().then(response => {
                props.setBookedAppointments(response)
            })
        )

        if ((props.appointmentTime !== null || '') && (patientName !== null || '') && (patientEmail !== null || '') && (validateEmail(patientEmail)) && (appointmentDescription !== null || '')) {
            setBookedSuccessLink(`/appointmentBooked?description=${appointmentDescription}&day=${props.day}&month=${props.month}&year=${props.year}&doctorLastName=${props.currentDoctor.lastName}&time=${props.appointmentTime}&name=${patientName}`)
            setBookButtonState('enabled')
        } else if ((props.appointmentTime === null || '') || (patientName === null || '') || (patientEmail === null) || (appointmentDescription === null || '')) {
            setBookedSuccessLink('/')
            setBookButtonState('disabled')
        }

        if (!validateEmail(patientEmail)) {
            setDataValidationErrorMessage('showDataValidationErrorMessage')
        } else {
            validateEmail('hideDataValidationErrorMessage')
        }
    }, [props.currentDoctor, props.value, patientName, appointmentDescription, patientEmail, props.appointmentTime])

    return (
        <div className={"patientDetailsForm"}>
            <h2>3. Introduce your details</h2>
            <div className={"bookingForm"}>
                <input type="hidden" value={props.currentDoctor._id} name="doctor"/>
                <input type="hidden" value={props.date} name="date"/>
                <input type="hidden" value={props.appointmentTime} name="time"/>
                <label>Full name</label>
                <input type="text" required placeholder="Enter your name" name="name"
                       onChange={e => setPatientName(e.target.value)} className="textInput"/>
                <label>Email</label>
                <input type="email" required placeholder="Enter your email" name="email"
                       onChange={e => {
                           setPatientEmail(e.target.value)
                           handleEmail(e.target.value)
                       }} className="textInput"/>
                <label>Describe symptoms</label>
                <textarea className="textareaInput" type="textarea" rows="5" cols="1" placeholder="Tell us more"
                          name="description" onChange={e => setAppointmentDescription(e.target.value)}
                          required/>
                <div className="dataValidationErrorMessage">
                    <p className={dataValidationErrorMessage}>Please, enter a valid email address.</p>
                </div>
                <div>
                    <Link to={bookedSuccessLink} value="Book an appointment!" onClick={handleSubmit}
                          className={bookButtonState + " bookButton"}>Book an appointment</Link>
                </div>
            </div>
        </div>
    )
}

export default BookAppointmentForm