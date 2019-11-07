import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e, key) => {
    e.persist();
    this.props.onFormChange(key, e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit();
  };

  render() {
    return (
      <div className="form">
        <h3>{this.props.name} Form</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            placeholder="Name"
            value={this.props.form.name}
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
