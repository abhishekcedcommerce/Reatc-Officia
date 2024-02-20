import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
// import About from './components/About';
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
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
            }
        ],
        errorElement : <Error />  //for error handing in routes if routes not found
    },
   
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);


