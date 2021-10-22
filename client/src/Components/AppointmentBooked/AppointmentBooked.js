import React, {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";

const AppointmentBooked = () => {
    const search = useLocation().search;
    const name = new URLSearchParams(search).get('name')
    const description = new URLSearchParams(search).get('description')
    const date = new URLSearchParams(search).get('date')
    const doctorLastName = new URLSearchParams(search).get('doctorLastName')
    const time = new URLSearchParams(search).get('time')

    return (
        <div>
            <div>
                <h2>Successfully Booked!</h2>
            </div>
            <div>
                <p>Hi {name} your appoint has been booked with Dr. {doctorLastName} at {time} on the {date}</p>
            </div>

            <p></p>
        </div>
    );
}

export default AppointmentBooked