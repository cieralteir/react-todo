import React from "react";
import List from "./components/List/List";
import Form from "./components/Form/Form";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Form name="Todo" />
        <br />
        <List name="Todo" />
      </div>
    );
  }
}
