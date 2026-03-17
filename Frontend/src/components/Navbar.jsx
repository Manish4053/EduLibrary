import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

import logo from "../assets/logo.png";

function Navbar() {
  const [authUser, setAuthUser] = useAuth();

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggle = (e) => {
    setTheme(e.target.checked ? "synthwave" : "light");
  };

  const navItems = (
    <>
      {[
        { name: "Home", path: "/" },
        { name: "Course", path: "/course" },
        { name: "Contact", path: "/contact" },
        { name: "About", path: "/about" },
      ].map((item) => (
        <li key={item.name}>
          <Link
            to={item.path}
            className="relative px-3 py-2 text-sm font-medium text-gray-700 
          hover:text-pink-500 transition duration-300 group"
          >
            {item.name}

            {/* Animated Underline */}
            <span
              className="absolute left-0 -bottom-1 h-[2px] w-0 
            bg-gradient-to-r from-pink-500 to-purple-500
            transition-all duration-300 ease-in-out
            group-hover:w-full"
            ></span>
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <div className="max-w-screen-2xl container mx-auto sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-pink-100">
      <div className="navbar justify-between px-4 shadow-sm">
        {/* LEFT */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>

          {/* {logo} */}
          <div className="flex items-center gap-3 cursor-pointer">
            <img
              src={logo}
              alt="EduLibrary"
              className="w-10 h-10 object-contain rounded-full shadow-md"
            />
            <h1 className="text-xl font-bold text-pink-500">EduLibrary</h1>
          </div>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-8 font-medium">{navItems}</ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end flex items-center gap-6">
          {/* Search */}
          <div className="hidden md:block">
            <label className="px-4 py-2 border border-gray-300 bg-white rounded-full flex items-center gap-2 shadow-sm">
              <input
                type="text"
                className="grow outline-none bg-transparent"
                placeholder="Search courses..."
              />
            </label>
          </div>

          {/* Theme Toggle */}
          <div className="hidden md:block">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                className="theme-controller"
                checked={theme === "synthwave"}
                onChange={handleToggle}
              />

              {/* Sun Icon */}
              <svg
                className="swap-off h-7 w-7 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19Z" />
              </svg>

              {/* Moon Icon */}
              <svg
                className="swap-on h-7 w-7 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36-8.14-8.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z" />
              </svg>
            </label>
          </div>

          {/* Username */}
          {authUser && (
            <span className="font-semibold whitespace-nowrap hidden md:block">
              Hi, {authUser.fullname || authUser.email.split("@")[0]} 👋
            </span>
          )}

          {/* Login / Logout */}
          {authUser ? (
            <Logout />
          ) : (
            <>
              <button
                className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition duration-300 shadow-md"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </button>
              <Login />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
