import { ITask } from '../interfaces/ITask';
import TodoItem from './TodoItem';

type TodoListProps = {
  todoList: ITask[];
  todoEditingId: string;
  isCheckAll: boolean;
  setTodoEditingId: (id: string) => void;
  onEditTodo: (task: ITask, index: number) => void;
  onMarkTodoTaskCompleted: (id: string) => void;
};

const TodoList = ({
  todoList,
  todoEditingId,
  isCheckAll,
  setTodoEditingId,
  onEditTodo,
  onMarkTodoTaskCompleted,
}: TodoListProps) => {
  return (
    <>
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          checked={isCheckAll}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todoList.map((task: ITask, index: number) => {
            return (
              <TodoItem
                key={task.id}
                task={task}
                index={index}
                todoEditingId={todoEditingId}
                setTodoEditingId={setTodoEditingId}
                onEditTodo={onEditTodo}
                onMarkTodoTaskCompleted={onMarkTodoTaskCompleted}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default TodoList;
