import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BookingCalendar = (props) => {
    const formatDate = (value) => {
        let dateForm = value.toDateString()
        let arr = dateForm.split(" ")
        return arr
    }


    const [value, onChange] = useState(new Date())
    return (
        props.currentDoctor.timeSlots ?
            <div>
                <Calendar
                    onChange={onChange}
                    value={value}
                    onClickDay={formatDate(value)}
                />

                {props.currentDoctor.timeSlots.map((slot) => {
                    return (

                        <p>{slot + " - " + parseInt(slot + 1)}</p>
                    )
                })}
            </div> :
            <div>
            </div>
    );
    //
    // return (
    //
    //     <div>
    //         <Calendar
    //             onChange={onChange}
    //             value={value}
    //         />
    //
    //     </div>
    // );
}

export default BookingCalendar