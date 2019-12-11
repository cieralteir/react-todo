import React from "react";

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  removeItem = () => {
    this.props.onItemRemove(this.props.item);
  };

  render() {
    return (
      <li className="item">
        <p>{this.props.item.name}</p>
        <button onClick={e => this.removeItem()}>remove</button>
      </li>
    );
  }
}
