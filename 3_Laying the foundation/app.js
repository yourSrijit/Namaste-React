const variable=100;
import React from "react";
import ReactDOM from "react-dom"

// React.createElement =>  ReactElement -JS Object =>HTMLElement(render)

const heading=React.createElement(
    "h1",
    {id:"heading"},
    "Srijit Bera"
)

// JSX (HTML-like or XML-like syntax) 🛑🛑🛑🛑
// JSX => React.createElement =>  ReactElemen t -JS Object =>HTMLElement(render) 
//Babel transpile it to React.createElement
const jsxheading=<h1 id="heading1">Srijit Bera using JSX</h1>; // this is react element💀
//Convert the upper to a React component 
const Heading=()=> <h1 id="heading"> {jsxheading} Hello React 🌸</h1>       // this is react component💀


// React components ....🛑🛑🛑🛑🛑
//1. ClassBased Components
//2.Functional Components  ->(A normal js function  that return jsk)
const HeadingComponents=()=>{
    //{Heading()}
    //<Heading/)
    //<Heading> <Heading/> This three thing is same ✅✅✅✅
    return <h1 className="head">  <Heading/> React is JS library🔥🌸</h1>   // This is called Component Composition as <Heading/> inside
}

// we can also write this as 

const HeadingComponents2=()=><h1 id="heading2">React is JS library🔥🌸</h1>;

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);              //This is wahy to render a react element
root.render(< HeadingComponents/>);  //This is the way to render a react component
