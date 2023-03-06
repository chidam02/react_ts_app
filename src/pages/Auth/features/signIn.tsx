import TextField from "../../../components/textField/textField";
import authPic from "../../../images/auth-pic.svg";
import "../index.css";
import mailIcon from "../../../images/mail.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userDetailsActions } from "../slice";
import {Link} from "react-router-dom";

export default function SignIn(){
    const dispatch = useDispatch();

    const [formValues,setFormValues] = useState({email:"",password:""});

    const fieldHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({...formValues,[e.target.name]:e.target.value})
    }

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(userDetailsActions.login(formValues));
    }

    return (
        <form className="auth-form-wrapper" onSubmit={submitHandler}>
            <p className="auth-form-title"> Sign In </p>
            <p className="auth-form-subtitle text-muted">
              Enter your email & password to login
            </p>

            <TextField required onChange={fieldHandler} value={formValues["email"]} label="Email Address" name="email" icon={mailIcon} />
            <div className="mt-3"/>
            <TextField required onChange={fieldHandler} value={formValues["password"]} label="Password" name="password" type="password" icon={mailIcon} />

            <section className="d-flex justify-content-between mt-3">
              <label
                className="d-flex align-items-center text-muted"
                htmlFor="rememberPassword"
              >
                <input type="checkbox" name="rememberPassword" />
                &nbsp;Remember password
              </label>

              <button type="button" className="btn btn-link bg-gradient-text">
                Forgot password?
              </button>
            </section>

            <section className="d-flex flex-column mt-3">
              <button name="signIn" type="submit" className="btn btn-lg btn-primary text-white"> Sign In </button>
              <h5 className="my-2">or</h5>
              
              <Link to="/auth/signUp" className="d-inline-block"><button name="createAccount" type="button" className="btn btn-lg btn-secondary text-white w-100"> Create Account </button></Link>
            </section>

          </form>
    )
} 