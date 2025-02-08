import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart";

const Applayout = () => {
  return (
    <Provider store={appStore}>
    <div className="app">
      <Header />
      <Outlet/>
    </div>
    </Provider>
  );
};


// This is the configuration for <RouterProvider />

const appRouter =
  createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      children:[
        {
          path:"/",
          element:<Body/>,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/restaurants/:resId",
          element: <RestaurantMenu />,
        },
        {
          path:"/cart",
          element:<Cart/>
        }
      ],
      errorElement:<Error/>
    },
    
  ]
)


const root = ReactDOM.createRoot(document.getElementById("root"));
// This is createBrowser_Router. this for rendering,(router is the configuration what we need to render at specific path)
root.render(<RouterProvider router={appRouter} />);





// This is Browser_Router
// <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<Applayout />} />
//     <Route path="/about" element={<About />} />
//     <Route path="/contact" element={<Contact />} />
//   </Routes>
// </BrowserRouter>
