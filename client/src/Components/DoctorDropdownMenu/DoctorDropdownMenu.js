import React from "react";

const DoctorDropdownMenu = (props) => {

    const handleChange = (index) => {
        props.setCurrentDoctor(props.allDoctors[index])
    }

    return (
        <div>
            <select onChange={e => handleChange(e.target.value)} name={"doctors"} id={"doctors"}>
                {props.allDoctors.map((doctor, index) => {
                    return (
                        <option value={index}>Dr. {doctor.firstName + ' ' + doctor.lastName}</option>
                    )
                })}
            </select>
        </div>
    );
}

export default DoctorDropdownMenu