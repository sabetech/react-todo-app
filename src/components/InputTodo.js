import React, { Component } from "react"

class InputTodo extends Component {
      
    componentDidMount() {
        console.log(this.props)
    }

    state = {
        title: ""
      };

    onChange = e => {
    this.setState({
        title: e.target.value
    });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim()) {
            this.props.addTodoProps(this.state.title)
            this.setState({
              title: "",
            })
          } else {
            alert("Please write item")
          }
    };

    addTodoItem = title => {
        const newTodo = {
            id: 4,
            title: title,
            completed: false
          };
          this.setState({
            todos: [...this.state.todos, newTodo]
          });
    };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input type="text" placeholder="Add todo..." value={this.state.title} onChange={this.onChange} className="input-text"/>
        <button className="input-submit">Submit</button>
      </form>
    )
  }
}
export default InputTodo