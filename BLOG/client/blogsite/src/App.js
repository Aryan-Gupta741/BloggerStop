
import { Outlet, Routes, Route, NavLink as Link } from "react-router-dom";
import React, { useState } from 'react';

import Register from "./pages/register";
import Login from "./pages/login";
import Write from "./pages/write";
import Home from "./pages/home";
import Single_page from "./pages/single_page";
import Categories from "./pages/categories";
import About from "./pages/about"

import Dashboard from "./pages/adminDashboard"

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Animation from "./components/CursorAnimation";

import "./CSS/App.css"
import "./CSS/login.css"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};


const router = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/post/:id",
        element: <Single_page />
      },
      {
        path: "/write",
        element: <Write />
      }
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/adminDashboard",
    element: <Dashboard/>,
  },
];

function App() {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen((prev) => !prev);
  };

  return (
    <div className="App">
           <nav className="Field">
        <div>
          <ul className="placement">
            <li className="list">
              <Link to="/" activeClassName="active">
                <h3 className="color_change">Home</h3>
              </Link>
            </li>
            <li className="list">
              <Link to="write" activeClassName="active">
                <h3 className="color_change">Write</h3>
              </Link>
            </li>
            <li className="list">
              <Link to="login" activeClassName="active">
                <h3 className="color_change">Login</h3>
              </Link>
            </li>
            <li className="list">
              <Link to="register" activeClassName="active">
                <h3 className="color_change">Sign-up</h3>
              </Link>
            </li>
            <li className="list">
              <Link to="categories" activeClassName="active">
                <h3 className="color_change">Categories</h3>
              </Link>
            </li>
            <li className="list">
              <Link to="about" activeClassName="active">
                <h3 className="color_change">About</h3>
              </Link>
            </li>

            <li className="list">
              <Link to="adminDashboard" activeClassName="active">
                <h3 className="color_change">Admin</h3>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="write" element={<Write />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="categories" element={<Categories />} />
          <Route path="about" element={<About />} />
          <Route path="adminDashboard" element={<Dashboard/>} />
        </Routes>
      </div>
      <Animation />
    </div>
  );
}


export default App;