import "../../Patients/PatientsHomePage/PatientsHomePage.css"
import doctorImage from '../../../images/stethoscope-phs.jpg'
import {Link} from "react-router-dom"
import React from "react";

const DoctorsHomePage = () => {
    const user = null

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleChange = () => {

    }

    return (
        <div className="mainContainer">
            <div className="childContainer">
                <div className={'bookAppointmentWrapper'}>
                    <div className={'bookAppointmentImage'}>
                        <img src={doctorImage} height={"120%"} alt="stethoscope-phs"/>
                    </div>
                    <div className={'bookAppointmentLinksWrapper'}>
                        {user ? (
                            <Link className={"ctaButton"} to='/auth' value="Doctor Logout">Logout</Link>
                        ) : (
                            <div className={"bookingForm"}>
                                <label htmlFor="username">Username</label>
                                <input id="username" type="text" name="username" required onChange={handleChange}/>
                                <label htmlFor="password">Password</label>
                                <input id="password" type="password" name="username" required onChange={handleChange}/>
                                <Link className={"ctaButton"} to='/auth' value="Doctor Login" onClick={handleSubmit}>Login</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoctorsHomePage