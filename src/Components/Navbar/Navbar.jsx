import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../AuthProvider";
import Theme from "../Theme";

const Navbar = () => {
  let { user,logOut } = use(AuthContext);
  console.log(user);
  let list = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-link bg-blue-300" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addtask"
          className={({ isActive }) =>
            isActive ? "active-link bg-blue-300" : ""
          }
        >
          Add Task
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/browsetask"
          className={({ isActive }) =>
            isActive ? "active-link bg-blue-300" : ""
          }
        >
          Browse task
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/mytask"
          className={({ isActive }) =>
            isActive ? "active-link bg-blue-300" : ""
          }
        >
          My Posted Task
        </NavLink>
      </li>
    </>
  );
  let handleLogout = () => {
    console.log("out");
    logOut()
      .then(res => console.log(res.user))
    .catch(err=>console.log(err))
}

  // console.log(user.email);
  // console.log(user.displayName);

  return (
    <div className="navbar bg-base-100 shadow-lg px-[5%]">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {list}
          </ul>
        </div>
        <Theme></Theme>
        <a className=" text-3xl">FL Site</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-3">{list}</ul>
      </div>
      <div className="navbar-end flex item-center gap-3">
        <div title={user?.email}>

    
        {user ? user.displayName : ""} 
        </div>
        <Link to={`/profile`}>
          <img className="rounded-full w-10 h-10" src={user? user.photoURL :"vite.svg"} title={user?.email} alt="" />
        </Link>
        {user ? (
          <button onClick={handleLogout} className="btn">LogOut</button>
        ) : (
          <Link className="btn" to={`/login`}>
            LogIn
          </Link>
        )}
        <Link className="btn" to={`/signup`}>
          SignUP
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
