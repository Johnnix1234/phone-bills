import { NavLink } from "react-router-dom";
import Cablecss from "./cabletv.module.css";
const Cabletv = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/buyairtime">AIRTIME</NavLink>
        </li>
        <li>
          <NavLink to="/buydata">DATA</NavLink>
        </li>
        <li>
          <NavLink to="/cabletv">CABLE</NavLink>
        </li>
      </ul>
      <div className={Cablecss.amount1}>
        <button>1500</button>
        <button>2500</button>
        <button>4000</button>
        <button>1000</button>
      </div>
      <input
        type="number"
        placeholder="Enter your decoder number"
        className="jusinput"
      />
      <div className="amount2">
        <div className="amountt">
          <input type="number" placeholder="#60-10000" />
        </div>
        <div className="amounttt">
          <button>PAY</button>
        </div>
      </div>
      <h6>Check Phone Data and more</h6>
      <div className={Cablecss.amount3}>
        <button>STARTIMES</button>
        <button>DSTV</button>
        <button>GOTV</button>
      </div>
    </>
  );
};

export default Cabletv;
