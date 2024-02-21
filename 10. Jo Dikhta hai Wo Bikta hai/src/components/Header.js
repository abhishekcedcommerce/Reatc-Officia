import { LOGO_URL } from "../utils/constants";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {

        let btnName = "Login"
        const [btnNameReact, setbtnNameReact] = useState("Login")
        useEffect(() => {
            console.log("use Effect Called")
        }, [btnNameReact]);
        const OnlineStatus = useOnlineStatus();  
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg mb-3">
            <div className="logo-container">
                <img className="w-40" src = {LOGO_URL} />
            </div>
            <div className="flex item-center">
                <ul className="flex p-6 m-4">
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>

                    <li className="px-4">Cart</li>
                    <li className="px-4">Status {OnlineStatus ? "Online" :"offline"}</li>
                    <li className="px-4"><button onClick={() => {
                    //    if(btnNameReact == 'Login') {
                    //     setbtnNameReact('Log-Out');
                    //    } else {
                    //     setbtnNameReact('Login');
                    //    }
                    // ternar operatore 
                    btnNameReact == 'Login' ?
                        setbtnNameReact('Log-Out'):
                        setbtnNameReact('Login');
                       
                    }}>{btnNameReact}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;