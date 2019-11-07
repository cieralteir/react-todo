import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        name: ""
      }
    };
  }

  handleChange = (e, key) => {
    this.setState(state => ({
      form: { ...state.form, [key]: e.target.value }
    }));
    e.persist();
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("submit");
  };

  render() {
    return (
      <div className="form">
        <h3>{this.props.name} Form</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            placeholder="Name"
            value={this.state.form.name}
            onChange={e => this.handleChange(e, "name")}
          />
          <br />
          <br />
          <button type="submit">Add {this.props.name}</button>
        </form>
      </div>
    );
  }
}
