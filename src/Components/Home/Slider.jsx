// AppSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Link } from "react-router";
import { FaDownload, FaStar } from "react-icons/fa";

const Slider = ({ tasks }) => {
  console.log(tasks);

  let task1 = tasks[0];
  let task2 = tasks[2];
  let task3 = tasks[4];
  console.log(task1);

  return (
    <div className="w-full max-w-4xl mx-auto my-10 ">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="bg-blue-500 text-white text-xl p-8 rounded-xl text-center">
            <div className="w-11/12 mx-auto flex flex-col justify-center items-center">
              <div className="card bg-[#121212] text-primary-content w-[60%] mx-auto h-[300px] shadow-[0_0px_50px_rgba(255,255,255,0.5)]">
                <div className="card-body">
                  <h2 className="card-title text-2xl text-center">{task1.Task_Title}</h2>
                  <div className="flex justify-between  items-center">
                    <h2 className=" underline">Catagory: {task1.Category}</h2>
                    <p className="text-red-400 text-end text-[18px]">
                      Dead Line {task1.Dead_line}
                    </p>
                  </div>
                  <p className="text-[18px] text-start">
                    Assigned By - {task1.Name}
                  </p>
                  <p className="text-green-500  text-start">
                    {task1.Description}
                  </p>
                  <div className="flex justify-between items-center">
                    <p>Budget-{task1.Budget} $</p>
                    <button className="btn">Bid Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-green-500 text-white text-xl p-8 rounded-xl text-center">
            <div className="w-11/12 mx-auto flex flex-col justify-center items-center">
              <div className="card bg-[#121212] text-primary-content w-[60%] mx-auto h-[300px] shadow-[0_0px_50px_rgba(255,255,255,0.5)]">
                <div className="card-body">
                  <h2 className="card-title text-2xl text-center">{task2.Task_Title}</h2>
                  <div className="flex justify-between  items-center">
                    <h2 className=" underline">Catagory: {task2.Category}</h2>
                    <p className="text-red-400 text-end text-[18px]">
                      Dead Line {task2.Dead_line}
                    </p>
                  </div>
                  <p className="text-[18px] text-start">
                    Assigned By - {task2.Name}
                  </p>
                  <p className="text-green-500  text-start">
                    {task2.Description}
                  </p>
                  <div className="flex justify-between items-center">
                    <p>Budget-{task2.Budget} $</p>
                    <button className="btn">Bid Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-purple-600 text-white text-xl p-8 rounded-xl text-center">
            <div className="w-11/12 mx-auto flex flex-col justify-center items-center">
              <div className="card bg-[#121212] text-primary-content w-[60%] mx-auto h-[300px] shadow-[0_0px_50px_rgba(255,255,255,0.5)]">
                <div className="card-body">
                  <h2 className="card-title text-2xl text-center">{task3.Task_Title}</h2>
                  <div className="flex justify-between  items-center">
                    <h2 className=" underline">Catagory: {task3.Category}</h2>
                    <p className="text-red-400 text-end text-[18px]">
                      Dead Line {task3.Dead_line}
                    </p>
                  </div>
                  <p className="text-[18px] text-start">
                    Assigned By - {task3.Name}
                  </p>
                  <p className="text-green-500  text-start">
                    {task3.Description}
                  </p>
                  <div className="flex justify-between items-center">
                    <p>Budget-{task3.Budget} $</p>
                    <button className="btn">Bid Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Slider;
