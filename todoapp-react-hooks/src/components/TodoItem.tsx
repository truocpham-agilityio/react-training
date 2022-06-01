import {
  ChangeEvent,
  FC,
  KeyboardEvent,
  memo,
  MouseEvent,
  useState,
} from 'react';

import { ITask } from '../interfaces/ITask';

type TodoItemProps = {
  task: ITask;
  todoEditingId: string;
  setTodoEditingId: (id: string) => void;
  onEditTodo: (task: ITask) => void;
  onMarkTodoTaskCompleted: (id: string) => void;
  onRemoveTodo: (id: string) => void;
};

const TodoItem: FC<TodoItemProps> = memo((props: TodoItemProps) => {
  const {
    task,
    todoEditingId,
    setTodoEditingId,
    onEditTodo,
    onMarkTodoTaskCompleted,
    onRemoveTodo,
  } = props;
  const { id, title, isCompleted } = task;
  const isEditing = todoEditingId === id;

  const [text, setText] = useState<string>(title);

  const handleTextInputChange = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setText(event.target.value);
  };

  const handleEditTodoTask = (): void => {
    onEditTodo({
      ...task,
      title: text,
    });
  };

  const handleTextInputKeyPress = (
    event: KeyboardEvent<HTMLInputElement>,
  ): void => {
    if (event.key === 'Enter') {
      handleEditTodoTask();
    }
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>): void => {
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
            value={text}
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
});

export default TodoItem;
