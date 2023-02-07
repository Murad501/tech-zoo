import React from "react";
import { Link } from "react-router-dom";
import logoDark from "../assets/logo_d.png";
// import logoLight from "../assets/logo_l.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar justify-between gap-5">
        <div className="flex justify-start w-full">
          <Link className="w-32 mr-10" to="/">
            <img className="w-32" src={logoDark} alt="logo" />
          </Link>
          <div className="form-control w-full max-w-xl hidden sm:block">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="flex-1 justify-end gap-10 w-full">
          <div className="hidden sm:block">
          <div className="flex justify-center items-center gap-10">
            <Link to='/'>Home</Link>
            <Link to='/'>History</Link>
          </div>
          </div>
          <div className="avatar w-10">
            <img
              className="rounded-full"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
