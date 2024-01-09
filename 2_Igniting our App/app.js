//     <!-- Javascript code 

//     let heading=document.createElement("h1");
//     heading.innerText="Hello React 🌸";
//     let root=document.querySelector(".root");
//     root.appendChild(heading);


// <!-- React code  -->
//way-1
//     let heading=React.createElement("h1",{},"Hello React! 🌸");
//     let root=ReactDOM.createRoot(document.querySelector(".root"));
//     root.render(heading); 

import React from "react";
import ReactDOM from "react-dom"
//way-2 
let heading = React.createElement("h1", {id:"head",class:"head"}, "Hello React! 🌸"); 
//heading -->object
let root = document.querySelector(".root");
ReactDOM.render(heading, root);   // --> ReactDOM.render(element\object, container).


///Made this below structure using React  👇👇👇👇
/*

<div id="parent">
       <div id="child1">
           <h1> </div>
       </div>

        <div id="child2">
           <h1> </div>
       </div>
</div>

*/
// To add more sibbling we should use the 3rd argument as an srray of sigblingd

let parent=React.createElement(
    "div",
    {id:"parent"},[
    React.createElement( // for child -1
        "div",
        {id:"child1"},[
            React.createElement("h1",{},"Welcome to React Srijit Bera 🤖"),
            React.createElement("h1",{},"I am Sibling of h1🥱")
        ]   // array od children
    ),

    React.createElement(  //for child -2
        "div",
        {id:"child2"},[
            React.createElement("h1",{},"I am 2nd child 🤖"),
            React.createElement("h1",{},"I am Sibling of parent div🥱")
        ]   // array od children
    ),
    ]
    );


ReactDOM.render(parent,root)

