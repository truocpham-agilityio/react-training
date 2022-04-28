import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoFooter from './components/TodoFooter';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';

import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';
import './assets/css/App.css';
import Footer from './components/Footer';

class App extends Component {
  state = {
    todoList: [
      {
        id: uuidv4(),
        title: 'Task 1',
        isCompleted: true,
      },
      {
        id: uuidv4(),
        title: 'Task 2',
        isCompleted: false,
      },
    ],
  };

  render = () => {
    return (
      <>
        <section className="todoapp">
          <TodoHeader />
          <TodoList todoList={this.state.todoList} />
          <TodoFooter />
        </section>
        <Footer />
      </>
    );
  };
}

export default App;
