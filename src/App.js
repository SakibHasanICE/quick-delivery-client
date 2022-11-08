import {Helmet} from "react-helmet";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Main from "./components/Layouts/Main"
import "./App.css";
import Home from "./components/Home/Home"
import Services from "./components/Services/Services";

function App() {
  const router=createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            loader: () => fetch ("http://localhost:5000/services"),
            element: <Home></Home>,
        },
        {
            path: "/services",
            element: <Services></Services>,
        },
      ],
    },  
  ]);
  return (
    <div className="App">

      <Helmet>
        <meta charSet="utf-8" />
        <title>Quick Delivery</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
