import { Navbar } from "./components/navbar/navbar";
import AuthPage from "./pages/Auth";
import Home from "./pages/home";
import configureAppStore, { appInitialState, RootType } from "./store";
import { Outlet } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDetailsActions } from "./pages/Auth/slice";
import {useNavigate} from "react-router-dom";

function App() {
  const userDetails = useSelector((root:RootType)=>root.userDetails);
  const intervalRef = useRef<NodeJS.Timer>();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(()=>{
    if(userDetails.userDetailsState.accessToken){
      
      if(intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = setInterval(()=>{
        const data = {
          refreshToken: sessionStorage.getItem("refreshToken")??"",
          navigate: navigate
        }
        dispatch(userDetailsActions.refreshToken(data));
      },60*1000)
    }

    return () => {
      if(intervalRef.current) clearInterval(intervalRef.current);
    }
  },[dispatch, navigate, userDetails.userDetailsState.accessToken])





  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
    </React.Fragment>
  );
}

export default App;
