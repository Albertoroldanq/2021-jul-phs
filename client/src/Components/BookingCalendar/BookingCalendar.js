import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BookingCalendar = (props) => {
    const formatDate = (value) => {
        // const arr = value.split(' ')
let arr = value.split(" ")
        console.log(arr)
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
                        <p>{slot}</p>
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