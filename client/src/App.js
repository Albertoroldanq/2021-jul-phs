// import './App.css';
import React from "react";
import Routing from "./Components/Router/Router";
import AppointmentBookingPage from "./Components/Patients/AppointmentBookingPage/AppointmentBookingPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Routing />
      </header>
    </div>
  );
}

export default App;