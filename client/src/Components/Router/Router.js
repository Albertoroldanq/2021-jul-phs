import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import AppointmentBookingPage from "../Patients/AppointmentBookingPage/AppointmentBookingPage"
import AppointmentBooked from "../Patients/AppointmentBooked/AppointmentBooked"
import PatientsHomePage from "../Patients/PatientsHomePage/PatientsHomePage"
import PatientsNavbar from "../Patients/PatientsNavbar/PatientsNavbar"

import DoctorsHomePage from "../Doctors/DoctorsHomePage/DoctorsHomePage"


const Routing = () => {
    return (
        <Router>
            <PatientsNavbar/>
            <Switch>
                <Route exact path="/" component={PatientsHomePage}/>
                <Route exact path="/bookAppointment" component={AppointmentBookingPage}/>
                <Route exact path="/appointmentBooked" component={AppointmentBooked}/>
                <Route exact path="/doctorsLogin" component={DoctorsHomePage}/>
            </Switch>
        </Router>
    )
}

export default Routing