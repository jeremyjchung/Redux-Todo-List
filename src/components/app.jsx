import React, {Component} from 'react';
import Header from './header';
import TodoList from './todolist';
import AddTodo from '../containers/addtodo';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}
