import { NavLink } from "react-router-dom";
import Cablecss from "./cabletv.module.css";
import { useState } from "react";
const Cabletv = () => {
  const [togglestate, Settogglestate] = useState(null);
  const handleClick = (index) => {
    Settogglestate(index);
  };
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
        <button
          onClick={() => handleClick(1)}
          className={togglestate === 1 ? "tabs" : ""}
        >
          1500
        </button>
        <button
          onClick={() => handleClick(2)}
          className={togglestate === 2 ? "tabs" : ""}
        >
          2500
        </button>
        <button
          onClick={() => handleClick(3)}
          className={togglestate === 3 ? "tabs" : ""}
        >
          4000
        </button>
        <button
          onClick={() => handleClick(4)}
          className={togglestate === 4 ? "tabs" : ""}
        >
          1000
        </button>
      </div>
      <input
        type="number"
        placeholder="Enter your decoder number"
        className="jusinput"
      />
      <div className="amount2">
        <div className="amountt">
          <div className="prefix">&#x20A6;</div>
          <input type="number" placeholder="60-10000" />
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
