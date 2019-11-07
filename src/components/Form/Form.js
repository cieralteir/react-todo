import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  onChange = (e, key) => {
    e.persist();
    this.props.onFormChange(key, e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit();
  };

  render() {
    return (
      <div className="form">
        <h3>{this.props.name} Form</h3>
        <form onSubmit={this.onSubmit}>
          <input
            name="name"
            placeholder="Name"
            value={this.props.form.name}
            onChange={e => this.onChange(e, "name")}
          />
          <br />
          <br />
          <button type="submit">Add {this.props.name}</button>
        </form>
      </div>
    );
  }
}
