import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import AccountBalance from "./Components/XRPMainNet/AccountBalance";
import Ledger from "./Components/XRPMainNet/Ledger";
import Validator from "./Components/XRPMainNet/Validator";
import Transactions from "./Components/XRPMainNet/Transactions";
import "./index.css";

render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/AccountBalance" component={AccountBalance} />
      <Route path="/Ledger" component={Ledger} />
      <Route path="/Validator" component={Validator} />
      <Route path="/Transactions" component={Transactions} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
