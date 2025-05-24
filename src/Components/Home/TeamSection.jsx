import React from "react";

const TeamSection = () => {
  return (
    <div className="bg-[#ffcda3] my-20">
      <div className="w-11/12 mx-auto flex gap-10 items-center justify-between rounded-2xl">
        <div className="p-20">
          <img
            className=" rounded-2xl"
            src="/undraw_good-team_zww8.png"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5 p-8 pl-0 text-black">
          <h1 className=" text-4xl font-bold ">Work in a Team</h1>
          <p className="text-xl">
            This isn’t just a website — it’s the result of passionate teamwork,
            crafted with care by minds who believe in building better together.
          </p>
          <button className="btn bg-yellow-200 w-fit text-black text-xl border-none">
            Jion a Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
