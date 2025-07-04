import React, { use } from 'react';
import { AuthContext } from '../AuthProvider';
import { Link } from 'react-router';
import Loading from '../Loading/Loading';

const Profile = () => {
    let { user } = use(AuthContext)
    // console.log(user);
    return (
         <>
      {user ? (
        <div className="h-[400px] text-black flex flex-col justify-center items-center gap-3 shadow-2xl bg-gray-100 w-fit mx-auto p-10 rounded-3xl my-10">
          <img className='w-20 h-20 rounded-full' src={user?` ${user.photoURL}`:<FaUserCircle size={50} fill="#eb41a0" />} alt="" />
          {/* <FaUserCircle size={50} fill="#eb41a0" /> */}
          <p className="text-2xl font-bold">User Name :{user.displayName}</p>
          <p className="text-xl font-semibold">User Email :{user.email}</p>
        </div>
      ) : (
        <h1 className='m-15 p-25 text-4xl text-center w-5/12 mx-auto bg-white rounded-xl'>No user</h1>
      )}
    </>
    );
};

export default Profile;