import React, { Component } from 'react';
import logo from './logo.svg';
import SingleTodo from './SingleTodo';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentTodo: ""
    }
  }

  onInputChange = e => {
    this.setState ({ currentTodo: e.target.value});
  }

  addTodoOnclick = ()  => {
    let todosCopy = this.state.todos.slice();
    todosCopy.push(this.state.currentTodo);

    this.setState({ todos: todosCopy, currentTodo: ""})
  }

  removeTodo = i => {
    let todosCopy = this.state.todos.slice();

    todosCopy.splice(i,1);

    this.setState({ todos: todosCopy})
  }
  render() {
    let bulletTodos = this.state.todos.map((e, i) => {
        return (
          <SingleTodo todo={e} removeTodo={() => {
            this.removeTodo(i)
          }}></SingleTodo>
        );
    });
    return (
      <div>
        <input placeholder="Please enter an item" value={this.state.currentTodo} onChange={this.onInputChange}/>
        <br/>
        <button onClick = {this.addTodoOnclick}>Add to list</button>
        <br/>
        {this.state.todos.length === 0 ? "Nothing to show" : <ul>{bulletTodos}</ul>}
      </div>
    )
  }
}

export default App;
