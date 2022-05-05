import { v4 as uuidv4 } from 'uuid';
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
  isCheckAll: boolean;
};

const isNotCheckAll = (todoList: ITask[] = []): boolean =>
  Boolean(todoList.find((todo: ITask) => !todo.isCompleted));

class App extends Component<AppProps, AppState> {
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
    todoEditingId: '',
    isCheckAll: false,
  };

  componentDidMount() {
    this.setState({
      isCheckAll: !isNotCheckAll(this.state.todoList),
    });
  }

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

  handleMarkTodoTaskCompleted = (id: string = ''): void => {
    const { todoList } = this.state;
    const updatedTodoList: ITask[] = todoList.map((task: ITask) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
    );

    this.setState({
      todoList: updatedTodoList,
      isCheckAll: !isNotCheckAll(updatedTodoList),
    });
  };

  handleToggleMarkAllCompleted = (): void => {
    let updatedTodoList: ITask[] = [];
    const { todoList, isCheckAll } = this.state;

    if (isCheckAll) {
      updatedTodoList = todoList.map((task: ITask) => {
        return { ...task, isCompleted: false };
      });
    } else {
      updatedTodoList = todoList.map((task: ITask) => {
        return { ...task, isCompleted: true };
      });
    }

    this.setState({
      todoList: updatedTodoList,
      isCheckAll: !isNotCheckAll(updatedTodoList),
    });
  };

  filterTodosLeft = (todoList: ITask[] = []): ITask[] => {
    return todoList.filter((task: ITask) => !task.isCompleted);
  };

  clearCompleted = (): void => {
    this.setState((prevState) => ({
      todoList: this.filterTodosLeft(prevState.todoList),
    }));
  };

  render = () => {
    const { todoList, todoEditingId, isCheckAll } = this.state;

    return (
      <>
        <section className="todoapp">
          <TodoHeader addTodoTask={this.handleAddTodoTask} />
          <TodoList
            todoList={todoList}
            todoEditingId={todoEditingId}
            setTodoEditingId={this.setTodoEditingId}
            onEditTodo={this.handleEditTodoTask}
            onMarkTodoTaskCompleted={this.handleMarkTodoTaskCompleted}
            isCheckAll={isCheckAll}
          />
          {todoList.length > 0 && (
            <TodoFooter
              numOfTodos={todoList.length}
              numOfTodosLeft={this.filterTodosLeft(todoList).length}
              clearCompleted={this.clearCompleted}
            />
          )}
        </section>
        <Footer />
      </>
    );
  };
}

export default App;
