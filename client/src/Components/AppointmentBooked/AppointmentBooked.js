import React, {useState, useEffect} from "react";
import {useLocation, Link} from "react-router-dom";
import './AppointmentBooked.css'

const AppointmentBooked = () => {
    const search = useLocation().search;
    const fullName = new URLSearchParams(search).get('name')
    const email = new URLSearchParams(search).get('email')
    const description = new URLSearchParams(search).get('description')
    const day = new URLSearchParams(search).get('day')
    const month = new URLSearchParams(search).get('month')
    const year = new URLSearchParams(search).get('year')
    const doctorLastName = new URLSearchParams(search).get('doctorLastName')
    const time = new URLSearchParams(search).get('time')

    return (
        <div className={"mainContainer"}>
            <div className={"childContainer"}>
                <div className={"appointmentBookedContainer"}>
                    <h1>Appointment booked!</h1>
                    <p className={"appointmentBookedSubtitle"}>You will receive a confirmation email shortly.</p>
                    <div className={"appointmentBookedDetailsContainer"}>
                        <h2>Details</h2>
                        <div className={"appointmentBookedDoctorDetails"}>
                            <h3 className={"appointmentBookedTitleDetail"}>Doctor</h3>
                            <p className={"appointmentBookedInfo"}>Dr. {doctorLastName}</p>
                        </div>
                        <div className={"appointmentBookedDayTimeNameEmailWrapper"}>
                            <div className={"appointmentBookedDateDetails"}>
                                <h3 className={"appointmentBookedTitleDetail"}>Day</h3>
                                <p className={"appointmentBookedInfo"}>{day}/{month}/{year}</p>
                            </div>
                            <div className={"appointmentBookedTimeDetails"}>
                                <h3 className={"appointmentBookedTitleDetail"}>Time</h3>
                                <p className={"appointmentBookedInfo"}>{time}h</p>
                            </div>
                            <div className={"appointmentBookedPatientName"}>
                                <h3 className={"appointmentBookedTitleDetail"}>Full Name</h3>
                                <p className={"appointmentBookedInfo"}>{fullName}</p>
                            </div>
                            <div className={"appointmentBookedPatientEmail"}>
                                <h3 className={"appointmentBookedTitleDetail"}>Email address</h3>
                                <p className={"appointmentBookedInfo"}>{email}</p>
                            </div>
                        </div>
                        <div className={"appointmentBookedPatientSymptoms"}>
                            <h3 className={"appointmentBookedTitleDetail"}>Described symptoms</h3>
                            <p className={"appointmentBookedInfo"}>{description}</p>
                        </div>
                    </div>

                    <Link className="goBackButton" to='/'>Go back to the HomePage</Link>
                </div>
            </div>
        </div>
    );
}

export default AppointmentBooked