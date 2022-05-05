import { ITask } from '../interfaces/ITask';
import TodoItem from './TodoItem';

type TodoListProps = {
  todoList: ITask[];
};

const TodoList = ({ todoList }: TodoListProps) => {
  const renderTodoItem = (task: ITask): JSX.Element => {
    return <TodoItem key={task.id} task={task} />;
  };

  return (
    <>
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">{todoList.map(renderTodoItem)}</ul>
      </section>
    </>
  );
};

export default TodoList;
