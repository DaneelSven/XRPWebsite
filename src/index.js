import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import AccountBalance from "./Components/AccountBalance";
import Ledger from "./Components/Ledger";
import Validator from "./Components/Validator";
import Transactions from "./Components/Transactions";
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
