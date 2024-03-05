import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
// import About from './components/About';
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

// redux things
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";

/**
 * 
 *  Chunking
 *  Code Spliting 
 *  Dayanamic Bundling
 *  Logicail seperation of bundles 
 *  make my trip == bundles (Flights, Hotels, home stay, Holiday pAckage, Honeymoon package)
 *  Lazy Loading 
 *  on Demand Loading
 *  Dayanamic Importingimport React, { lazy, Suspense } from "react";

 * 
 */

const Grocery = lazy(() => import('./components/Grocery'));
const About = lazy(() => import('./components/About'));

const AppLayout = () => {

    const [userName, setUserName] = useState('');
    // some authentication code written here  

    useEffect( () => {
        // make an API call ad send user name and password 
        const data = {
            name : 'Abhishek Pandey'
        };

        setUserName(data.name);
    });

    // i will use contexxt provider

    return (
        <Provider store = {appStore} >
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}
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
                element : <Suspense fallback={<h1>Loading....</h1>}><About /></Suspense>,
            },
            {
                path : "/contact",
                element : <Contact />
            },
            {
                path:'/restaurants/:resId',
                element : <RestaurantMenu />,
            },
            {
                path:'/grocery',
                element : <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>,
            },
            {
                path:'/cart',
                element : <Cart />,
            }
        ],
        errorElement : <Error />  //for error handing in routes if routes not found
    },
   
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);


