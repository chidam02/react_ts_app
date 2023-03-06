import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";

export interface IUserDetailsState {
  _id?: string;
  email: string;
  password: string;
  accessToken?: string,
}

export interface IUserDetails {
  loading: boolean;
  error: string;
  isAuthenticated: boolean,
  userDetailsState: IUserDetailsState;
}

export const initialState: IUserDetails = {
  loading: false,
  error: "",
  isAuthenticated: false,
  userDetailsState: {
    accessToken:"",
    email: "",
    password: "",
    _id: "",
  },
};

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState: initialState,
  reducers: {
    register(state, action: PayloadAction<{userData: IUserDetailsState, 
      navigate: NavigateFunction
    }>) {
      state.loading = true;
      state.error = "";
      state.userDetailsState = initialState.userDetailsState;
    },
    registerSuccess(state) {
      state.loading = false;
      state.error = "";
    },
    registerFailure(state, action: PayloadAction<unknown>) {
      state.loading = false;
      state.error = action.payload as string;
    },


    login(state, action: PayloadAction<IUserDetailsState>){
      state.loading = true;
      state.error="";
      state.userDetailsState = initialState.userDetailsState;
    },
    loginSuccess(state, action: PayloadAction<IUserDetailsState & {accessToken:string,refreshToken:string}>){
      state.loading = false;
      state.error="";
      state.userDetailsState = {email:action.payload.email ,password:action.payload.password ,_id:action.payload._id, accessToken: action.payload.accessToken} ;

      state.isAuthenticated = true;
      sessionStorage.setItem("accessToken",action.payload.accessToken)
      sessionStorage.setItem("refreshToken",action.payload.refreshToken)
    },
    loginFailure(state, action: PayloadAction<unknown>){
      state.loading = false;
      state.error = action.payload as string;
      state.userDetailsState = initialState.userDetailsState;

      state.isAuthenticated = false;
      sessionStorage.setItem("accessToken",'');
      sessionStorage.setItem("refreshToken",'');
    },


    refreshToken(state, action: PayloadAction<{refreshToken: string, 
      navigate: NavigateFunction
    }>){
      state.loading = true;
    },
    refreshTokenSuccess(state, action: PayloadAction<{accessToken: string}>){
      state.loading=false;
      sessionStorage.setItem("accessToken", action.payload.accessToken);
      state.userDetailsState.accessToken = action.payload.accessToken;
    },
    refreshTokenFailure(state, action: PayloadAction<unknown>){
      state.loading=false;
      state.isAuthenticated=false;
      state.error=action.payload as string;
      state.userDetailsState =  initialState.userDetailsState;
      sessionStorage.setItem("accessToken",'');
      sessionStorage.setItem("refreshToken",'');
    },

    logout(state, action: PayloadAction<{refreshToken: string, 
      navigate: NavigateFunction
    }>){
      state.loading=true;
    }
    
  },
});


export const userDetailsActions = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
