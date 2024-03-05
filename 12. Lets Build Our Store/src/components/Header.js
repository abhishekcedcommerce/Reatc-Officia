import { LOGO_URL } from "../utils/constants";
import {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


import { useSelector } from "react-redux";


const Header = () => {

        let btnName = "Login"
        const [btnNameReact, setbtnNameReact] = useState("Login");

        const {loggedInUser} = useContext(UserContext);
        useEffect(() => {
            // console.log("use Effect Called")
        }, [btnNameReact]);



    // selectore for redux  -- subscribing to the store using selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);



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

                    <li className="px-4 font-bold text-xl"><Link to="/cart">Cart ({cartItems.length})</Link></li>
                    {/* <li className="px-4"><Link to="/cart">Cart</Link></li> */}

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
                    <li className="font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;