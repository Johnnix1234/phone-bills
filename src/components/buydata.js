import { NavLink } from "react-router-dom";
const Buydata = () => {
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
        <button>150</button>
        <button>200</button>
        <button>400</button>
        <button>500</button>
        <button>1000</button>
        <button>2000</button>
      </div>
      <div className="amount2">
        <div className="amountt">
          <input type="number" placeholder="#50-10000" />
        </div>
        <div className="amounttt">
          <button>PAY</button>
        </div>
      </div>
      <h6>Check Phone Data and more</h6>
      <div className="amount3">
        <button>MTN</button>
        <button>AIRTEL</button>
        <button>GLO</button>
        <button>ETISALAT</button>
      </div>
    </>
  );
};

export default Buydata;
