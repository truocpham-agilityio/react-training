import { v4 as uuidv4 } from 'uuid';
import {
  ChangeEvent,
  FC,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

import { ITask } from '../interfaces/ITask';

type TodoHeaderProps = {
  addTodoTask: (task: ITask) => void;
};

const TodoHeader: FC<TodoHeaderProps> = ({ addTodoTask }: TodoHeaderProps) => {
  const [title, setTitle] = useState<string>('');

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  const handleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter' && title) {
      addTodoTask({
        id: uuidv4(),
        title,
        isCompleted: false,
      });
      setTitle('');
    }
  };

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={title}
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
        />
      </header>
    </>
  );
};

export default TodoHeader;
