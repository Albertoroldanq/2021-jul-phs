import React, {useState, useEffect} from "react";
import BookingCalendar from "../BookingCalendar/BookingCalendar";
import DoctorDropdownMenu from "../DoctorDropdownMenu/DoctorDropdownMenu";


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
        <div>
                <DoctorDropdownMenu allDoctors={allDoctors} setCurrentDoctor={setCurrentDoctor}
                                    currentDoctor={currentDoctor}/>
                <BookingCalendar currentDoctor={currentDoctor}/>
        </div>
    );
}

export default AppointmentBookingPage