import React, {useState, useEffect} from "react";
import BookingCalendar from "../BookingCalendar/BookingCalendar";
import DoctorDropdownMenu from "../DoctorDropdownMenu/DoctorDropdownMenu";
import "./AppointmentBookingPage.css"


const AppointmentBookingPage = () => {
    const [currentDoctor, setCurrentDoctor] = useState([]);

    const [allDoctors, setAllDoctors] = useState([]);
    const doctors = async (e) => {
        const response = await fetch('http://localhost:5000/doctors')
        let doctorsResponse = await response.json();
        setAllDoctors(doctorsResponse)
        setCurrentDoctor(doctorsResponse[0])
    }

    useEffect(() => {
        doctors()
    }, [])

    return (
        <div className="mainContainer">
            <div className="childContainer">
                <h1>Book an appointment</h1>
                <h4>1. Choose a doctor</h4>
                    <DoctorDropdownMenu allDoctors={allDoctors} setCurrentDoctor={setCurrentDoctor}
                                        currentDoctor={currentDoctor}/>
                <div></div>
                <h4>2. Choose day and time</h4>
                    <BookingCalendar currentDoctor={currentDoctor}/>
            </div>
        </div>
    );
}

export default AppointmentBookingPage