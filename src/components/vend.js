import { NavLink } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutgoingMail } from "react-icons/md";
import "./vend.css";
import Buyairtime from "./buyairtime";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Buydata from "./buydata";
import Cabletv from "./cabletv";
const Vend = () => {
  return (
    <Router>
      <div className="allbody">
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
        <div className="h1logo">
          <h1>Phonebills</h1>
        </div>
        <div className="vendbody">
          <div className="leftsidebar">
            <li>
              <NavLink exact to="/">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/buyairtime">Buy Airtime</NavLink>
            </li>
            <li>
              <NavLink to="/buydata">Buy Data</NavLink>
            </li>
            <li>
              <NavLink to="/cabletv">Cabletv</NavLink>
            </li>
          </div>
          <div className="rightsidebar">
            <h5>Airtime, Data and Cable</h5>
            <input
              type="number"
              placeholder="e.g 703*******"
              className="input1"
            />
            <h5>select network provider</h5>
            <Switch>
              <Route path="/buyairtime">
                <Buyairtime />
              </Route>
              <Route path="/buydata">
                <Buydata />
              </Route>
              <Route path="/cabletv">
                <Cabletv />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};
export default Vend;
