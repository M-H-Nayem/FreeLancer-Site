// AppSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Link } from "react-router";
import { FaDownload, FaStar } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Slider = ({ tasks }) => {

  let task1 = tasks[0];
  let task2 = tasks[2];
  let task3 = tasks[4];
  const words = [
    "Welcome to Freelancing Site!",
  ];

  return (
    <>
      <div className="App text-4xl text-center mt-10 text-orange-500 font-bold">
        <Typewriter
          words={words}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
      <div className=" max-w-11/12  mx-auto my-10  rounded-2xl">
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
                <div className="card bg-[#121212] text-primary-content w-[70%] mx-auto h-[350px] text-xl shadow-[0_0px_50px_rgba(255,255,255,0.5)]">
                  <div className="card-body">
                    <h2 className="card-title text-3xl text-center">
                      {task1.Task_Title}
                    </h2>
                    <div className="flex justify-between  items-center">
                      <h2 className=" underline text-xl">
                        Catagory: {task1.Category}
                      </h2>
                      <p className="text-red-400 text-end text-2xl">
                        Dead Line {task1.Dead_line}
                      </p>
                    </div>
                    <p className="text-2xl text-start">
                      Assigned By - {task1.Name}
                    </p>
                    <p className="text-green-500 text-xl text-start">
                      {task1.Description}
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="text-start text-2xl">
                        Budget-{task1.Budget} $
                      </p>
                      <button className="btn text-xl">Bid Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-green-500 text-white text-xl p-8 rounded-xl text-center">
              <div className="w-11/12 mx-auto flex flex-col justify-center items-center">
                <div className="card bg-[#121212] text-primary-content w-[60%] mx-auto h-[350px] shadow-[0_0px_50px_rgba(255,255,255,0.5)]">
                  <div className="card-body">
                    <h2 className="card-title text-3xl text-center">
                      {task2.Task_Title}
                    </h2>
                    <div className="flex justify-between  items-center">
                      <h2 className=" underline  text-xl">
                        Catagory: {task2.Category}
                      </h2>
                      <p className="text-red-400 text-end text-2xl">
                        Dead Line {task2.Dead_line}
                      </p>
                    </div>
                    <p className="text-2xl text-start">
                      Assigned By - {task2.Name}
                    </p>
                    <p className="text-green-500 text-xl text-start">
                      {task2.Description}
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="text-start text-2xl">
                        Budget-{task2.Budget} $
                      </p>
                      <button className="btn text-xl">Bid Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-purple-600 text-white text-xl p-8 rounded-xl text-center">
              <div className="w-11/12 mx-auto flex flex-col justify-center items-center">
                <div className="card bg-[#121212] text-primary-content w-[60%] mx-auto h-[350px] shadow-[0_0px_50px_rgba(255,255,255,0.5)]">
                  <div className="card-body">
                    <h2 className="card-title text-3xl text-center">
                      {task3.Task_Title}
                    </h2>
                    <div className="flex justify-between  items-center">
                      <h2 className=" underline  text-xl">
                        Catagory: {task3.Category}
                      </h2>
                      <p className="text-red-400 text-end text-2xl">
                        Dead Line {task3.Dead_line}
                      </p>
                    </div>
                    <p className="text-2xl text-start mt-5">
                      Assigned By - {task3.Name}
                    </p>
                    <p className="text-green-500 text-xl text-start">
                      {task3.Description}
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="text-start text-2xl">
                        Budget-{task3.Budget} $
                      </p>
                      <button className="btn text-xl">Bid Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default Slider;
