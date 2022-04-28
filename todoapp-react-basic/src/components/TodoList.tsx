import { ITask } from '../interfaces/ITask';
import TodoItem from './TodoItem';

type TodoListProps = {
  todoList: ITask[];
  todoEditingId: string;
  setTodoEditingId: (id: string) => void;
  onEditTodo: (task: ITask, index: number) => void;
};

const TodoList = ({
  todoList,
  todoEditingId,
  setTodoEditingId,
  onEditTodo,
}: TodoListProps) => {
  return (
    <>
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
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
              />
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default TodoList;
