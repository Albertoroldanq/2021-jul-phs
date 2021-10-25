import React, {useEffect, useState} from 'react';
import Calendar from 'react-calendar';
import {Link} from 'react-router-dom'
import 'react-calendar/dist/Calendar.css';
import './BookingCalendar.css'

const BookingCalendar = (props) => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    const [value, onChange] = useState(tomorrow)
    const [minDate, setMinDate] = useState(tomorrow)
    const [bookedAppointments, setBookedAppointments] = useState([])
    const [appointmentTime, setAppointmentTime] = useState(null)
    const [patientName, setPatientName] = useState(null)
    const [patientEmail, setPatientEmail] = useState(null)
    const [appointmentDescription, setAppointmentDescription] = useState(null)
    const [displaytimeSlotsAndDates, setVisibility] = useState('hidden')
    const [bookedSuccessLink, setBookedSuccessLink] = useState('')
    const [bookButtonState, setBookButtonState] = useState('disabled')
    const [timeSlotSelected, setTimeSlotSelected] = useState(null)

    const day = value.getDate().toString()
    const month = (value.getMonth() + 1).toString()
    const year = value.getFullYear().toString()
    const date = day + month + year
    const timeSlots = {
        9: "available",
        10: "available",
        11: "available",
        12: "available",
        13: "available",
        14: "available",
        15: "available",
        16: "available"
    }

    const timeSlotsSelected = {
        9: "unselected",
        10: "unselected",
        11: "unselected",
        12: "unselected",
        13: "unselected",
        14: "unselected",
        15: "unselected",
        16: "unselected"
    }

    bookedAppointments.forEach(appointment => {
        timeSlots[appointment] = "booked"
    })

    useEffect(() => {
        fetch('http://localhost:5000/doctors/' + props.currentDoctor._id + '/' + date).then(
            response => response.json().then(response => {
                setBookedAppointments(response)
                setVisibility('')
            })
        )

        if ((appointmentTime !== null || '') && (patientName !== null || '') && (patientEmail !== null) && (appointmentDescription !== null || '')) {
            setBookedSuccessLink(`/appointmentBooked?description=${appointmentDescription}&day=${day}&month=${month}&year=${year}&doctorLastName=${props.currentDoctor.lastName}&time=${appointmentTime}&name=${patientName}`)
            setBookButtonState('enabled')
        } else if ((appointmentTime === null || '') || (patientName === null || '') || (patientEmail === null) || (appointmentDescription === null || '')) {
            setBookedSuccessLink('/')
            setBookButtonState('disabled')
        }
    }, [props.currentDoctor, value, patientName, appointmentDescription, patientEmail, appointmentTime])


    const handleSubmit = async () => {

        if ((appointmentTime !== null || '') && (patientName !== null || '') && (patientEmail !== null) && (appointmentDescription !== null || '')) {

            const rawResponse = await fetch('http://localhost:5000/appointmentBooked/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "date": date,
                    "doctorId": props.currentDoctor._id,
                    "time": appointmentTime,
                    "name": patientName,
                    "email": patientEmail,
                    "description": appointmentDescription
                })
            })
        }
    }

    return (
        <div>
            <div >
                <Calendar onChange={onChange} value={value} minDate={minDate} className="calendar"/>
                <div id="availabilityContainer" className={displaytimeSlotsAndDates}>
                    {value.getDay() !== 6 && value.getDay() !== 0 ?
                        <div className="buttonContainer">
                            <button className={timeSlots[9]} onClick={() => {
                                setAppointmentTime(9)

                            }}>9-10
                            </button>
                            <button className={timeSlots[10]} onClick={() => {
                                setAppointmentTime(10)
                                setTimeSlotSelected(10)
                            }}>10-11
                            </button>
                            <button className={timeSlots[11]} onClick={() => {
                                setAppointmentTime(11)
                            }}>11-12
                            </button>
                            <button className={timeSlots[12]} onClick={() => {
                                setAppointmentTime(12)
                            }}>12-13
                            </button>
                            <button className={timeSlots[13]} onClick={() => {
                                setAppointmentTime(13)
                            }}>13-14
                            </button>
                            <button className={timeSlots[14]} onClick={() => {
                                setAppointmentTime(14)
                            }}>14-15
                            </button>
                            <button className={timeSlots[15]} onClick={() => {
                                setAppointmentTime(15)
                            }}>15-16
                            </button>
                            <button className={timeSlots[16]} onClick={() => {
                                setAppointmentTime(16)
                            }}>16-17
                            </button>
                            <div>
                                <h4>3. Introduce your details</h4>
                                <input type="hidden" value={props.currentDoctor._id} name="doctor"/>
                                <input type="hidden" value={date} name="date"/>
                                <input type="hidden" value={appointmentTime} name="time"/>
                                <h5>Full name</h5>
                                <input type="text" required placeholder="Enter your name" name="name"
                                       onChange={e => setPatientName(e.target.value)} className="textInput"/>
                                <h5>Email</h5>
                                <input type="email" required placeholder="Enter your email" name="email"
                                       onChange={e => setPatientEmail(e.target.value)} className="textInput"/>
                                <h5>Describe symptoms</h5>
                                <textarea type="textarea"
                                          rows="5"
                                          cols="1"
                                          required
                                          placeholder="Tell us more"
                                          name="description" onChange={e => setAppointmentDescription(e.target.value)}
                                          className="textareaInput"/>
                                <div>
                                    <Link to={bookedSuccessLink} value="Book an appointment!" onClick={handleSubmit}
                                          className={bookButtonState + " bookButton"}>Book an appointment</Link>
                                </div>

                            </div>
                        </div>
                        : <div></div>}
                </div>
            </div>
        </div>
    )
}
export default BookingCalendar