import React, { use } from "react";
import { AuthContext } from "../AuthProvider";
import { useLoaderData, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const UpdateTask = () => {
  let navigate = useNavigate();
  let { user } = use(AuthContext);
  let task = useLoaderData();
  // console.log(task);

  let handleUpdateTask = (e) => {
    e.preventDefault();
    // console.log("updated");
    let form = e.target;
    let formData = new FormData(form);
    let formInfoObject = Object.fromEntries(formData.entries());
    // console.log(formInfoObject);

    fetch(`https://server-side-delta-ebon.vercel.app/tasks/${task._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formInfoObject),
    })
      .then((res) => res.json())
      .then((data) => {
        // toast("updated successfylly");
        Swal.fire({
                      // position: "top-end",
                      icon: "success",
                      title: "Task updated successfylly",
                      showConfirmButton: false,
                      timer: 1500,
                    });
        navigate("/mytask");
      });
    e.target.reset();
  };

  return (
    <div className="card bg-[#1E1E1E] w-full max-w-[35%] text-white shrink-0  mx-auto rounded-2xl my-10 p-5 shadow-[0_0px_80px_rgba(255,215,0,0.7)]">
      <h1 className="text-center text-3xl font-bold">Update Your Task</h1>
      <div className="card-body  rounded-2xl">
        <form onSubmit={handleUpdateTask} className="fieldset">
          <label className=" text-xl w-full">Name</label>
          <input
            name="Name"
            type="text"
            defaultValue={user?.displayName}
            className="input bg-[#1c2128] px-3 w-full"
            placeholder="Name"
            required
          />
          <label className=" text-xl w-full">Email</label>
          <input
            name="Email"
            type="email"
            defaultValue={user?.email}
            className="input bg-[#1c2128] px-3 w-full"
            placeholder="Provide Task title"
            required
          />
          <label className=" text-xl w-full">Task Title</label>
          <input
            name="Task_Title"
            type="text"
            defaultValue={task.Task_Title}
            className="input bg-[#1c2128] px-3 w-full"
            placeholder="Provide Task title"
            required
          />
          <label className=" text-xl w-full">Category</label>

          <div className="flex items-center gap-2">
            {" "}
            <input
              type="radio"
              className="radio"
              id="html"
              name="Category"
              value="wev-develop"
            />
            <p>Wev Development</p>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              className=" radio"
              id="html"
              name="Category"
              value="design"
            />
            <p>Design</p>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              className=" radio"
              id="html"
              name="Category"
              value="marketing"
            />
            <p>Marketing</p>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              className=" radio"
              id="html"
              name="Category"
              value="writing"
            />
            <p>Writing</p>
          </div>

          <label className="label text-xl">Description</label>
          <input
            name="Description"
            type="text"
            defaultValue={task.Description}
            className="input bg-[#1c2128] px-3 w-full"
            placeholder="Provide a description"
            required
          />
          <label className="label text-xl">Dead Line</label>
          <input
            name="Dead_line"
            type="date"
            defaultValue={task.Dead_line}
            className="input bg-[#1c2128] px-3 w-full"
            placeholder="Provide deadline"
            required
          />
          <label className="label text-xl">Budget</label>
          <input
            name="Budget"
            type="number"
            defaultValue={task.Budget}
            className="input bg-[#1c2128] px-3 w-full"
            placeholder="Provide your budget"
            required
          />

          <button
            type="submit"
            className="btn text-xl text-white  bg-orange-500 mt-5 border-none "
          >
            Update
          </button>
        
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
