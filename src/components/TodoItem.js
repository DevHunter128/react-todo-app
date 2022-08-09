import React from "react"

class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
        />
        <button deleteTodoProps={this.props.deleteTodoProps}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem