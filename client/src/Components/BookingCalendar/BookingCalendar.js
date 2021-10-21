import React, {useEffect, useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BookingCalendar = (props) => {

    const [value, onChange] = useState(new Date())
    const day = value.getDate().toString()
    const month = (value.getMonth() + 1).toString()
    const year = value.getFullYear().toString()
    const date = day + month + year

    const [bookedAppointments, setBookedAppointments] = useState([])
    const timeSlots = {
        9: "Available",
        10: "Available",
        11: "Available",
        12: "Available",
        13: "Available",
        14: "Available",
        15: "Available",
        16: "Available"
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
            <p>{bookedAppointments[0]}</p>
            <div>
                <button className={timeSlots[9]}>9-10</button>
                <button className={timeSlots[10]}>10-11</button>
                <button className={timeSlots[11]}>11-12</button>
                <button className={timeSlots[12]}>12-13</button>
                <button className={timeSlots[13]}>13-14</button>
                <button className={timeSlots[14]}>14-15</button>
                <button className={timeSlots[15]}>15-16</button>
                <button className={timeSlots[16]}>16-17</button>
            </div>

        </div>
    );

}

export default BookingCalendar