import { ChangeEvent, Component, KeyboardEvent, MouseEvent } from 'react';

import { ITask } from '../interfaces/ITask';

type TodoItemProps = {
  task: ITask;
  todoEditingId: string;
  index: number;
  setTodoEditingId: (id: string) => void;
  onEditTodo: (task: ITask, index: number) => void;
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

  render = () => {
    const {
      task,
      todoEditingId,
      index,
      setTodoEditingId,
      onEditTodo,
      onMarkTodoTaskCompleted,
      onRemoveTodo,
    } = this.props;
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

    const handleCheckboxChange = (
      event: ChangeEvent<HTMLInputElement>,
    ): void => {
      onMarkTodoTaskCompleted(event.target.getAttribute('data-id')!);
    };

    const handleDoubleClick = (event: MouseEvent<HTMLLabelElement>): void => {
      const target = event.target as HTMLElement;
      setTodoEditingId(target.getAttribute('data-id')!);
    };

    const handleButtonRemoveClick = (
      event: MouseEvent<HTMLButtonElement>,
    ): void => {
      const target = event.target as HTMLElement;
      onRemoveTodo(target.getAttribute('data-id')!);
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
                data-id={id}
                className="toggle"
                type="checkbox"
                checked={isCompleted}
                onChange={handleCheckboxChange}
              />
              <label data-id={id} onDoubleClick={handleDoubleClick}>
                {title}
              </label>
              <button
                className="destroy"
                data-id={id}
                onClick={handleButtonRemoveClick}
              />
            </div>
          )}
        </li>
      </>
    );
  };
}

export default TodoItem;
