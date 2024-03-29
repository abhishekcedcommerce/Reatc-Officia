import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from './components/About';
import Contact from "./components/Contact";
import Error from "./components/Error";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            {/** if path = /  -- <Body />*/}
            
            {/** if path = /about --- <About /> */}
            
            {/** if path = /contact --- <Contact />*/}

            <Outlet />
            
        </div>
    )
}
/*
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />, 
        errorElement : <Error />  //for error handing in routes if routes not found
    },
    {
        path : "/about",
        element : <About />
    },
    {
        path : "/contact",
        element : <Contact />
    },
]);*/


// children routes 
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />, 
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path : "/about",
                element : <About />
            },
            {
                path : "/contact",
                element : <Contact />
            },
        ],
        errorElement : <Error />  //for error handing in routes if routes not found
    },
   
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);


