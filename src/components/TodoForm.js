import React, { Component } from 'react'

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      responsible: "",
      description: "",
      priority: "low"
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault(); //para que no se refresque la pag
    this.props.onAddTodo(this.state);
    this.setState({
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    });
  }
  render() {
    return (
      <div className="card">
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input 
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleInput}
              className="form-control"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <input 
              type="text"
              name="responsible"
              value={this.state.responsible}
              className="form-control"
              placeholder="Responsible"
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <input 
              type="text"
              name="description"
              value={this.state.description}
              className="form-control"
              placeholder="Description"
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <select 
              name="priority"
              className="form-control"
              placeholder="Description"
              value={this.state.priority}
              onChange={this.handleInput}
            >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    )
  }
}

export default TodoForm