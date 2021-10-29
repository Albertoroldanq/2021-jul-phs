import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import AppointmentBookingPage from "../AppointmentBookingPage/AppointmentBookingPage";
import AppointmentBooked from "../AppointmentBooked/AppointmentBooked";
import PatientsHomePage from "../PatientsHomePage/PatientsHomePage";
import PatientsNavbar from "../PatientsNavbar/PatientsNavbar";


const Routing = () => {
    return (
        <Router>
            <PatientsNavbar/>
            <Switch>
                <Route exact path="/" component={PatientsHomePage}/>
                <Route exact path="/bookAppointment" component={AppointmentBookingPage}/>
                <Route path="/appointmentBooked" component={AppointmentBooked}/>
            </Switch>
        </Router>
    )
}

export default Routing