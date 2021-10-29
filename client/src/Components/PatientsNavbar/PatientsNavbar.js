import "./PatientsNavbar.css"
import logo from "../../images/Dr.appointments-logo.svg"

const PatientsNavbar = () => {
    return (
       <>
           <div className={'navbar'}>
               <img src={logo} alt="Dr. appointments logo"/>
           </div>
       </>
    );
}

export default PatientsNavbar