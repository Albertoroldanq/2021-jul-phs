import React, { useState } from 'react';
import Calendar from 'react-calendar';

const BookingCalendar = (props) => {
    const [value, onChange] = useState(new Date());
    // const [allAppointments, setAllAppointments] =




    return (
        <div>
            <Calendar
                onChange={onChange}
                value={value}
            />
            <div>
                {props.allAppointments.map((appointment) => {
                    return (
                        <p>{appointment.date}</p>
                    )
                })}
            </div>
            <p>{props.currentDoctor.firstName}</p>
        </div>
    );
}

export default BookingCalendar