import React, {useState, useEffect} from "react";

const AppointmentBooked = () => {
    const appointmentDetails = async (e) => {
        const response = await fetch('http://localhost:5000/appointmentBooked', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        let appointmentResponse = await response.json();
        console.log(appointmentResponse)
    }

    useEffect(() => {
        appointmentDetails()
    }, [])

    return (
        <div>

        </div>
    );
}

export default AppointmentBooked