import React from "react";
import ReactDOM from "react-dom";
import Header  from "./Components/Header";
import Body from "./Components/Body";
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
       <Body/>
    </div>
    )
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);