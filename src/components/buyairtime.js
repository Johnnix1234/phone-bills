import { NavLink } from "react-router-dom";
import { useState } from "react";

const Buyairtime = () => {
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
      <div className="amount1">
        <button
          onClick={() => handleClick(1)}
          className={togglestate === 1 ? "tabs" : ""}
        >
          50
        </button>
        <button
          onClick={() => handleClick(2)}
          className={togglestate === 2 ? "tabs" : ""}
        >
          100
        </button>
        <button
          onClick={() => handleClick(3)}
          className={togglestate === 3 ? "tabs" : ""}
        >
          200
        </button>
        <button
          onClick={() => handleClick(4)}
          className={togglestate === 4 ? "tabs" : ""}
        >
          500
        </button>
        <button
          onClick={() => handleClick(5)}
          className={togglestate === 5 ? "tabs" : ""}
        >
          1000
        </button>
        <button
          onClick={() => handleClick(6)}
          className={togglestate === 6 ? "tabs" : ""}
        >
          2000
        </button>
      </div>
      <div className="amount2">
        <div className="amountt">
          <div className="prefix">&#x20A6;</div>
          <input type="number" placeholder="50-100000" />
        </div>
        <div className="amounttt">
          <button>PAY</button>
        </div>
      </div>
      <h6>Check Phone balance and more</h6>
      <div className="amount3">
        <button>MTN</button>
        <button>AIRTEL</button>
        <button>GLO</button>
        <button>ETISALAT</button>
      </div>
    </>
  );
};

export default Buyairtime;
