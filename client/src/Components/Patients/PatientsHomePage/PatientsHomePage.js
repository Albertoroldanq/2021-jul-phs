import "./PatientsHomePage.css"
import doctorImage from '../../../images/doctor-phs.jpg';
import {Link} from "react-router-dom";

const PatientsHomePage = () => {
    return (
        <div className="mainContainer">
            <div className="childContainer">
                <div className={'bookAppointmentWrapper'}>
                    <div className={'bookAppointmentImage'}>
                        <img src={doctorImage} alt="doctor-phs"/>
                    </div>
                    <div className={'bookAppointmentLinksWrapper'}>
                        <Link className={"ctaButton"} to='/bookAppointment' value="Book an appointment">Book an appointment</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PatientsHomePage