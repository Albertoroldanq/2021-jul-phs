import React, {useEffect, useState} from "react";

const DoctorDropdownMenu = () => {
    const [allDoctors, setAllDoctors] = useState([]);
    const doctors = async (e) => {
        const response = await fetch('http://localhost:5000/doctors')
        let doctorsResponse = await response.json();
        setAllDoctors(doctorsResponse)
    }

    useEffect(() => {
        doctors()
    }, [])

    return (
        <div>
            <select name={"doctors"} id={"doctors"}>
                {allDoctors.map((doctor) => {
                    return (
                        <option value="" data-doctorId={doctor._id}>Dr. {doctor.firstName + ' ' + doctor.lastName}</option>
                    )
                })}
            </select>
        </div>
    );
}

export default DoctorDropdownMenu