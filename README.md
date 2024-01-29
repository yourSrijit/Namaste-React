# Namaste-React-24
<h1>Contents of the Repo 🦾✅</h1>
<hr>
<h1>Episode-01 | Inception</h1>

Introduction to foundational tools and frameworks in web development.
Topics Covered:
Visual code setup,
Hello world in HTML/JS,
CDN, React Hello World

# Episode-02 | Igniting our App
Dive into essential package managers and module bundlers for React projects.
Topics Covered:
npm, Parcel
Node modules
React app file structure

# Episode-03 | Laying the foundation
Understanding JSX, React components, and their compositions.
Topics Covered:
JSX, React components
Class-based vs Functional components

# Episode-04 | Talk is Cheap, Show Me the Code
Implementing React's core features, managing state, and working with UI data.
Topics Covered:
React app building
props/state
function mapping

# Episode-05 | Let's Get Hooked
Exploring React Hooks and understanding their importance.
Topics Covered:
File structure
Import/export
React Hooks (useState)

# Episode-06 | Exploring the World
Architecture insights, useEffect hook, and working with APIs.
Topics Covered:
Architecture, useEffect
Conditional Rendering
API usage

# Episode-6.1 | Swiggy API Issue Resolved
This video solves all the issues related to the Swiggy API, which we are using in our project.
Episode-6.2 | CORS Plugin Issue solved
In this video, all the issues, that the students were facing because of CORS, have been resolved.

# Episode-07 | Finding the Path
Mastering React Router for smooth navigation and routing.
Topics Covered:
React Router
Dynamic Routing
Outlet Component

# Episode-08 | Let's Get Classy
Learning Class-based components and their lifecycles.
Topics Covered:
Class-based components
Lifecycle methods

# Episode -09 | Optimizing our App
Advanced optimization techniques including Custom Hooks.
Topics Covered:
Custom Hooks
Optimization
Suspense Component

# Episode-10 | Jo Dikhta Hai, Vo Bikta Hai
Introduction to Tailwind CSS for responsive UI designs.
Topics Covered:
Tailwind CSS introduction for Ul design

# Episode-11 | Data is the New Oil
Handling data flow and DevTools exploration.
Topics Covered:
Higher-Order Components
Controlled vs Uncontrolled Components
DevTools

# Episode-12 | Let's Build Our Store
Implementing Redux toolkit for state management.
Topics Covered:
Redux Toolkit
React-Redux
Actions, Reducers

# Episode-13 | Time for Test
Comprehensive testing with Jest and React Testing Library.
Topics Covered:
Jest, React Testing Library
Unit Testing principles

# Episode-14 | NetflixGPT - The Beginning
A new adventure begins as we embark on creating a Netflix clone with GPT-3 integration.


<hr>
#With Coding Snippet

The mission of this series is to take you from Zero to Hero in React. During this journey, you will learn everything by watching videos and then implement it by building projects.

# Inception 01:

- React is a library
- Inject React & use it
- This is the bueuty of library
- React can only work in navbar,sidebar
- React can work on what ever you make the root inside work react

- React work in small portion of app

- Write first react hello world program
- Using react CDN we have create 'hello world' program

- Introduction to fundamental tools and frameworks in web development

- Visual code setup,
- Hello world in HTML/JS,
  CDN, React Hello World

      <!DOCTYPE html>

      <html lang="en">

      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Inception 01</title>

      </head>

      <body>
        <div id="root">
          <!-- Hello World -->
        </div>

      <!-- Using JavaScript -->
      <!-- <script>
        let root = document.getElementById('root');

        let heading = document.createElement('h1');

        heading.innerHTML = 'Hello World From JavaScript';

        root.appendChild(heading);
      </script> -->


      <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
      <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
      <script>
        let heading = React.createElement('h1', {}, 'Hello World From React JS');


        let root = document.getElementById('root');

        const element = ReactDOM.createRoot(root);

        element.render(heading);

      </script>

    </body>

    </html>

- This is the Shortest Program of React JS (use CDN inside index.html)
- It takes minimum effort to just put it inside our code

- React will overwrite everything inside root.

- This object is used for passing props (to give parameters).

      ('h1',{name:'lucky','Hello World From React JS'});

      <h1 name="lucky">Hello World From React JS</h1>

- props are children + attributes that we pass inside element.

- Most Costly operation is when DOM needs to be changed or updating (DOM tree gets changed)

- DOM Tree is getting changed (removing node or adding node) , it is very expensive & react solves it very effectively

- Using JavaScript we changed DOM (Manipulating DOM using js/react)

- ReactElement (Object)=> HTML (Browser Understands)

- create nested structure like this :

      const parent = React.createElement(
        "div",
        { className: "parent" },
        React.createElement(
          "div",
          { className: "child" },
          React.createElement(
            "h1",
            { name: "lucky", className: "heading" },
            "Hello World From React JS"
          )
        )
      );

- Use className not class in React

- React is working inside div id root

      <h1>Hello Top of Root</h1>
      <div id="root">
        Hello World
      </div>


      <h2>Hello Below Root</h2>

# Igniting our App 02:

- Dive into essential package managers and module bundlers for React projects.

- npm,parcel

- Node modules

- React app file structure

- We can create our own create-react-app.

  - create-react-app uses webpack & babel

- we configure npm

      npm init

  - It will create package.json file
  - It maintains version of app

- Use parcel in our app

      npm i -D parcel

- It will create a production ready code for application

- Understanding about package.json & package-lock.json deeply

- It will create lot of things that parcel need

- create package-lock.json node_modules files

- for running application in our local server we need to install react & react-dom for this & remove CDN links from index.html file

- install react & react-dom

      npm i react react-dom

  - as the normal dependency we install this not dev dependency

- There are two dependency are there:

  - Normal Dependency:
    - This is used for production also
  - Dev Dependency:
    - This is needed for our development phase
    - All the packages that my project need i.e a dependency
    - They are the packages that are required for development & testing purposes only

- To run the Application in our system

      npx parcel index.html

- It will create a development server & it is done by the parcel

- parcel keep track of everything:

  - Hot Module Replacement
  - Bundling
  - Caching
  - Minification
  - Cleaning Our Code
  - Super fast build algorithm
  - Image Optimization
  - Consistent Hashing
  - Code Splitting
  - Diagnostic Error Handling (beutiful error messages)
  - Compatible with older version of browser
  - Does compression
  - Differential Bundling
  - parcel does lot of things for us

- Parcel manages port number
- Parcel also take care of compatible with older version

  - browser list

         "browserslist": [
           "last 2 Chrome version",
           "last 2 Firefox version"
         ]

  - It means it will definately work on last 2 chrome & firefox version & that is the beuty of browserslist

- parcel is a beast , it takes care of lot of things

- for building production build

      npx parcel build index.html

  - for this we remove entry point i.e App.js file in main we give
  - It conflicts with index.html file that we give at time of building index.html file as an entry point so remove it fro package.json file

- It will generate production build & it is ready to shipped on server

### Learn Lot of things from this lecure

# Laying the foundation 03:

- Understanding JSX, React componnets, and their compositions

- JSX, React components
- Class-based vs functional components
- create npm scripts to start our project

- Inside package.json

      "scripts": {
        "dev": "parcel index.html",
        "build": "parcel build index.html",
        "test": "jest"
      }

- To run our project

      npm run dev

- JSX is not HTMl, It is HTML or XML like syntax

- writing JSX code

      const jsxHeading = <h1 className="heading">Namaste React via JSX</h1>;

      const root = ReactDOM.createRoot(document.getElementById("root"));

      // root.render(heading);
      root.render(jsxHeading);

- JSX (transpiled before it reaches the JS Engine) - PARCEL - Babel

- JSX => React.createElement => ReactElement - JS Object => HTMLElement (render)

- Babel transpile the code JSX to React

- For using attribtes in Elements

- we use camelCase Syntax className, tabIndex,htmlFor...

      const jsxHeading = (
        <h1 className="heading" tabIndex="2">
          Namaste React via JSX
        </h1>
      );

- enclosed each tag

      <br/> <img/><hr/><input/> <></> ()

- Mandotory to use () for multiple lines of code

- React Components

  - Functional components - new way of writing code
  - Class Based components - old way of writing code

- A Normal JS function which return some jsx code

- Create functional Component

      const JsxHeading = () => {
        return (
          <h1 className="heading" tabIndex="2">
            Namaste React via Functional Components
          </h1>
        );
      };

- Always use pascal namimg convention (HeadingOne) capital component name

- use it like this

      <JsxHeading/>  // call it

- Calling another component from a component is known as component composition

- Use element inside component

      const title = <h1>Namaste REact Element</h1>;

      {title}

- we can write any peice of JS code using {}

      const Fn = () => "true";



      const JsxHeading = () => {
        return (
          <div>
            <h1 className="heading" tabIndex="2">
              Namaste React via Functional Components <Fn />
            </h1>
            <h4>Use Element :-{title}</h4>

          </div>
        );
      };

- You can write any JS Expression using {}

      let num = 20;

      {num} {console.log('Hello')} {100+200}

- Create infinite loop by composing components into another

      const num = 45;

      const JsxHeading = () => {
        return (
          <div>
            <h1 className="heading" tabIndex="2">
              Namaste React via Functional Components
            </h1>
            <Fn />
            <h4>Use Element :-{title}</h4>

          </div>
        );
      };
      const title = (
        <h1>
          Namaste REact Element
          {num}
          {/* <JsxHeading /> */}
        </h1>
      );

- JSX Sanitizes the data

- JSX will takes care of the injection attacks

- JSX will escape it

- It prevents cross-side-scripting attack for you

      const data = api.getData();

- JSX blindly not return this it sanitizes the data then return it so that we can you any api (prevents cross-side-scripting) from attackers

- It automatically taken care by React

- we can also call component like this:

        // three ways are same to use component


        {Title()}  // call this way is same as

        <Title/>    // same way

        <Title>  </Title>    // same way

# Talk is Cheap, Show Me the Code 04:

- Implementing React's core features, managing state, and working with UI data.

- React app building

- props/state

- function mapping

- Header

  - logo
  - NavItems

- Body

  - Search Bar Input
  - RestaurantContainer
  - RestaurantCard

    - img
    - star rating
    - name of res, star rating, cuisines, delivery time

- Use map method to dynamically add data

  - info.name

  - info.locality

  - info.costForTwo

  - info.cuisines

  - info.avgRating

  - info.areaName

  - info.cloudinaryImageId

        //Image URL

        https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/

- Footer

  - Copyright
  - Links
  - Address
  - Contact

- props : props is a short form of properties

  - props is something which you can pass to the component
  - normal JS function arguments to a function
  - passing a prop to component
  - passing an argument to a function

- we can use Real Data (Swiggy Data)

- Config Driver UI:

  - Different location, diff restaurant
  - real time
  - website is driven by data
  - Data layer + UI Layer
  - All the UI is driven by a config
  - Our Application needs to dynamic these days
  - It can work in diff places
  - UI is powered by data
  - Both Data & UI layer together build a frontend application

- Loop over array of list through map method

       {restaurantData?.map((item, index) => (
          <RestaurantCard resData={item} key={index} />
        ))}

- Always give key when loop through in an array of list
- React optimizes its lifecycle
- we need to identify each item (Keys should be unique)
- It optimizes the performance of an application

Project ShowCase : Food App

![ezgif com-video-to-gif-converter](https://github.com/Lucky-Kashyap/Namaste-React/assets/88204554/d979a0d8-96a1-4c0f-9d59-f1adae94ff40)

# Let's Get Hooked 05:

- Exploring React Hooks and understanding their importance

- File Structure

- Import/export

- React Hooks (useState)

- Two types of Export/Import

  - Default Export/Import

  - export default Component

        import Component from 'path'

        Named Export/Import

        export const Component

        import {Component} from 'path'

- Handle click

- Event handler

- State Variable

- A Hook is just a normal JS function which is given by react

- It comes with superpowers

- Everytime you want your variables to be in sync with the UI you need to use your state variable

- whenever a state variable updates react re-renders the component

       const [listOfRestaurants, setListOfRestaurants] = useState([]);

      listOfRestaurants = listOfRestaurants.filter((res)=> res.data.avgRating>4)

- useState() hook return two things one is variable & another is setter function

        const arr = useState([]);

        const list = arr[0];

        const setList = arr[1];

- Every component in REact maintains a state so, you can put some variables on to that state and everytime you have to create a local variable you use state inside React

#### Virtual DOM

- It is concept we keep representation of a DOM with us which is known as virtual DOM

- Reconciliation Algorightm that React uses to diff one tree from another

- React are efficiently finds out the diff between virtual DOM & update the UI

- React is doing very efficiently DOM Manipulation

- In React 16, new ALgo (React Fiber) new way of finding diff & updating the UI

- React fiber is a Reconciliation Engine

- React Fiber is a concept of React JS that is used to render a system faster & smoother

- Reconciliation is a algorithm that React uses to diff one tree with another to determine which parts needs to be changed

- Reconciliation is the process where we have diff algo, which finds out the diff between the trees

- It will re-render only the portion which is required which is found by the diff algo

- The diff algorithm refers to the process of comparing two trees of nodes,such as the virtual DOM trees in React, to determine the differences b/w them

- The diff algo determines the minimum no. of operations required to transform one tree into another

Project ShowCase :



# Exploring the World 06:

- Architecture insights, useEffect hook, and working with APIs

- Architecture, useEffect
- Conditional Rendering

- API usage

#### Monolythic & MicroServices Architecture

- MicroServices:

  - Easier to Change
  - Easy To Maintain

- Seperation of Concern / Single Responsibility Principle

- small-small functionality combine together forms a big large scale Apllication
- Each Service has its own Job
- How those application are connected

  - swiggy.com
  - :3000 -> /
  - :4000 -> /dapi
  - :5000 -> /notification

- Monolythic:
  - we used to have huge big project
  - Single Project
  - Many things written in one single project
  - Like DB connectivity, SMS Code, API Code,JSP,UI
  - one project / one repo / 100 people works on

#### How do you call an API

- Using fetch
- Two ways:

  - Loads -> API -> Render
  - Loads -> Render -> API -> Render

- As soon as our page loads it will call
- fetch data dynamically from API & populate our page
- When our APP Loads
- React has one of the best Render mechanism
- React renders your UI very fast

- useEffect Hook

  - It allows you to perform side effects in your components
  - Some side-effects are fetching data, directly updating the DOM & timers

- Syntax:

      useEffect(()=>{
        fetchData();
      },[]);

- By pass Cors Error Using Cors Extension Plugin
- When getting data from one domain to another it occurs

#### Conditional Rendering

      // Conditional Rendering

      // if (listOfRestaurants.length === 0) {
      //   return <Shimmer />;
      // }

- Why we need state in react?

  - we need state variable in react because when ever state variable changes/updated then UI will be Re-render & this is not the case with normal JS variables

        const [btnName,setBtnName] = useState('Login');

        <button onClick={()=>setBtnName('Logout')}>{btnName}</button>

- Toggle Login/Logout functionality

        const handleClick = () => {
          if (btnName === "Login") {
            setBtnName("Logout");
          } else {
            setBtnName("Login");
          }
        };

- Create Search Functionality

  - Track input value for this we have to bind value
  - And for every change on input value we have to set that value using onChange()

        onChange={(e)=>setSearchText(e.target.value)}

- Filter Data according to search Text

  - for this we have create another filteredRestaurant state variable and write logic for it
  - onClick function we have to call filterData function

        filterData(searchText,listOfRestaurant);

          useEffect(() => {
            filterData(searchText, listOfRestaurants);
            console.log(filteredRestaurant);
          }, [searchText]);

          const filterData = (searchText, listOfRestaurants) => {
            const filterData = listOfRestaurants?.filter((restaurant) =>
              restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            );

            // return filterData;

            setFilteredRestaurant(filterData);

            return filterData;
          };

- on Button Click we have to call this function

        onClick={() => {
              const data = filterData(searchText, listOfRestaurants);
              setFilteredRestaurant(data);
            }}

- When Ever state variables update, react triggers a reconciliation cycle (re-renders the component)

- React is finding the difference b/w older virtual DOM & newer Virtual DOM. React has faster render cycle

- DOM Manipulation operation is very expensive & react is very efficient in Doing this..
