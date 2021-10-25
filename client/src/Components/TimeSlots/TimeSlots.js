import React, {useEffect, useState} from 'react';
import BookingCalendar from "../BookingCalendar/BookingCalendar";

const TimeSlots = (props) => {

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

    props.bookedAppointments.forEach(appointment => {
        timeSlots[appointment] = "booked"
    })

    return (
    <div className="buttonContainer">
        <button className={timeSlots[9]} onClick={() => {
            props.setAppointmentTime(9)
        }}>9 - 10 AM
        </button>
        <button className={timeSlots[10]} onClick={() => {
            props.setAppointmentTime(10)
        }}>10 - 11 AM
        </button>
        <button className={timeSlots[11]} onClick={() => {
            props.setAppointmentTime(11)
        }}>11 - 12 PM
        </button>
        <button className={timeSlots[12]} onClick={() => {
            props.setAppointmentTime(12)
        }}>12 - 13 PM
        </button>
        <button className={timeSlots[13]} onClick={() => {
            props.setAppointmentTime(13)
        }}>1 - 2 PM
        </button>
        <button className={timeSlots[14]} onClick={() => {
            props.setAppointmentTime(14)
        }}>2 - 3 PM
        </button>
        <button className={timeSlots[15]} onClick={() => {
            props.setAppointmentTime(15)
        }}>3 - 4 PM
        </button>
        <button className={timeSlots[16]} onClick={() => {
            props.setAppointmentTime(16)
        }}>4 - 5 PM
        </button>
    </div>
    )
}

export default TimeSlots