import "./DoctorsNavbar.css"
import logo from "../../../images/Dr.appointments-logo.svg"

const DoctorsNavbar = () => {
    return (
       <>
           <div className={'navbar'}>
               <img src={logo} alt="Dr. appointments logo"/>
           </div>
       </>
    );
}

export default DoctorsNavbar