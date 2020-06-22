import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Validators extends Component {
  state = { showFullValidator: false };

  toggleFullView = () => {
    this.setState({ showFullValidator: !this.state.showFullValidator });
  };

  get getDisplayFullValidator() {
    const {
      agreement_1h,
      agreement_24h,
      domain,
      chain,
      current_index,
      validation_public_key,
      unl
    } = this.props.validator;

    if (this.state.showFullValidator) {
      return (
        <div className=" BorderValidator ">
          <div className="row">
            <div className="textAlign col-md-8 ">
              <div>
                Domain Name: {domain}
                {/* Domain Name:{" "}
                {this.props.validator.hasOwnProperty("domain")
                  ? { domain }
                  : "Unknown"}{" "} */}
              </div>

              <div>
                Agreement in 1 hour:{" "}
                <div className="agreement">
                  - Missed: {agreement_1h.missed}, Total: {agreement_1h.total},
                  Score:
                  {(Math.round(agreement_1h.score * 100) / 100).toFixed(2)}
                </div>
              </div>
              <div>
                Agreement in 24 hour:{" "}
                <div className="agreement">
                  - Missed: {agreement_24h.missed}, Total: {agreement_24h.total}
                  , Score:
                  {(Math.round(agreement_24h.score * 100) / 100).toFixed(2)}
                </div>
              </div>
              <div>Chain: {chain}</div>
              <div>Current Ledger Index: {current_index}</div>
              <div>Validator Public-Key: {validation_public_key}</div>
              <div>Unique Node List: {unl ? "Yes" : "No"}</div>
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
          <div className="textAlign col-md-6 ">
            Domain Name: {domain ? domain : "There is no public UNL given"}
          </div>

          <div className="col-md-8">
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
    return <div>{this.getDisplayFullValidator}</div>;
  }
}

export default Validators;
