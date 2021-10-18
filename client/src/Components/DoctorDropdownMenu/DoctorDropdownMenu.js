import React, {useEffect, useState} from "react";

const DoctorDropdownMenu = () => {
//     return (
//         <div>
//             <select name={"doctors"} id={"doctors"}>
//                 <option value="doctor1" data-doctorId={"doctorId"}>Doctor1</option>
//                 <option value="doctor2" data-doctorId={"doctorId"}></option>
//                 <option value="doctor3" data-doctorId={"doctorId"}></option>
//                 <option value="doctor4" data-doctorId={"doctorId"}></option>
//                 <option value="doctor5" data-doctorId={"doctorId"}></option>
//             </select>
//         </div>
//     )
// }
        const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [items, setItems] = useState([]);

        // Note: the empty deps array [] means
        // this useEffect will run once
        // similar to componentDidMount()
        useEffect(() => {
            fetch("http://localhost:5000/doctors")
                .then(res => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true);
                        setItems(result);
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                )
        }, [])

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            );
        }
    }

export default DoctorDropdownMenu