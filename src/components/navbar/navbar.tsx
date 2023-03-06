import React from "react";
import "./navbar.css";
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { userDetailsActions } from "../../pages/Auth/slice";

export const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutTheUser=()=>{
        const data = {
          refreshToken: sessionStorage.getItem("refreshToken")??"",
          navigate: navigate
        }
        dispatch(userDetailsActions.logout(data));
    }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="container-fluid">


            <button className="navbar-brand custom btn btn-link gradient-text">
                Cross Val.
            </button>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
                <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse custom navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav flex-grow-1">
                        <li className="nav-item flex-grow-1 text-center">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item flex-grow-1 text-center">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item flex-grow-1 text-center">
                            <a className="nav-link" href="#">Testimonials</a>
                        </li>
                        <li className="nav-item active nav-border flex-grow-1 text-center">
                            <a className="nav-link" href="#">Blog</a>
                        </li>
                        <li className="nav-item flex-grow-1 text-center">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                    </ul>
            </div>


            
            <button type="button" className="btn bg-gradient book fw-bold text-white" onClick={logoutTheUser}>Book A Demo</button>

        </div>

      </nav>
    </>
  );
};
