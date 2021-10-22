import React, {useState, useEffect} from "react";
import {useLocation, Link} from "react-router-dom";
import './AppointmentBooked.css'

const AppointmentBooked = () => {
    const search = useLocation().search;
    const fullName = new URLSearchParams(search).get('name')
    const name = fullName.split(' ')
    const firstName = name[0]
    const description = new URLSearchParams(search).get('description')
    const day = new URLSearchParams(search).get('day')
    const month = new URLSearchParams(search).get('month')
    const year = new URLSearchParams(search).get('year')
    const doctorLastName = new URLSearchParams(search).get('doctorLastName')
    const time = new URLSearchParams(search).get('time')

    return (
        <div>
            <h2>Appointment booked!</h2>
            <p>You will receive a confirmation email shortly.</p>

            <h4>Details</h4>
            <h5>Doctor</h5>
            <p>Dr. {doctorLastName}</p>
            <h5>Day</h5>
            <p>{day}/{month}/{year}</p>
            <h5>Time</h5>
            <p>{time}h</p>
            <h5>Full Name</h5>
            <p>{name}</p>
            <h5>Described symptoms</h5>
            <p>{description}</p>

            <button className="goBackButton"><Link to='/'>Go back</Link></button>
        </div>
    );
}

export default AppointmentBooked