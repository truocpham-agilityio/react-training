import { ITask } from '../interfaces/ITask';

type TodoItemProps = {
  task: ITask;
};

const TodoItem = ({ task }: TodoItemProps) => {
  const { title, isCompleted } = task;

  return (
    <>
      <li>
        <div className={isCompleted ? 'completed' : 'view'}>
          <input
            className="toggle"
            type="checkbox"
            defaultChecked={isCompleted}
          />
          <label>{title}</label>
          <button className="destroy"></button>
        </div>
        <input className="edit" value="Rule the web" />
      </li>
    </>
  );
};

export default TodoItem;
