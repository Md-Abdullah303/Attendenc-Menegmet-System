import React from "react";
import { NavLink } from "react-router";

const Navber = () => {
  return (
    <nav className="bg-base-200 sticky top-0 z-50 shadow-sm">
      <div className="navbar w-[90%] container mx-auto">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive && `border border-purple-400 text-purple-500`}`
                  }
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive && `border border-purple-400 text-purple-500`}`
                  }
                  to={"/students"}
                >
                  Students
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive && `border border-purple-400 text-purple-500`}`
                  }
                  to={"/timeline"}
                >
                  Timeline
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${isActive && `border border-purple-400 text-purple-500`}`
                  }
                  to={"/dashboard"}
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to={"/"} className="text-3xl font-bold primary-t-color">
            AT .MS
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-2.5 menu-horizontal px-1">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive && `border border-purple-400 text-purple-500`}`
                }
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive && `border border-purple-400 text-purple-500`}`
                }
                to={"/students"}
              >
                Students
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive && `border border-purple-400 text-purple-500`}`
                }
                to={"/timeline"}
              >
                Timeline
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive && `border border-purple-400 text-purple-500`}`
                }
                to={"/dashboard"}
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn bg-purple-400 text-white border-none">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
