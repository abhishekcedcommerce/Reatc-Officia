import React from "react";

class UserClass extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {
            userInfo:{
                name : "Dummy",
                location :"Dummy Location",
                avatar_url : "http://dummyphoto",
            },
        }

        console.log("first child Constructor is called");
    }
    // when the coomponent is mounted already
    
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/abhishekcedcommerce");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json,
        })
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        const {name , location, avatar_url, url, subscriptions_url, public_repos, updated_at} = this.state.userInfo;
        return(
            <div className = "user_card">
                <h2>Name : {name}</h2>
                <img src={avatar_url} />
                <h3>Location - {location || "not filled"}</h3>
                <h4>URL - {url}, Subscription URL - {subscriptions_url}</h4>
                <p>Public Repos - {public_repos}, Last Updated at - {updated_at}</p>
            </div>
        );
    }

}


export default UserClass;

/**
 * 
 * 
 * ----[Mounting Life Cycle]-------
 * 
 * 
 * Constrcutor is called
 * Render is called (with dummy data)
 * <HTML has dumy Data>
 * 
 * 
 * ComponentDidMount is called 
 *      we made an API call
 *      <this.setState> ----> state variable is updated 
 * 
 * 
 * 
 * -----[Update Cycle ]-----
 *      Render (Api Data)
 *      <HTML (new API Data)
 * 
 * 
 * 
 * ----[Compomemt Did Update] -----
 */