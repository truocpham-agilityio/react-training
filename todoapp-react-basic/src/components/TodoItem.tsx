import { ChangeEvent, Component, KeyboardEvent } from 'react';

import { ITask } from '../interfaces/ITask';

type TodoItemProps = {
  task: ITask;
  todoEditingId: string;
  setTodoEditingId: (id: string) => void;
  onEditTodo: (task: ITask) => void;
  onMarkTodoTaskCompleted: (id: string) => void;
  onRemoveTodo: (id: string) => void;
};

type TodoItemState = {
  text: string;
};

class TodoItem extends Component<TodoItemProps, TodoItemState> {
  state = {
    text: this.props.task.title,
  };

  render = (): JSX.Element => {
    const {
      task,
      todoEditingId,
      setTodoEditingId,
      onEditTodo,
      onMarkTodoTaskCompleted,
      onRemoveTodo,
    } = this.props;
    const { id, title, isCompleted } = task;
    const isEditing = todoEditingId === id;

    const handleEditTodoTask = (): void => {
      onEditTodo({
        ...task,
        title: this.state.text,
      });
    };

    const handleTextInputChange = (
      event: ChangeEvent<HTMLInputElement>,
    ): void => {
      this.setState({ text: event.target.value });
    };

    const handleTextInputKeyPress = (
      event: KeyboardEvent<HTMLInputElement>,
    ): void => {
      if (event.key === 'Enter') {
        handleEditTodoTask();
      }
    };

    const handleCheckboxChange = (): void => {
      onMarkTodoTaskCompleted(id);
    };

    const handleDoubleClick = (): void => {
      setTodoEditingId(id);
    };

    const handleButtonRemoveClick = (): void => {
      onRemoveTodo(id);
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
              onChange={handleTextInputChange}
              onBlur={handleEditTodoTask}
              onKeyPress={handleTextInputKeyPress}
            />
          ) : (
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={isCompleted}
                onChange={handleCheckboxChange}
              />
              <label onDoubleClick={handleDoubleClick}>{title}</label>
              <button className="destroy" onClick={handleButtonRemoveClick} />
            </div>
          )}
        </li>
      </>
    );
  };
}

export default TodoItem;
