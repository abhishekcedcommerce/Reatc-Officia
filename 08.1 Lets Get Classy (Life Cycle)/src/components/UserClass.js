import React from "react";

class UserClass extends React.Component {
    
    constructor (props) {
        super(props);
        console.log(props);
        // in class component there is no hook so

        this.state = {
            count:0, 
            count_1:1
        }

        console.log("first child Constructor is called");
    }
    // when the coomponent is mounted already
    componentDidMount() {
        console.log("Child Component did mount, called after constructor and render is called");
        // API call 
    }


    render() {
        const {name, location} = this.props;
        const {count, count_1} = this.state;
        console.log("then chils Reander is called");
        return(
            <div className = "user_card">
                <p>Count : {this.state.count}, count-1 : {count_1}</p>
                <button onClick={()=> {
                    // this.state.count = this.state.count +1 ;  //it's wrong so prevent yourself to make this error
                    // never update state variable Diresctly
                    this.setState({
                        count:this.state.count + 1,
                        count_1 : this.state.count_1+10,
                    })
                }
                }>Count Increse</button>
                <h2>Name : {name}</h2>
                <h3>Location - {location}</h3>
                <h4>Contact - 9120197515 / er.abhishekpandey00@gmail.com</h4>
            </div>
        );
    }

}


export default UserClass;