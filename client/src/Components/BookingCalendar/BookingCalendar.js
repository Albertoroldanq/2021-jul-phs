import React, { useState } from 'react';
import Calendar from 'react-calendar';

const BookingCalendar = () => {
    const [value, onChange] = useState(new Date());
    console.log(value)

    return (
        <div>
            <Calendar
                onChange={onChange}
                value={value}
            />
        </div>
    );
}

export default BookingCalendar