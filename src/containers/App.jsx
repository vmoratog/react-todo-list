import React, { Component } from 'react'
import logo from '../../images/logo-png.png'
import './App.css'
//Data
import { todos } from '../../src/todos.json'
// subcomponents
import TodoForm from '../components/TodoForm'

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    };
    this.handleAddToDo = this.handleAddToDo.bind(this);
  }

  handleAddToDo(todo) {
    this.setState({
      todos: [...this.state.todos, todo] //voy a agregar una tarea al arreglo de tareas que tengo
    })
  }

  removeTodo(index) {
    if (window.confirm("Are you sure you want to delete it?")) {
        this.setState({
        todos: this.state.todos.filter((todo, i) => {
          return i !== index
        })
      })
    }
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><mark>{todo.responsible}</mark></p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    })
    //RETURN THE COMPONENT
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a className="text-white">
            Tasks
              <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={this.handleAddToDo}></TodoForm>
            </div>
            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App 