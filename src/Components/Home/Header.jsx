import React from "react";

const Header = () => {
  return (
    <div className="flex items-center gap-20 w-11/12 mx-auto bg-gray-400 text-black  rounded-2xl">
      <div className="flex flex-col gap-5 p-10">
        <h1 className=" text-5xl font-bold ">Best Freelancer Site</h1>
        <p className="text-2xl">
          "Crafting high-quality, custom solutions for your business — on time,
          on budget, and beyond expectations."
        </p>
        <button className="btn text-xl bg-yellow-200 w-fit text-black  border-none">
          Get Started
        </button>
      </div>
      <div className="p-10"> 
        <img
          className=" h-[400px] rounded-2xl"
          src="/undraw_freelancer_vibs.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
