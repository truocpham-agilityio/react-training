import { Component } from 'react';

import { ITask } from '../interfaces/ITask';
import { TODO_LIST } from '../constants/todoList';
import { TODO_STATUS } from '../constants/todoStatus';
import { filterByStatus, isNotCheckAll } from '../utils/todoHelper';

import TodoFooter from '../components/TodoFooter';
import TodoHeader from '../components/TodoHeader';
import TodoList from '../components/TodoList';

import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

type TodoViewProps = {};

type TodoViewState = {
  todoList: ITask[];
  todoEditingId: string;
  status: TODO_STATUS;
};

class TodoApp extends Component<TodoViewProps, TodoViewState> {
  state = {
    todoList: TODO_LIST,
    todoEditingId: '',
    status: TODO_STATUS.ALL,
  };

  handleAddTodoTask = (task: ITask): void => {
    this.setState((prevState) => ({
      todoList: [...prevState.todoList, task],
    }));
  };

  setTodoEditingId = (id: string = ''): void => {
    this.setState({ todoEditingId: id });
  };

  handleEditTodoTask = (task: ITask): void => {
    if (task && task.id) {
      const { todoList } = this.state;
      const updatedTodoList = todoList.map((todo: ITask) => {
        if (todo.id === task.id) {
          return task;
        }
        return todo;
      });

      this.setState({ todoList: updatedTodoList, todoEditingId: '' });
    }
  };

  handleMarkTodoTaskCompleted = (id: string = ''): void => {
    const { todoList } = this.state;
    const updatedTodoList: ITask[] = todoList.map((task: ITask) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
    );

    this.setState({
      todoList: updatedTodoList,
    });
  };

  handleCheckAll = (): void => {
    const { todoList } = this.state;
    const isCheckAll: boolean = !isNotCheckAll(todoList);
    const updatedTodoList: ITask[] = todoList.map((task: ITask) => ({
      ...task,
      isCompleted: !isCheckAll,
    }));

    this.setState({ todoList: updatedTodoList });
  };

  handleClearCompleted = (): void => {
    const { todoList } = this.state;

    this.setState({
      todoList: filterByStatus(todoList, TODO_STATUS.ACTIVE),
    });
  };

  handleRemoveTodoTask = (id: string = ''): void => {
    const { todoList } = this.state;

    this.setState({
      todoList: filterByStatus(todoList, TODO_STATUS.REMOVE, id),
    });
  };

  setStatusFilter = (status: TODO_STATUS): void => {
    this.setState({
      status,
    });
  };

  render = (): JSX.Element => {
    const { todoList, todoEditingId, status } = this.state;
    const isCheckAll: boolean = !isNotCheckAll(todoList);

    return (
      <>
        <section className="todoapp">
          <TodoHeader addTodoTask={this.handleAddTodoTask} />
          <TodoList
            todoList={filterByStatus(todoList, status)}
            todoEditingId={todoEditingId}
            setTodoEditingId={this.setTodoEditingId}
            onEditTodo={this.handleEditTodoTask}
            onMarkTodoTaskCompleted={this.handleMarkTodoTaskCompleted}
            isCheckAll={isCheckAll}
            checkAll={this.handleCheckAll}
            onRemoveTodo={this.handleRemoveTodoTask}
          />
          {todoList.length > 0 && (
            <TodoFooter
              setStatusFilter={this.setStatusFilter}
              status={status}
              numOfTodos={todoList.length}
              numOfTodosLeft={
                filterByStatus(todoList, TODO_STATUS.ACTIVE).length
              }
              onClearCompleted={this.handleClearCompleted}
            />
          )}
        </section>
      </>
    );
  };
}

export default TodoApp;
