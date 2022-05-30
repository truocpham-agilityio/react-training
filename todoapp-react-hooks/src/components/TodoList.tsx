import { FC } from 'react';

import TodoItem from './TodoItem';
import { ITask } from '../interfaces/ITask';

type TodoListProps = {
  todoList: ITask[];
  todoEditingId: string;
  isCheckAll: boolean;
  setTodoEditingId: (id: string) => void;
  onEditTodo: (task: ITask, index: number) => void;
  onMarkTodoTaskCompleted: (id: string) => void;
  checkAll: () => void;
  onRemoveTodo: (id: string) => void;
};

const TodoList: FC<TodoListProps> = ({
  todoList,
  todoEditingId,
  isCheckAll,
  setTodoEditingId,
  onEditTodo,
  onMarkTodoTaskCompleted,
  checkAll,
  onRemoveTodo,
}: TodoListProps) => {
  const renderTodoItem = (task: ITask, index: number): JSX.Element => {
    return (
      <TodoItem
        key={task.id}
        task={task}
        index={index}
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

export default TodoList;
