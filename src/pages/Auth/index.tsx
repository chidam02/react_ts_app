import authPic from "../../images/auth-pic.svg";
import "./index.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {Outlet} from "react-router-dom";
import { RootType } from "../../store";
import {useNavigate} from "react-router-dom"

export default function AuthPage() {

    const navigate = useNavigate()
    const userDetails = useSelector((root:RootType)=>root.userDetails);

    useEffect(()=>{
        if(userDetails.isAuthenticated){
            navigate("/home")
        }
    },[navigate, userDetails.isAuthenticated])

  return (
    <div className="d-flex vw-100 vh-100">
      <img src={authPic}  alt="auth-pic" className="d-inline-block"/>

      <div className="flex-grow-1 d-flex align-items-center justify-content-center">
        <div>
          <h1 className="bold gradient-text text-center">Cross Val.</h1>

          <Outlet />

        </div>
      </div>
    </div>
  );
}
