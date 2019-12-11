import React from "react";
import ListItem from "./ListItem";

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  handleItemRemove = item => {
    this.props.onItemRemove(item);
  };

  render() {
    let items = this.props.items || [];

    items = items.map((item, index) => (
      <ListItem item={item} onItemRemove={this.handleItemRemove} key={index} />
    ));

    return (
      <div className="list">
        <h3>{this.props.name} List</h3>
        {items.length ? <ul>{items}</ul> : <p>List is empty.</p>}
      </div>
    );
  }
}
