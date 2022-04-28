import { ITask } from '../interfaces/ITask';
import TodoItem from './TodoItem';

type TProps = {
  todoList: ITask[];
};

const TodoList = ({ todoList }: TProps) => {
  return (
    <>
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todoList.map((task: ITask) => {
            return <TodoItem key={task.id} task={task} />;
          })}
        </ul>
      </section>
    </>
  );
};

export default TodoList;
