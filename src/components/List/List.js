import React from "react";

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let items = this.props.items || [];

    items = items.map((item, index) => (
      <li className="item" key={index}>
        {item}
      </li>
    ));

    return (
      <div className="list">
        <h3>{this.props.name} List</h3>
        {items.length ? <ul>{items}</ul> : <p>List is empty.</p>}
      </div>
    );
  }
}
