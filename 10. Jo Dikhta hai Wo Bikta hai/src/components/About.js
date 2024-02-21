import User from "./User";
import { Component } from "react";
import UserClass
from "./UserClass";

class About extends Component{
    constructor(props) {
        super(props);
    }
    // when the coomponent is mounted already
    componentDidMount() {
    }
    render() {
        console.log("Parent Render");
        return (
            <div>
                <h1>About Class Component</h1>
                <h3>Here i am Learning about - routes</h3>
                <UserClass name={"Abhishek Pandey (class Based)"} location={"Lucknow Class"}/>
            </div>
        )
    }
}
export default About;