import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutgoingMail } from "react-icons/md";
import "./navbar.css";
import BASKET from "../assets/Basket.png";
import CASH from "../assets/Cash.png";
import CHECKED from "../assets/Checked.png";
import MUSEUM from "../assets/Museum.png";
import AIRTIME from "../assets/airtime.png";
import DATA from "../assets/data.png";
import ELECTRICITY from "../assets/electricity.png";
import CABLETV from "../assets/cabletv.png";
import logo from "../assets/logo.png";
import vector from "../assets/Vector.png";
import calendar from "../assets/calendar.png";
import Rupee from "../assets/Rupee.png";

const Navbar = () => {
  const data = [
    {
      id: 1,
      image: CHECKED,
      firsttext: "Setup Account",
      lasttext:
        "Let's get you started by staying connected with loved ones with cheap and affordable prices of products and services",
    },
    {
      id: 2,
      image: MUSEUM,
      firsttext: "Deposit Money",
      lasttext:
        " Make a deposit to start vending airtime, data subscription, Tv subscription and lots more",
    },
    {
      id: 3,
      image: BASKET,
      firsttext: "Purchase Product",
      lasttext:
        " Purchase any product at cheap and affordable prices with monthly and yearly discounts",
    },
    {
      id: 4,
      image: CASH,
      firsttext: "Cash Back",
      lasttext:
        "Buy any of our products and recieve instant cash back depending on the amount used in purchasing the product",
    },
  ];
  const pay = [
    {
      id: 1,
      image: DATA,
      firsttext: "Data Vending",
      lasttext:
        "All networks(Mtn, airtel, etisalat and glo) data subscriptions are available at a cheap and affordable price",
      link: "/vend",
    },
    {
      id: 2,
      image: AIRTIME,
      firsttext: "Deposit Money",
      lasttext:
        "Vend your airtime at acheap rate to stay connected with family and friends",
      link: "/vend",
    },
    {
      id: 3,
      image: CABLETV,
      firsttext: "Purchase Product",
      lasttext:
        "Renew your tv subscriptions here irrespective of the decoder you use",
      link: "/vend",
    },
    {
      id: 4,
      image: ELECTRICITY,
      firsttext: "Pay Electricity Bills",
      lasttext:
        "No worries about electricity failure or blackouts, pay your electricity bills here",
      link: "/vend",
    },
  ];
  const help = [
    {
      id: 1,
      image: calendar,
      firsttext: "Customer Support",
      lasttext:
        "Open to compliants 24/7, message the number at the top right corner of the screen to lodge comlaints",
      link: "https://google.com",
    },
    {
      id: 2,
      image: Rupee,
      firsttext: "Become an Affliate",
      lasttext:
        "Generate your affliate link and start earning 10% bonus when you refer friends",
      link: "https://google.com",
    },
    {
      id: 3,
      image: calendar,
      firsttext: "Web Developer",
      lasttext:
        "Are you in need of a website developer?, you can message the number at the top right corner of the screen",
      link: "https://google.com",
    },
  ];
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
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/resetpassword">Reset-password</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <section className="nextsec">
        <div className="nextsecleft">
          <h2>Welcome to PhoneBill</h2>
          <h5>
            We offer you discounts and affordfable prices for airtime, Tv-sub
            and lots more
          </h5>
          <div className="plays">
            <div className="play1">
              <img src={vector} alt="Play" />
            </div>
            <div className="play2">
              <h3>Let's get Started</h3>
            </div>
          </div>
        </div>
        <div className="bigpic">
          <img src={logo} alt="logo" />
        </div>
      </section>
      <section className="secbody">
        <div className="secondsec">
          <h1>How It Works</h1>
          <h5>Electronic vending of Telecom Services</h5>
        </div>
        <div className="images">
          {data.map(({ id, image, firsttext, lasttext }) => {
            return (
              <div key={id} className="checked">
                <img src={image} alt={firsttext} />
                <h4>{firsttext}</h4>
                <h5>{lasttext}</h5>
              </div>
            );
          })}
        </div>
      </section>
      <section className="secbody2">
        <div className="secbodyy">
          <h1>Pay Bills</h1>
          <h5>Electronic vending of Telecom Services</h5>
        </div>
        <div className="images">
          {pay.map(({ id, image, firsttext, lasttext, link }) => {
            return (
              <div key={id} className="checked">
                <img src={image} alt={firsttext} className="test" />
                <h4>{firsttext}</h4>
                <h5>{lasttext}</h5>
                <div className="space"></div>
                <div className="linx">
                  <Link to={link}>VEND</Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="lastsec">
        <div className="secbodyy">
          <h1>We are here to help you</h1>
        </div>
        <div className="imagess">
          {help.map(({ id, image, firsttext, lasttext, link }) => {
            return (
              <div key={id} className="checked">
                <img src={image} alt={firsttext} />
                <h4>{firsttext}</h4>
                <h5>{lasttext}</h5>
                <div className="space"></div>
                <div className="linx">
                  <Link to={link} target="_blank">
                    CLICK HERE
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <footer>
        <p>&copy; John Ibikunle 2022(Frontend Developer)</p>
      </footer>
    </div>
  );
};

export default Navbar;
