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
  todoEditingId: string;
};

class App extends Component<AppProps, AppState> {
  state = {
    todoList: [],
    todoEditingId: '',
  };

  handleAddTodoTask = (task: ITask): void => {
    this.setState((prevState) => ({
      todoList: [...prevState.todoList, task],
    }));
  };

  setTodoEditingId = (id: string = ''): void => {
    this.setState({ todoEditingId: id });
  };

  handleEditTodoTask = (task: ITask, index: number = -1) => {
    if (index >= 0) {
      const { todoList } = this.state;
      (todoList as ITask[]).splice(index, 1, task);

      this.setState({ todoList, todoEditingId: '' });
    }
  };

  render = () => {
    const { todoList, todoEditingId } = this.state;

    return (
      <>
        <section className="todoapp">
          <TodoHeader addTodoTask={this.handleAddTodoTask} />
          <TodoList
            todoList={todoList}
            todoEditingId={todoEditingId}
            setTodoEditingId={this.setTodoEditingId}
            onEditTodo={this.handleEditTodoTask}
          />
          {todoList.length > 0 && <TodoFooter />}
        </section>
        <Footer />
      </>
    );
  };
}

export default App;
