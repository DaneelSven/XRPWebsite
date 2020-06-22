import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" navbar row">
      <div className="col-sm-3 navbar">
        <Link className="navbar" to="/">
          Account
        </Link>
      </div>
      <div className="col-sm-3 navbar">
        <Link className="navbar" to="/Ledger">
          Ledger
        </Link>
      </div>
      <div className="col-sm-3 navbar">
        <Link className="navbar" to="/Validator">
          Validator
        </Link>
      </div>
      <div className="col-sm-3 navbar">
        <Link className="navbar" to="/Transactions">
          Transactions
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
