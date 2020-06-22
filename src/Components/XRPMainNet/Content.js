import React, { Component } from "react";
import AccountInfo from "./AccountInfo";
import AccountBalance from "./AccountBalance";
import RealTestNet from "../RealTestNet";

class test extends Component {
  render() {
    return (
      <div>
        <RealTestNet />
        <div className="row">
          <div className="col-sm-6 ">
            <AccountInfo />
          </div>
          <div className="col-sm-6 ">
            <AccountBalance />
          </div>
        </div>
      </div>
    );
  }
}
export default test;
