import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header  from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";

const Grocery =lazy(()=>import("./Components/Grocery"))
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";
/*
Header
   -logo
   -Nav Bar
Body
   -Search
   -Restaurante Container
   -Restaurant Card
Footer
   -Copyright
   - Linkes
   -Address
   -Contact      
*/






const AppLayout= ()=>{
    return (
    <div className="app">
       <Header/>
        <Outlet/>
    </div>
    
    )
};

const appRouter=createBrowserRouter([
   {
      path:"/",
      element:<AppLayout/>,
      children:[
         {
            path:"/",
            element:<Body/>,
         },
         {
            path:"/about",
            element:<About/>,
         },
         {
            path:"/contact",
            element:<Contact/>,
         },
         {
            path:"/grocery",
            element:(<Suspense><Grocery/></Suspense>),
         },
         {
            path:"/res/:resId",
            element:<RestaurantMenu/>,
         }
      ],
      errorElement:<Error/>,
   }
]);


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(< RouterProvider router ={appRouter}/>);