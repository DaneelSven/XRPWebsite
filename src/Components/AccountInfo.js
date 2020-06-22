import React, { Component } from "react";
import axios from "axios";

class AccountInfo extends Component {
  state = { xrpData: [], Balance: [], account: "" };

  getAccount2 = () => {
    const { account } = this.state;

    axios
      .get(`https://data.ripple.com/v2/accounts/${account}`)
      .then(response => {
        console.log("Respnse data is: ", response);

        return response.data.account_data;
      })
      .then(info => {
        // console.log(info)
        this.setState({ xrpData: info });
      });
  };

  updateAccount = event => {
    this.setState({ account: event.target.value });
  };

  render() {
    return (
      <div>
        <div class="card XRPCard">
          <h5 class="card-header">Account information</h5>
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
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={this.getAccount2}
              >
                Search
              </button>
            </div>
          </div>
          <div class="card-body">
            <div className="Border rounded-pill">
              XRP Leder index: {this.state.xrpData.ledger_index}
            </div>
            <div className="Border rounded-pill">
              Inception: {this.state.xrpData.inception}
            </div>
            <div className="Border rounded-pill">
              Initial Balance: {this.state.xrpData.initial_balance}
            </div>
            <div className="Border rounded-pill">
              XRP Parent Hash: {this.state.xrpData.parent}
            </div>
            <div className="Border rounded-pill">
              XRP tx Hash: {this.state.xrpData.tx_hash}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountInfo;
