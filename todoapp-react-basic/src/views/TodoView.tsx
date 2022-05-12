import { v4 as uuidv4 } from 'uuid';
import { Component } from 'react';

import { ITask } from '../interfaces/ITask';
import { TODO_LIST } from '../constants/todoList';

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
};

const isNotCheckAll = (todoList: ITask[] = []): boolean =>
  Boolean(todoList.find((todo: ITask) => !todo.isCompleted));

class TodoView extends Component<TodoViewProps, TodoViewState> {
  state = {
    todoList: TODO_LIST,
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

  filterTodosLeft = (todoList: ITask[] = []): ITask[] => {
    return todoList.filter((task: ITask) => !task.isCompleted);
  };

  clearCompleted = (): void => {
    this.setState((prevState) => ({
      todoList: this.filterTodosLeft(prevState.todoList),
    }));
  };

  handleRemoveTodoTask = (id: string = ''): void => {
    const { todoList } = this.state;
    const updatedTodoList: ITask[] = todoList.filter(
      (task: ITask) => task.id !== id,
    );

    this.setState({
      todoList: updatedTodoList,
    });
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
            checkAll={this.handleCheckAll}
            onRemoveTodo={this.handleRemoveTodoTask}
          />
          {todoList.length > 0 && (
            <TodoFooter
              numOfTodos={todoList.length}
              numOfTodosLeft={this.filterTodosLeft(todoList).length}
              clearCompleted={this.clearCompleted}
            />
          )}
        </section>
      </>
    );
  };
}

export default TodoView;
