import React from "react";
import ReactDOM from "react-dom/client";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import "./index.css";
import App from './App.jsx'
import Layout from "./components/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Github, { githubInfoLoader } from "./components/Github/Github";

// 1st way
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },  {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

// Second way
const router  = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="user/:userId" element={<User/>}/>
      <Route 
      loader={githubInfoLoader}
      path="github" 
      element={<Github/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
