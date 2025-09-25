import React from "react";
import { Link } from "react-router-dom"; // Use Link for internal routes

const Hero = () => {
  return (
    <section
      className="bg-gray-900 min-h-[93vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="bg-[rgba(0,0,0,0.5)] text-white flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-16 rounded-lg h-[93vh] w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
          Find Your Perfect Task
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-8">
          Connect with top talent for any project, big or small. From web
          development to graphic design, we've got you covered.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to="/browse-task"
            className="bg-gradient-to-r from-blue-800 to-green-700 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Browse Tasks
          </Link>
        
        </div>
      </div>
    </section>
  );
};

export default Hero;