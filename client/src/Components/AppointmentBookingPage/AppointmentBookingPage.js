import React, {useState, useEffect} from "react";
import BookingCalendar from "../BookingCalendar/BookingCalendar";
import DoctorDropdownMenu from "../DoctorDropdownMenu/DoctorDropdownMenu";


const AppointmentBookingPage = () => {
    const [allDoctors, setAllDoctors] = useState([]);
    const doctors = async (e) => {
        const response = await fetch('http://localhost:5000/doctors')
        let doctorsResponse = await response.json();
        setAllDoctors(doctorsResponse)
    }
    const [currentDoctor, setCurrentDoctor] = useState([]);

    const [allAppointments, setAllAppointments] = useState([]);
    const appointments = async (e) => {
        const response = await fetch('http://localhost:5000/appointments')
        let appointmentsResponse = await response.json();
        setAllAppointments(appointmentsResponse)
    }
    useEffect(() => {
        doctors()
        appointments()
    }, [])

    return (
        <div>
            <DoctorDropdownMenu allDoctors={allDoctors} setCurrentDoctor={setCurrentDoctor} currentDoctor={currentDoctor}/>
            <BookingCalendar allAppointments={allAppointments} currentDoctor={currentDoctor} />
        </div>
    );
}

export default AppointmentBookingPage