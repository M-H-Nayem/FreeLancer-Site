import React from 'react';
import { useLoaderData } from 'react-router';

const MyTaskData = () => {
    let task = useLoaderData()
    return (
         <div key={task._id} className="py-15">
      <div className="card bg-[#121212] text-primary-content w-[30%] mx-auto  rounded-2xl h-fit  shadow-[0_0px_50px_rgba(255,255,255,0.5)]">
          <div className="card-body">
               <img className="rounded-xl" src="/undraw_freelancer_vibs.png" alt="" />
          <h2 className="card-title text-2xl">{task.Task_Title}</h2>
          <div className="flex justify-between  items-center">
            <h2 className=" underline">Catagory: {task.Category}</h2>
            <p className="text-red-400 text-end text-[18px]">Dead Line {task.Dead_line}</p>
                  </div>
                  <p className="text-[18px]">Assigned By - {task.Name }</p>
                  <p className="text-green-500">{task.Description}</p>
          <div className="flex justify-between items-center">
                  <p>Budget-${ task.Budget}</p>
            <button className="btn">Bid Now</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default MyTaskData;