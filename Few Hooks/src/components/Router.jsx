import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import About from './About';


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/about",
    element: <About />
  }
]);

export default Router;
