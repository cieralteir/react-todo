import React from "react";
import List from "./components/List/List";
import Form from "./components/Form/Form";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Todo",
      form: {
        name: ""
      },
      items: []
    };
  }

  handleFormChange = (key, value) => {
    this.setState(state => ({
      form: { ...state.form, [key]: value }
    }));
  };

  handleFormSubmit = () => {
    this.setState(state => ({
      items: [...state.items, state.form]
    }));

    // Reset form
    this.setState(state => ({
      form: { name: "" }
    }));
  };

  handleItemRemove = item => {
    const index = this.state.items.findIndex(item_ => item_.name === item.name);

    this.setState(state => {
      const items = state.items;
      items.splice(index, 1);
      return items;
    });
  };

  render() {
    return (
      <div className="app">
        <Form
          name={this.state.name}
          form={this.state.form}
          onFormChange={this.handleFormChange}
          onFormSubmit={this.handleFormSubmit}
        />
        <br />
        <List
          name={this.state.name}
          items={this.state.items}
          onItemRemove={this.handleItemRemove}
        />
      </div>
    );
  }
}
