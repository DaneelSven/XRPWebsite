import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Axios from "axios";
import Transaction from "./Transaction";
import RealTestNet from "./RealTestNet";

class Transactions extends Component {
  state = { Transactions: [], TransactionAccount: "" };

  componentDidMount() {}

  getTransactions = () => {
    const { TransactionAccount } = this.state;
    Axios.get(
      `https://data.ripple.com/v2/accounts/${TransactionAccount}/transactions?limit=100`
    ).then(response => {
      console.log(response);
      this.setState({ Transactions: response.data.transactions });
    });
  };

  updateTransactionAccount = event => {
    this.setState({ TransactionAccount: event.target.value });
  };

  render() {
    let nrTransactions = this.state.Transactions;
    console.log(this.state.Transactions);

    return (
      <div>
        <RealTestNet />

        <div className="row">
          <div className=" col-md-6">
            <h3>Search 100 Transactions of the Account</h3>

            <div class="input-group mb-3 agreement">
              <input
                type="text"
                class="form-control"
                placeholder="Search Account's Transactions"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                value={this.state.TransactionAccount}
                onChange={this.updateTransactionAccount}
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  onClick={this.getTransactions}
                >
                  Search Transactions
                </button>
              </div>
            </div>
            {this.state.Transactions.map(transaction => {
              return (
                <div>
                  <Transaction
                    key={transaction.hash}
                    transaction={transaction}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Transactions;
