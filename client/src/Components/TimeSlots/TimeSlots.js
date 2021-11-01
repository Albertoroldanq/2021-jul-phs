import './TimeSlots.css'

const TimeSlots = (props) => {

    const timeSlots = {
        9: "available",
        10: "available",
        11: "available",
        12: "available",
        13: "available",
        14: "available",
        15: "available",
        16: "available"
    }

    const selectedTimeSlots = {
        9: "unselected",
        10: "unselected",
        11: "unselected",
        12: "unselected",
        13: "unselected",
        14: "unselected",
        15: "unselected",
        16: "unselected"
    }

    selectedTimeSlots[props.appointmentTime] = "selected"

    const handleClick = (num) => {
        props.setAppointmentTime(num)
    }

    if (props.bookedAppointments !== []) {
        props.bookedAppointments.forEach(appointment => {
            timeSlots[appointment] = "booked"
            if (appointment === props.appointmentTime) {
                props.setAppointmentTime(null)
            }
        })
    }

    return (
        <div className="buttonContainer">
            <button className={timeSlots[9] + ' ' + selectedTimeSlots[9]} onClick={() => {
                handleClick(9)
            }}>9 - 10 AM
            </button>
            <button className={timeSlots[10] + ' ' + selectedTimeSlots[10]} onClick={() => {
                handleClick(10)
            }}>10 - 11 AM
            </button>
            <button className={timeSlots[11] + ' ' + selectedTimeSlots[11]} onClick={() => {
                handleClick(11)
            }}>11 - 12 PM
            </button>
            <button className={timeSlots[12] + ' ' + selectedTimeSlots[12]} onClick={() => {
                handleClick(12)
            }}>12 - 13 PM
            </button>
            <button className={timeSlots[13] + ' ' + selectedTimeSlots[13]} onClick={() => {
                handleClick(13)
            }}>1 - 2 PM
            </button>
            <button className={timeSlots[14] + ' ' + selectedTimeSlots[14]} onClick={() => {
                handleClick(14)
            }}>2 - 3 PM
            </button>
            <button className={timeSlots[15] + ' ' + selectedTimeSlots[15]} onClick={() => {
                handleClick(15)
            }}>3 - 4 PM
            </button>
            <button className={timeSlots[16] + ' ' + selectedTimeSlots[16]} onClick={() => {
                handleClick(16)
            }}>4 - 5 PM
            </button>
        </div>
    )
}

export default TimeSlots