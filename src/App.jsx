import { Outlet } from "react-router";
import "./App.css";
import Loading from "./Components/Loading/Loading";
import Navbar from "./Components/Navbar/Navbar";

import Footer from "./Components/Footer/Footer";
import { use } from "react";
import { AuthContext } from "./Components/AuthProvider";

function App() {
  let { user } = use(AuthContext);
  // console.log(user);
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-[90vh]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
