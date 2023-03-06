import TextField from "../../../components/textField/textField";
import authPic from "../../../images/auth-pic.svg";
import "../index.css";
import mailIcon from "../../../images/mail.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDetailsActions } from "../slice";
import { Link } from "react-router-dom";
import { RootType } from "../../../store";
import { useNavigate} from "react-router-dom";


export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {error, loading, isAuthenticated} = useSelector((root: RootType)=>root.userDetails);

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    cpassword: "",
  });

  const fieldHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { cpassword, ...rest } = formValues;
    if (rest.password !== cpassword) return;

    dispatch(userDetailsActions.register({userData: rest, 
      navigate
    }));

    setFormValues({ email: "", password: "", cpassword: "", });
  };

  return (
    <form className="auth-form-wrapper" onSubmit={submitHandler}>
      <p className="auth-form-title"> Create Account </p>
      <p className="auth-form-subtitle text-muted">
        Enter your email & password to login
      </p>

      <TextField
        required
        onChange={fieldHandler}
        value={formValues["email"]}
        label="Email Address"
        name="email"
        icon={mailIcon}
      />
      <div className="mt-3"/>
      <TextField
        required
        onChange={fieldHandler}
        value={formValues["password"]}
        label="Password"
        name="password"
        type="password"
        icon={mailIcon}
      />
      <div className="mt-3"/>
      <TextField
        required
        onChange={fieldHandler}
        value={formValues["cpassword"]}
        label="Confirm Password"
        name="cpassword"
        type="password"
        icon={mailIcon}
      />

      <section className="d-flex justify-content-between mt-3">
        <label
          className="d-flex align-items-center text-muted"
          htmlFor="rememberPassword"
        >
          <input type="checkbox" name="rememberPassword" />
          &nbsp;Remember password
        </label>
      </section>

      <section className="d-flex flex-column mt-3">
        <Link to="/auth/signIn" className="d-inline-block">
          <button
            name="signIn"
            type="button"
            className="btn btn-lg btn-primary text-white w-100"
          >
            Sign In
          </button>
        </Link>
        <h5 className="my-2">or</h5>
        <button
          name="createAccount"
          type="submit"
          className="btn btn-lg btn-secondary text-white"
        >
          {" "}
          Create Account{" "}
        </button>
      </section>
    </form>
  );
}
