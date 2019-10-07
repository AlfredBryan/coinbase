import React, { Component } from "react";

import "./style.css";
import CustomNav from "../Navbar/CustomNav";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <CustomNav />
        <div className="cover_all">
          <h2 className="header_text">Buy and sell cryptocurrency</h2>
          <p className="header_paragraph">
            Coinbase is the easiest place to buy, sell, and manage your
            cryptocurrency portfolio.
          </p>
          <div className="input_space">
            <form className="input_form">
              <input
                className="get_started_input"
                placeholder="Email address"
                type="text"
              />
              <button className="get_started_button">Get started</button>
            </form>
          </div>
          <table className="bitcoin_table">
            <thead className="table-header">
              <tr>
                <th>
                  <span>#</span>
                </th>
                <th>
                  <span>Name</span>
                </th>
                <th>
                  <span>Price</span>
                </th>
                <th>
                  <span>Change</span>
                </th>
                <th>
                  <span>Chart</span>
                </th>
                <th>
                  <span>Trade</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
