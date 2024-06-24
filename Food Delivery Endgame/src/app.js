import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Body } from "./components/Body";
import UserContextProvider from "./context/userContextProvider";
import Footer from "./components/Footer.js";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
import About from "./components/About.js";
import { Auth0Provider } from '@auth0/auth0-react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { Provider } from "react-redux";
import rdxStore from "./redux/rdxStore.js";
import Cart from "./components/Cart.js";


const AppLayout=()=>{
    return(
       
        <Auth0Provider
        domain="dev-kw1jgnrfpswitzip.us.auth0.com"
        clientId="F71ONJJk6YI37U58ucX4Bs5tCkuXTtVk"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}>
         <Provider store={rdxStore}>
        <UserContextProvider>
        <div className="app">
        <Header/>
        <Outlet/>
        <Footer/>
        </div>
        </UserContextProvider>
        </Provider>
        <ToastContainer/>
        </Auth0Provider>
        
    )
}
const appRouter=createBrowserRouter([
    {
    path:'/',
    element:<AppLayout/>,
    children:[
        {
            path:'/',
            element:<Body/>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/contact',
            element:<Contact/>
        },
        {
            path:'/restaurant/:resId',
            element:<RestaurantMenu/>
        },
        {
            path:'/cart',
            element:<Cart/>
        },
    ],
    errorElement:<Error/>
    },
    

])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render( <RouterProvider router={appRouter}/>);