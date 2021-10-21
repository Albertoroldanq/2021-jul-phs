import React, {useEffect, useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './BookingCalendar.css'

const BookingCalendar = (props) => {
    const [value, onChange] = useState(new Date())
    const [bookedAppointments, setBookedAppointments] = useState([])
    const [appointmentTime, setAppointmentTime] = useState(null)

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

    bookedAppointments.forEach(appointment => {
        timeSlots[appointment] = "booked"

    })

    useEffect(() => {
        fetch('http://localhost:5000/doctors/' + props.currentDoctor._id + '/' + date).then(
            response => response.json().then(response => {
                setBookedAppointments(response)
            })
        )
    }, [value])

    return (
        <div>
            <Calendar
                onChange={onChange}
                value={value}
            />

            {value.getDay() !== 6 && value.getDay() !== 0 ?
                <div>
                    <button className={timeSlots[9]} onClick={() => {setAppointmentTime(9)}}>9-10</button>
                    <button className={timeSlots[10]} onClick={() => {setAppointmentTime(10)}}>10-11</button>
                    <button className={timeSlots[11]} onClick={() => {setAppointmentTime(11)}}>11-12</button>
                    <button className={timeSlots[12]} onClick={() => {setAppointmentTime(12)}}>12-13</button>
                    <button className={timeSlots[13]} onClick={() => {setAppointmentTime(13)}}>13-14</button>
                    <button className={timeSlots[14]} onClick={() => {setAppointmentTime(14)}}>14-15</button>
                    <button className={timeSlots[15]} onClick={() => {setAppointmentTime(15)}}>15-16</button>
                    <button className={timeSlots[16]} onClick={() => {setAppointmentTime(16)}}>16-17</button>
                </div> : <div></div>}

            <div>
                <form method="POST" action="/appointmentBooked">
                    <input type="hidden" value={props.currentDoctor._id} name="doctor"/>
                    <input type="hidden" value={date} name="date"/>
                    <input type="hidden" value={appointmentTime} name="time"/>
                    <input type="text" required placeholder="Enter your name" name="name"/>
                    <input type="email" required placeholder="Enter your email" name="email"/>
                    <input type="textarea" required placeholder="Provide a brief description and symptoms for your appointment" name="description"/>
                    <input type="submit" value="Book an appointment!"/>
                </form>
            </div>
        </div>
    )
}
export default BookingCalendar