import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BookingCalendar = (props) => {

    const [value, onChange] = useState(new Date())
    const [availableAppointments, setAvailableAppointments] = useState('')

    const getAppointments = async (date) => {
        const response = await fetch(`http://localhost:5000/appointments/${props.currentDoctor._id}/${date}`)
        let appointmentsAvailableResponse = await response.json();
        setAvailableAppointments(appointmentsAvailableResponse)
    }


    return (
        <div>
            <Calendar
                onChange={onChange}
                value={value}
                onClickDay={getAppointments(value.toDateString())}
            />
            {props.currentDoctor.timeSlots ?
                availableAppointments.time.map((slot) => {
                    return (
                        <p>{slot + " - " + parseInt(slot + 1)}</p>
                    )
                })}
        </div>
    );
}

export default BookingCalendar