import { useState } from "react";

const User = (props) => {
    const [count, setCount] = useState(0);
    const [count_1, setCount_1] = useState(1);

    // for an API call 
    // quickly render my compnent  => api call => then mofiy the data 
    useEffect(() => {

    }, []);
    return(
        <div className = "user_card">
            <p>Count : {count}, count-1 : {count_1}</p>
            <h2>Name : {props.name}</h2>
            <h3>Location - {props.location}</h3>
            <h4>Contact - 9120197515 / er.abhishekpandey00@gmail.com</h4>
        </div>
    )
}

export default User;