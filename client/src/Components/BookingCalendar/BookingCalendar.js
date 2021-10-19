import React, {useState} from 'react';
import Calendar from 'react-calendar';

const BookingCalendar = (props) => {
    const [value, onChange] = useState(new Date());

    if(props.currentDoctor){
        return (

            <div>
                <Calendar
                    onChange={onChange}
                    value={value}
                />
                {props.currentDoctor.timeSlots.map(timeSlot => {
                    return <p>{timeSlot}</p>
                    console.log(timeSlot)
                })}
            </div>
        );
    } else {
        return (

            <div>
                <Calendar
                    onChange={onChange}
                    value={value}
                />

            </div>

        );
    }
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