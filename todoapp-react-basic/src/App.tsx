import { Component } from 'react';

import { ITask } from './interfaces/ITask';

import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';
import Footer from './components/Footer';

import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';
import './assets/css/App.css';

type AppProps = {};

type AppState = {
  todoList: ITask[];
};
class App extends Component<AppProps, AppState> {
  state = {
    todoList: [],
  };

  handleAddTodoTask = (task: ITask): void => {
    this.setState((prevState) => ({
      todoList: [...prevState.todoList, task],
    }));
  };

  render = () => {
    return (
      <>
        <section className="todoapp">
          <TodoHeader addTodoTask={this.handleAddTodoTask} />
          <TodoList todoList={this.state.todoList} />
          {this.state.todoList.length > 0 && <TodoFooter />}
        </section>
        <Footer />
      </>
    );
  };
}

export default App;
