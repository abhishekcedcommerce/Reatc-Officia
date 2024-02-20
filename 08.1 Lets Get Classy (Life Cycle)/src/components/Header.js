import { LOGO_URL } from "../utils/constants";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
const Header = () => {

        let btnName = "Login"
        const [btnNameReact, setbtnNameReact] = useState("Login")
        console.log("header Render");
        /*// if no dependency array => useEffect will call on every render 
        useEffect(() => {
            console.log("use Effect Called")
        });*/

        /*// if empty dependency array => useEffect will call once on every render 
        useEffect(() => {
            console.log("use Effect Called")
        }, []);*/

        // if  dependency array is [btnNameReact]=> useEffect will called every time when btnNameReact is updated 
        useEffect(() => {
            console.log("use Effect Called")
        }, [btnNameReact]);
        
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src = {LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <li>Checkout</li>
                    <button className="login" onClick={() => {
                    //    if(btnNameReact == 'Login') {
                    //     setbtnNameReact('Log-Out');
                    //    } else {
                    //     setbtnNameReact('Login');
                    //    }
                    // ternar operatore 
                    btnNameReact == 'Login' ?
                        setbtnNameReact('Log-Out'):
                        setbtnNameReact('Login');
                       
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;