import User from "./User";
import { Component } from "react";
import UserClass
from "./UserClass";

class About extends Component{
    constructor(props) {
        super(props);

        console.log("Parent Constructore");
    }
    // when the coomponent is mounted already
    componentDidMount() {
        console.log("Parent Component did mount, called after parent +child constructor and parent +child render is called");
        // API call ---
    }
    render() {
        console.log("Parent Render");
        return (
            <div>
                <h1>About Class Component</h1>
                <h3>Here i am Learning about - routes</h3>
                <UserClass name={"Abhishek Pandey (class Based)"} location={"Lucknow Class"}/>
                <UserClass name={"Elon Musk  (class Based)"} location={"USA Class"}/>

            </div>
        )
    }
}

/*
const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <h3>Here i am Learning about - routes</h3>
            <User name={"Abhishek Pandey (function)"} location={"Lucknow function"}/>


            <UserClass name={"Abhishek Pandey (class Based)"} location={"Lucknow Class"}/>
        </div>
    )
}
*/
export default About;