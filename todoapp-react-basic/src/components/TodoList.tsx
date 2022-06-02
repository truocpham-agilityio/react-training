import { Component } from 'react';

import TodoItem from './TodoItem';
import { ITask } from '../interfaces/ITask';

type TodoListProps = {
  todoList: ITask[];
  todoEditingId: string;
  isCheckAll: boolean;
  setTodoEditingId: (id: string) => void;
  onEditTodo: (task: ITask) => void;
  onMarkTodoTaskCompleted: (id: string) => void;
  checkAll: () => void;
  onRemoveTodo: (id: string) => void;
};

class TodoList extends Component<TodoListProps> {
  constructor(props: TodoListProps) {
    super(props);
  }

  render = (): JSX.Element => {
    const {
      todoList,
      todoEditingId,
      isCheckAll,
      setTodoEditingId,
      onEditTodo,
      onMarkTodoTaskCompleted,
      checkAll,
      onRemoveTodo,
    } = this.props;

    const renderTodoItem = (task: ITask): JSX.Element => {
      return (
        <TodoItem
          key={task.id}
          task={task}
          todoEditingId={todoEditingId}
          setTodoEditingId={setTodoEditingId}
          onEditTodo={onEditTodo}
          onMarkTodoTaskCompleted={onMarkTodoTaskCompleted}
          onRemoveTodo={onRemoveTodo}
        />
      );
    };

    return (
      <>
        <section className="main">
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            checked={isCheckAll}
            readOnly
          />
          <label htmlFor="toggle-all" onClick={checkAll}>
            Mark all as complete
          </label>
          <ul className="todo-list">{todoList.map(renderTodoItem)}</ul>
        </section>
      </>
    );
  };
}

export default TodoList;
