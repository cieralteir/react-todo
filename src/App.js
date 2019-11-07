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
      }
    };
  }

  handleFormChange = (key, value) => {
    this.setState(state => ({
      form: { ...state.form, [key]: value }
    }));

    console.log(this.state);
  };

  handleFormSubmit = () => {
    console.log("handle submit");
  }

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
        <List name={this.state.name} />
      </div>
    );
  }
}
