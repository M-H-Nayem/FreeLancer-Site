import React, { useState } from "react";
import { Link } from "react-router";

const TaskSection = ({ Tasks }) => {

    const sortedTasksDesc = Tasks.sort((a, b) => new Date(a.Dead_line) - new Date(b.Dead_line));
  let [tasks, setTasks] = useState(sortedTasksDesc);
  console.log(tasks);
  return (
    <>
      <h1 className="text-4xl text-center text-orange-600 font-bold  mt-10">Browse All tasks</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 w-11/12 mx-auto gap-5 my-10">
        {tasks.map((task) => (
          <div key={task._id} className="">
            <div className="card bg-[#202124] text-primary-content w-[100%] h-[270px] px-[2%] mx-auto shadow-[0_0px_50px_rgba(255,255,255,0.5)]">
              <div className="card-body">
                <h2 className="card-title text-2xl">{task.Task_Title}</h2>
                <div className="flex justify-between  items-center">
                  <h2 className=" underline">Catagory: {task.Category}</h2>
                  <p className="text-red-400 text-end">
                    Dead Line : {task.Dead_line}
                  </p>
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
    </>
  );
};

export default TaskSection;
