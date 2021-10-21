import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import AppointmentBookingPage from "../AppointmentBookingPage/AppointmentBookingPage";
import AppointmentBooked from "../AppointmentBooked/AppointmentBooked";
import BookingCalendar from "../BookingCalendar/BookingCalendar";


const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={AppointmentBookingPage} />
                <Route path="/appointmentBooked" component={AppointmentBooked} />
            </Switch>
        </Router>
    )
}

export default Routing