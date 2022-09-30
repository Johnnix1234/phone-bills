import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutgoingMail } from "react-icons/md";
// import "./login.css";
import LOGIN from "../assets/login.png";

const Register = () => {
  return (
    <div className="all">
      <div className="nav">
        <div className="phonenum">
          <FiPhoneCall />
          <h4>hot-line: +2347035396754</h4>
        </div>
        <div className="gmailacct">
          <MdOutgoingMail />
          <h4>Gmail: ibkjohn37@gmail.com</h4>
        </div>
      </div>
      <div className="links">
        <div className="logo">
          <h2>PhoneBills</h2>
        </div>
        <div className="link">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/resetpassword">Reset-password</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
      <div className="background">
        <div className="loginbody">
          <div className="login-img">
            <img src={LOGIN} alt="Login" className="login-imgss" />
          </div>
          <div className="login-form">
            <h1>Register</h1>
            <input type="text" className="input-form" placeholder="Full Name" />
            <input type="text" className="input-form" placeholder="Email" />
            <input
              type="password"
              className="input-form"
              placeholder="Password"
            />
            <button className="btn">Login</button>
            <div className="linksecs">
              <div>
                <p>Forget Password?</p>
              </div>
              <div className="linksec">
                <Link to="/resetpassword"> Click Here</Link>
              </div>
            </div>
            <div className="linksecs">
              <div>
                <p>Already have an account?</p>
              </div>
              <div className="linksec">
                <Link to="/login">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
