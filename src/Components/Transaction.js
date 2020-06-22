import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Transaction extends Component {
  state = { showFullTransaction: false };

  //Format Numbers
  //   ? `Amount: ${String(tx.Amount).replace(
  //       /(.)(?=(\d{3})+$)/g,
  //       "$1,"
  //     )}`

  toggleFullView = () => {
    this.setState({ showFullTransaction: !this.state.showFullTransaction });
  };

  get DisplayFullTransaction() {
    const { date, hash, ledger_index, tx } = this.props.transaction;

    if (!this.state.showFullTransaction) {
      return (
        <div className="BorderValidator">
          <div className="row">
            <div className="  textAlign col-md-8">
              Date of the Transaction: {date}
            </div>
            <div className="col-md-4">
              <Button
                className="ShowMore rounded-pill"
                onClick={this.toggleFullView}
              >
                show less
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className=" BorderValidator">
        <div className="row">
          <div className="textAlign col-md-8 ">
            Hash: {hash}
            <div>Sender: {tx.Account}</div>
            <div>Reciever: {tx.Destination}</div>
            <div>
              {tx.TransactionType === "Payment" && typeof tx.Amount === "string"
                ? `Amount: ${String(tx.Amount).replace(
                    /(.)(?=(\d{3})+$)/g,
                    "$1,"
                  )} XRP`
                : tx.TransactionType === "Payment" &&
                  typeof tx.Amount === "object"
                ? `Amount: ${tx.Amount.value}  ${tx.Amount.currency} by ${tx.Amount.issuer}`
                : `Type of Transaction: ${tx.TransactionType}`}
            </div>
          </div>

          <div className="col-md-4">
            <Button
              className="ShowMore rounded-pill"
              onClick={this.toggleFullView}
            >
              show more
            </Button>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return <div>{this.DisplayFullTransaction}</div>;
  }
}

export default Transaction;
