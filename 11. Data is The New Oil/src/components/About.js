import User from "./User";
import { Component } from "react";
// import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";

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
                <div className="m-4 p-4 bg-black text-white">
                    {/* <UserContext.Consumer>
                        {({loggedInUser})=><h1>{loggedInUser}</h1>}
                    </UserContext.Consumer> */}
                </div>
                <h1>About Class Component</h1>
                <h3>Here i am Learning about - routes</h3>
                <UserClass name={"Abhishek Pandey (class Based)"} location={"Lucknow Class"}/>
            </div>
        )
    }
}
export default About;