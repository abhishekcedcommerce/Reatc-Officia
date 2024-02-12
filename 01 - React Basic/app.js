/*


<div id ="parent">
    <div id = "child">
        <h1>I am H1 Tag</h1>
        <h1>I am H1 Tag</h1>
    </div>
    <div id = "child2">
        <h1>I am H1 Tag</h1>
        <h1>I am H1 Tag</h1>
    </div>
</div>

ReactElemet(object) => HTML (Brwser Understand)



*/


const Parent = React.createElement(
    "div", 
    {id: "parent"},
        [
                React.createElement("div", 
                {id: "child_1"}, [
                    React.createElement("h1", {}, "I am H1 Tag" ), React.createElement("h1", {}, "I am H1 Tag" )
                ] 
                //array of childer
            ) , 
            React.createElement("div", 
                {id: "child_2"}, [
                    React.createElement("h1", {}, "I am H1 Tag" ), React.createElement("h1", {}, "I am H1 Tag" )
                ] 
                //array of childer
            ) 
        ]
    );


    // JSX

const Heading = React.createElement(
    'h1', 
    {id:"ced_heading", className : "ced_heading_class"}, 
    "Hello World - From React"
);
// reactElement is just a JS object
console.log(Parent);  // - return a object with us
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(Heading);
root.render(Parent);