import React, { useState, use } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { FaUserAlt } from "react-icons/fa";
import img from "../../assets/fl.png";
import { FiMenu, FiX } from "react-icons/fi"; // FiX icon for closing the menu

const Navbar = () => {
  let { user, logOut } = use(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logOut().then(() => {}).catch(() => {});
  };

  const navLinks = (
    <>
      <li className="p-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-blue-500 transition-colors duration-300 ${isActive ? "text-green-500 font-bold  border-b-1" : "text-gray-300"}`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </NavLink>
      </li>
      <li className="p-2">
        <NavLink
          to="/browse-task"
          className={({ isActive }) =>
            `hover:text-blue-500 transition-colors duration-300 ${isActive ? "text-green-500 font-bold border-b-1" : "text-gray-300"}`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Browse Task
        </NavLink>
      </li>
      {user && (
        <>
          <li className="p-2">
            <NavLink
              to="/add-task"
              className={({ isActive }) =>
                `hover:text-blue-500 transition-colors duration-300 ${isActive ? "text-green-500 font-bold border-b-1" : "text-gray-300"}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Add Task
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              to="/my-task"
              className={({ isActive }) =>
                `hover:text-blue-500 transition-colors duration-300 ${isActive ? "text-green-500 font-bold border-b-1" : "text-gray-300"}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              My Posted Task
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const authButtons = user ? (
    <>
      <div className="flex items-center gap-3">
        <div title={user?.email} className="hidden lg:block text-sm text-gray-300">
          {user.displayName}
        </div>
        <Link to="/profile">
          <img
            className="rounded-full w-10 h-10 border-2 border-blue-500 hover:border-blue-300 transition-colors duration-300"
            src={user.photoURL}
            title={user?.displayName}
            alt="User Profile"
          />
        </Link>
        <button
          onClick={handleLogout}
          className="btn bg-red-600 text-white border-none hover:bg-red-700 transition-colors hidden lg:block"
        >
          LogOut
        </button>
      </div>
    </>
  ) : (
    <>
      <Link className="btn bg-gradient-to-r from-blue-800 to-green-700 text-white  border-none hover:bg-green-700 transition-colors" to="/login">
        LogIn
      </Link>
      <Link className="btn bg-gradient-to-r from-blue-800 to-green-700 text-white  border-none hover:bg-green-700 transition-colors " to="/signup">
        Sign Up
      </Link>
    </>
  );

  return (
    <nav className="bg-gray-800 text-white shadow-lg sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left Section: Logo & Site Name */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <img className="w-10" src={img} alt="Freelancer Site Logo" />
            <span className="text-xl md:text-2xl font-bold ml-2 hidden md:block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              FreeLancer Site
            </span>
          </Link>
        </div>

        {/* Center Section: Main Nav Links (for large screens) */}
        <div className="hidden lg:flex">
          <ul className="flex items-center justify-center gap-4 text-lg">
            {navLinks}
          </ul>
        </div>

        {/* Right Section: Auth Buttons & Mobile Menu Icon */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex gap-3">
            {authButtons}
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn btn-ghost p-2 lg:hidden"
          >
            {isMenuOpen ? (
              <FiX className="text-2xl text-white" />
            ) : (
              <FiMenu className="text-2xl text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div className={`lg:hidden bg-gray-900 transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <ul className="flex flex-col items-center space-y-4 text-lg">
          {navLinks}
          <div className="border-t border-gray-700 w-full mt-3 pt-4 flex flex-col items-center space-y-3 px-3">
            {user ? (
              <>
                <div className="flex items-center flex-col space-y-2">
                  <Link to="/profile">
                    <img
                      className="rounded-full w-10 h-10 border-2 border-blue-500"
                      src={user.photoURL}
                      title={user?.displayName}
                      alt="User Profile"
                    />
                  </Link>
                  <span className="text-base text-gray-400">{user.displayName}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="btn bg-red-600 text-white border-none hover:bg-red-700 w-full"
                >
                  LogOut
                </button>
              </>
            ) : (
              <>
                <Link
                  className="btn bg-gradient-to-r from-blue-800 to-green-700 text-white border-none hover:bg-blue-700 w-full"
                  to="/login"
                >
                  LogIn
                </Link>
                <Link
                  className="btn bg-gradient-to-r from-blue-800 to-green-700 text-white border-none hover:bg-blue-700 w-full"
                  to="/signup"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;