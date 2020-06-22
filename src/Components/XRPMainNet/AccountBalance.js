import React, { Component } from "react";
import axios from "axios";

class AccountBalance extends Component {
  state = { xrpData: [], Balance: [], account: "" };

  getAccountBalance = () => {
    const { account } = this.state;
    axios
      .get(`https://data.ripple.com/v2/accounts/${account}/balances`)
      .then(response => {
        console.log(response.data.balances[0].value);
        this.setState({ Balance: response.data.balances[0].value });
      });
  };

  updateAccount = event => {
    this.setState({ account: event.target.value });
  };

  render() {
    return (
      <div class="card XRPCard ">
        <h5 class="card-header">Search balance of accounts</h5>
        <div class="input-group mb-3 input-group-lg">
          <input
            input="text"
            type="text"
            class="form-control "
            placeholder="Search Account"
            value={this.state.account}
            onChange={this.updateAccount}
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary "
              type="button"
              id="button-addon2"
              onClick={this.getAccountBalance}
            >
              Button
            </button>
          </div>
        </div>
        <div class="card-body ">
          <div className="Border rounded-pill">
            XRP Account balances: {this.state.Balance} XRP
          </div>

          <div className="Border rounded-pill">
            XRP Leder index: {this.state.xrpData.ledger_index}{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default AccountBalance;
