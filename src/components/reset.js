import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutgoingMail } from "react-icons/md";
import "./reset.css";
import LOGIN from "../assets/login.png";
const Reset = () => {
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
          <Link to="/">Home</Link>
          <Link to="/login" className="login">
            Login
          </Link>
          <Link to="/register">Register</Link>
          <Link to="/resetpassword">Reset-password</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="background">
        <div className="loginbody">
          <div className="login-img">
            <img src={LOGIN} alt="Login" className="login-imgss" />
          </div>
          <div className="login-form">
            <h1>Reset Password</h1>
            <input type="text" className="input-form" placeholder="Email" />

            <button className="btn">Reset</button>
            <div className="linksecs">
              <div>
                <p>Remember Password?</p>
              </div>
              <div className="linksec">
                <Link to="/login"> Login Here</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
