import './App.css';
import React from "react";
import DoctorDropdownMenu from "./Components/DoctorDropdownMenu/DoctorDropdownMenu";
import BookingCalendar from "./Components/BookingCalendar/BookingCalendar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <DoctorDropdownMenu />
          <BookingCalendar />
      </header>
    </div>
  );
}

export default App;
