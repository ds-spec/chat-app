import "./Login.css";
import assets from "../../assets/assets";
import { useState } from "react";
const Login = () => {
  const [currState, setCurrState] = useState("Sign up");
  return (
    <div className="login">
      <img src={assets.logo_big} alt="" className="logo" />
      <form className="form-login">
        <h2>{currState}</h2>
        {currState === "Sign up" ? (
          <input
            type="text"
            placeholder="Enter Username"
            className="form-input"
            required
          />
        ) : null}
        <input type="email" placeholder="Enter Email" className="form-input" />
        <input
          type="password"
          placeholder="Enter Password"
          className="form-input"
        />
        <button type="submit">
          {currState === "Sign up" ? "Create Account" : "Login now"}
        </button>
        <div className="login-term">
          <input type="checkbox" placeholder="" />
          <p>Agree to the terms of use & privacy policy</p>
        </div>
        <div className="login-forgot">
          {currState === "Sign up" ? (
            <p className="login-toggle">
              Already have an account{" "}
              <span onClick={() => setCurrState("Login")}>
                Login here
              </span>
            </p>
          ) : (
            <p className="login-toggle">
              Already have an account{" "}
              <span onClick={() => setCurrState("Sign up")}>Create an account</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
