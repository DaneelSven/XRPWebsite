import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";

class RealTestNet extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg">
          <Navbar.Brand
            style={{ color: "#ff9902" }}
            className="navbar"
            href="#home"
          >
            XRP Project
          </Navbar.Brand>
          <Navbar.Toggle aria-controls=" navbar basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav navbar">
            <Nav className="mr-auto navbar">
              <Nav.Link style={{ color: "#ff9902" }} href="/">
                Home
              </Nav.Link>
              <Nav.Link style={{ color: "#ff9902" }} href="#link">
                TestNet
              </Nav.Link>
              <NavDropdown title="XRP Ledger" id="basic-nav-dropdown">
                <NavDropdown.Item className="navbar" href="/">
                  Account
                </NavDropdown.Item>
                <NavDropdown.Item className="navbar" href="/Ledger">
                  Ledger
                </NavDropdown.Item>
                <NavDropdown.Item className="navbar" href="/Validator">
                  Validator
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="navbar" href="/Transactions">
                  Transactions
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default RealTestNet;
