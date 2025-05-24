import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "./AuthProvider";
import Loading from "./Loading/Loading";

const PrivateRoute = ({ children }) => {
  let { user, loading } = use(AuthContext);

    let location = useLocation();
    // console.log(location);
  if (loading) {
    return (
      <Loading></Loading>
    );
  }
  if (user && user?.email) {
    return children;
    }
    // state={location.pathname}
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
