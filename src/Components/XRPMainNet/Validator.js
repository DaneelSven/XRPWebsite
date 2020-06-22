import React, { Component } from "react";
import axios from "axios";
import UNL from "./UNL";
import Validators from "./Validators";
import RealTestNet from "../RealTestNet";

class Validator extends Component {
  state = { UNL: [], AllValidators: [], RippleValidators: [] };

  componentDidMount() {
    axios
      .get("https://data.ripple.com/v2/network/validators?")
      .then(response => {
        this.setState({ AllValidators: response.data.validators });

        var unlList = [];
        var RippleUNL = [];
        for (let i = 0; i < this.state.AllValidators.length; i++) {
          if (this.state.AllValidators[i].unl === true) {
            unlList.push(this.state.AllValidators[i]);
          }

          if (this.state.AllValidators[i].domain) {
            if (this.state.AllValidators[i].domain.includes(".ripple.com")) {
              RippleUNL.push(this.state.AllValidators[i]);
            }
          }
        }
        this.setState({ UNL: unlList, RippleValidators: RippleUNL });
      });
  }

  render() {
    console.log(this.state.AllValidators);
    console.log(this.state.UNL);
    console.log(this.state.RippleValidators);
    let rippleCount = this.state.RippleValidators.length;
    let allValidatorsCount = this.state.UNL.length;
    let RipplePercentage = allValidatorsCount / rippleCount;
    return (
      <div>
        <RealTestNet />

        <div className="row">
          <div className="col-sm-4">
            <h3>All XRP Ledger Validators</h3>
            {this.state.AllValidators.map(validator => {
              return (
                <div>
                  <Validators
                    key={validator.validation_public_key}
                    validator={validator}
                  />
                </div>
              );
            })}
          </div>

          <div className="col-sm-4">
            <h3>ALL Unique Node List Validators</h3>
            {this.state.UNL.map(validator => {
              return (
                <div>
                  <UNL
                    key={validator.validation_public_key}
                    validator={validator}
                  />
                </div>
              );
            })}
          </div>

          <div className="col-sm-4">
            <h3>Ripple stats and UNL Percentage</h3>
            <div className="Border rounded-pill">
              Total Unique Node List Validators: {allValidatorsCount}
              <br />
              Ripple runs: {rippleCount} Unique Validators
              <br />
              Ripple runs{" "}
              {(Math.round(RipplePercentage * 100) / 100).toFixed(2)} % of all
              UNL Validators
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Validator;
