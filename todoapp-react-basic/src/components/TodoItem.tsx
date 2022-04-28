import { ChangeEvent, Component, KeyboardEvent } from 'react';

import { ITask } from '../interfaces/ITask';

type TodoItemProps = {
  task: ITask;
  todoEditingId: string;
  index: number;
  setTodoEditingId: (id: string) => void;
  onEditTodo: (task: ITask, index: number) => void;
};

type TodoItemState = {
  text: string;
};

class TodoItem extends Component<TodoItemProps, TodoItemState> {
  state = {
    text: this.props.task.title,
  };

  render = () => {
    const { task, todoEditingId, index, setTodoEditingId, onEditTodo } =
      this.props;
    const { id, title, isCompleted } = task;
    const isEditing = todoEditingId === id;

    const handleEditTodoTask = (): void => {
      onEditTodo(
        {
          ...task,
          title: this.state.text,
        },
        index,
      );
    };

    return (
      <>
        <li
          className={`${isEditing ? 'editing' : ''} ${
            isCompleted ? 'completed' : ''
          }`}
        >
          {isEditing ? (
            <input
              className="edit"
              type="text"
              autoFocus
              value={this.state.text}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                this.setState({ text: e.target.value })
              }
              onBlur={handleEditTodoTask}
              onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
                if (e.key === 'Enter') {
                  handleEditTodoTask();
                }
              }}
            />
          ) : (
            <div className={isCompleted ? 'completed' : 'view'}>
              <input
                className="toggle"
                type="checkbox"
                defaultChecked={isCompleted}
              />
              <label onDoubleClick={() => setTodoEditingId(id)}>{title}</label>
              <button className="destroy"></button>
            </div>
          )}
        </li>
      </>
    );
  };
}

export default TodoItem;
