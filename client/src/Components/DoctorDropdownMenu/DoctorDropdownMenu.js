import React, {useEffect, useState} from "react";

const DoctorDropdownMenu = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/doctors').then((data) => {
            return data.json()
        }).then((data) => {
            setItems(data);
            console.log(items[0])

        }, (error) => {
            setIsLoaded(true);
            setError(error);
        })
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {

        return (

            <div>
                <select name={"doctors"} id={"doctors"}>
                    <option value="doctor1" data-doctorId={"doctorId"}>{items[0].firstName}</option>
                    <option value="doctor2" data-doctorId={"doctorId"}></option>
                    <option value="doctor3" data-doctorId={"doctorId"}></option>
                    <option value="doctor4" data-doctorId={"doctorId"}></option>
                    <option value="doctor5" data-doctorId={"doctorId"}></option>
                </select>
            </div>


        );
    }
}

    export default DoctorDropdownMenu