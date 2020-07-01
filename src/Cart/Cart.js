import React from "react";
import Summary from "../Summary/summary";
import Total from "../Total/total";

export default class cart extends React.Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <Summary selected={this.props.selected} />
        <Total selected={this.props.selected} />
      </section>
    );
  }
}
