import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutgoingMail } from "react-icons/md";
const Vend = () => {
  return (
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
      <h1>Phonebills</h1>
      <div className="vendbody">
        <div className="leftsidebar">
          <Link to="/">Dashboard</Link>
          <Link to="/buyairtime">Buy Airtime</Link>
          <Link to="/buydata">Buy Data</Link>
          <Link to="/cabletv">Cabletv</Link>
        </div>
        <div className="rightsidebar">
          <h5>Airtime, Data and Cable</h5>
          <input type="number" placeholder="703*******" />
          <h5>select network provider</h5>
          <ul>
            <li>Airtime</li>
            <li>Data</li>
          </ul>
          <div className="amount1">
            <button>50</button>
            <button>100</button>
            <button>200</button>
            <button>500</button>
            <button>1000</button>
            <button>2000</button>
          </div>
          <div className="amount2">
            <div className="amountt">
              <input type="number" placeholder="#50-100000" />
            </div>
            <div className="amounttt">
              <button>Pay</button>
            </div>
          </div>
          <h5>Check Phone balance and more</h5>
          <div className="amount1">
            <button>MTN</button>
            <button>AIRTEL</button>
            <button>GLO</button>
            <button>ETISALAT</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Vend;
