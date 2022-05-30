import { v4 as uuidv4 } from 'uuid';
import {
  ChangeEvent,
  FC,
  KeyboardEvent,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';

import { ITask } from '../interfaces/ITask';

type TodoHeaderProps = {
  addTodoTask: (task: ITask) => void;
};

const TodoHeader: FC<TodoHeaderProps> = memo(
  ({ addTodoTask }: TodoHeaderProps) => {
    const [title, setTitle] = useState<string>('');
    const titleInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      titleInputRef.current?.focus();
    });

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
            ref={titleInputRef}
            value={title}
            onChange={handleOnChange}
            onKeyDown={handleOnKeyDown}
          />
        </header>
      </>
    );
  },
);

export default TodoHeader;
