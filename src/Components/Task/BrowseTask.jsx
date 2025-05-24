import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";

const BrowseTask = () => {
    let initialTasks = useLoaderData();
    const sortedTasksDesc = initialTasks.sort((a, b) => new Date(a.Dead_line) - new Date(b.Dead_line));
  let [tasks, setTasks] = useState(sortedTasksDesc);
  console.log(tasks);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-11/12 mx-auto gap-5 my-10">
      {tasks.map((task) => (
        <div key={task._id} className="">
          <div className="card bg-[#202124] text-primary-content w-[90%] h-[500px] px-[2%] mx-auto shadow-[0_0px_80px_rgba(255,215,0,0.6)]">
            <div className="card-body">

              <img className="w-[100%] mx-auto h-[230px] rounded-xl" src="/undraw_accept-task_vzpn.png" alt="" />
              <h2 className="card-title text-2xl h-[65px]">{task.Task_Title}</h2>
               <div className="flex justify-between  items-center">
            <h2 className=" underline">Catagory: {task.Category}</h2>
            <p className="text-red-400 text-end">Dead Line :  {task.Dead_line}</p>
                  </div>
              <p>{task.Description}</p>
              <div className="card-actions justify-end">
                <Link to={`/task/${task._id}`}>
                  <button className="btn">See Details</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

  
  );
};

export default BrowseTask;
