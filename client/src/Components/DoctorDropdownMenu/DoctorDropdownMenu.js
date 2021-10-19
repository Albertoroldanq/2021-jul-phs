import React, {useEffect, useState} from "react";

const DoctorDropdownMenu = (props) => {
    // // const [allDoctors, setAllDoctors] =
    //     useState([props.allDoctors]);
    // const [currentDoctor, setCurrentDoctor] = useState([props.allDoctors]);



    const handleChange = (index) => {
        props.setCurrentDoctor(props.allDoctors[index])
    }

    return (
        <div>
            <select onChange={e => handleChange(e.target.value)} name={"doctors"} id={"doctors"}>
                {/*<option>Choose your doctor</option>*/}
                {props.allDoctors.map((doctor, index) => {
                    return (
                        <option value={index} data-doctorId={doctor._id}>Dr. {doctor.firstName + ' ' + doctor.lastName}</option>
                    )
                })}
            </select>
        </div>
    );
}

export default DoctorDropdownMenu