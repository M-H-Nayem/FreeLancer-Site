import React, { use, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../AuthProvider";

import { FaEdit, FaEye } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";
import Swal from "sweetalert2";
import Navbar from "../Navbar/Navbar";

const MyTask = () => {
  let { user } = use(AuthContext);
  let loadedTasks = useLoaderData();
  let filteredTask = loadedTasks.filter((task) => task.Email === user.email);
  let [tasks, setTasks] = useState(filteredTask);
  //   console.log(user);
  //   console.log(loadedTasks);
  // console.log(filteredTask);
  console.log(tasks.length);

  let handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-side-delta-ebon.vercel.app/tasks/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your User has been deleted.",
              icon: "success",
            });
            console.log("after deleted", data);
            let remainingTask = tasks.filter((task) => task._id !== id);
            setTasks(remainingTask);
          });
      }
    });
  };
  return (
    <>
      <div>
        {tasks.length > 0 ? (
          <div className="h-screen">
            <div className="overflow-x-auto  w-10/12 mx-auto m-10  p-5 rounded-2xl bg-gray-400 text-black shadow-[0_0px_80px_rgba(255,215,0,0.7)] ">
              <table className="table">
                <thead>
                  <tr className="text-black text-[22px] font-semibold border-b-1 border-black">
                    <th>No</th>
                    <th>Added By</th>
                    <th>Catagory</th>
                    <th>Dead Line</th>
                    <th>Budget</th>
                    <th>About</th>
                  </tr>
                </thead>
                {tasks.map((task, index) => (
                  <tbody key={index}>
                    <tr className="text-black text-[20px]  border-b-1 border-black">
                      <th>{index + 1}</th>
                      <td>{task.Name}</td>
                      <td>{task.Category}</td>
                      <td>{task.Dead_line}</td>
                      <td>{task.Budget} $ </td>
                      <td className="flex gap-5 items-center">
                        <Link to={`/task_details/${task._id}`}>
                          <button className="mt-2">
                            <FaEye fill="green" size={23} />
                          </button>
                        </Link>
                        <Link to={`/update_task/${task._id}`}>
                          <button className="flex items-center">
                            <FaEdit fill="blue" size={23} />
                          </button>
                        </Link>
                        <button onClick={() => handleDelete(task._id)}>
                          <RiDeleteBin2Line fill="red" size={23} />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        ) : (
          <div className="w-[35%] mx-auto my-10 p-10 border-2 rounded-2xl bg-gray-300 text-black">
            <h1 className="text-3xl text-center">
              You have not Added any task yet
            </h1>
            <Link to={`/addtask`}>
              <p className="text-center text-2xl mt-5 btn flex w-[40%] mx-auto">
                Add task
              </p>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default MyTask;
