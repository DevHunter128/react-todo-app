import React, { Component } from "react";

class InputTodo extends Component {
  state = {
    title: ""
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: "",
      });
    } else {
      alert("Please write item");
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add Todo..." name="title" value={this.state.title} onChange={this.onChange} />
        <button>Submit</button>
      </form>
    )
  }
}

export default InputTodo