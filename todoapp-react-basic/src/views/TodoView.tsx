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
  isCheckAll: boolean;
  status: TODO_STATUS;
};

class TodoView extends Component<TodoViewProps, TodoViewState> {
  state = {
    todoList: TODO_LIST,
    todoEditingId: '',
    isCheckAll: false,
    status: TODO_STATUS.ALL,
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

  handleEditTodoTask = (task: ITask, index: number = -1): void => {
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

  handleCheckAll = (): void => {
    const { todoList, isCheckAll } = this.state;
    const updatedTodoList: ITask[] = todoList.map((task: ITask) => ({
      ...task,
      isCompleted: !isCheckAll,
    }));

    this.setState((prevState) => ({
      todoList: updatedTodoList,
      isCheckAll: !prevState.isCheckAll,
    }));
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

  render = () => {
    const { todoList, todoEditingId, isCheckAll, status } = this.state;

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

export default TodoView;
