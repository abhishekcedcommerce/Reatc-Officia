import React from "react";
import ReactDOM from "react-dom/client";


// React.createElement => creates an object => HtmlElement(render);
const Heading = React.createElement('h1', {id:'ced_heading_id', className:"ced_heading_class"}, 'Abhishek Pandey is trying to learn react');
console.log(Heading);


// JSX -  and jsx is not the part of react, jsx is not html in JS it's html like JS or HTML like/ XML like syntex  
// JSX => React.createElement  = > ReactElement-JS object => HTMLElements(render)


// React Element
const jsxHeading = <h1 id="ced_heading_id" tabIndex="1" className="ced_heading_class">Hello this text from JSX in react</h1>;

const jsxHeadingMutiLine = (
    <h1 id="ced_heading_id" tabIndex="1" className="ced_heading_class">
        Hello this text from JSX in react
    </h1>
);

console.log(jsxHeading);




/* Component

 1. class Based Component - OLD way
 2. Funciotnal Component - New way

 * React Functional Componet is just a normal JS function which return JSX
 * a js functipn tahta return react element.
 const fn_1 = () => true;
 const fn_1 = () => {
    reutrn true;
 }

*/


const Title = () => (
    <h1 className="title">
        Title - Abhishek Pandey
    </h1>
);

const HeadingCompoent_1 = () => {
    return <h1 className="ced_heading">Namaste From Functional Component</h1>;
}

const HeadingCompoent_2 = () => ( <h1 className="ced_heading">Namaste From Functional Component</h1>);

// component composition 
const number = 1000;
const HeadingCompoent_3 = () => ( 
    <div id="ced_id">
        {/* calling title compnent */}

        <Title />

        {
            /* you can execute here any JS code */
            number+2
        }

        {console.log('Abhishek Pandey')}


        {/* Calling a component */
            HeadingCompoent_2()
        }
        
        <h1 className="ced_heading">Namaste From Functional Component</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));


// element rendring way
root.render(jsxHeadingMutiLine);

// component rendring way
// root.render(<HeadingCompoent_3></HeadingCompoent_3>);
root.render(<HeadingCompoent_3 />);

