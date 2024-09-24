import "./Login.css";
import assets from "../../assets/assets";
const Login = () => {
  return (
    <div className="login">
      <img src={assets.logo_big} alt="" className="logo" />
      <form className="form-login">
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Enter Username"
          className="form-input"
          required
        />
        <input type="email" placeholder="Enter Email" className="form-input" />
        <input
          type="password"
          placeholder="Enter Password"
          className="form-input"
        />
        <button type="submit">Sign Up</button>
        <div className="login-term">
          <input type="checkbox" placeholder="" />
          <p>Agree to the terms of use & privacy policy</p>
        </div>
        <div className="login-forgot">
          <p className="login-toggle">
            Already have an account <span>Click Here</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
