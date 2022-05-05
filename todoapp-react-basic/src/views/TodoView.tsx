import { Component } from 'react';

import { ITask } from '../interfaces/ITask';

import TodoFooter from '../components/TodoFooter';
import TodoHeader from '../components/TodoHeader';
import TodoList from '../components/TodoList';

type TodoViewProps = {};

type TodoViewState = {
  todoList: ITask[];
};

class TodoView extends Component<TodoViewProps, TodoViewState> {
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
      </>
    );
  };
}

export default TodoView;
