import { v4 as uuidv4 } from 'uuid';
import { Component, createRef, KeyboardEvent, RefObject } from 'react';

import { ITask } from '../interfaces/ITask';

type TodoHeaderProps = {
  addTodoTask: (task: ITask) => void;
};

type TodoHeaderState = {};

class TodoHeader extends Component<TodoHeaderProps, TodoHeaderState> {
  titleInput: RefObject<HTMLInputElement>;

  constructor(props: TodoHeaderProps) {
    super(props);

    this.titleInput = createRef<HTMLInputElement>();
  }

  handleAddTodoTask = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && this.titleInput.current) {
      const title: string = this.titleInput.current.value;

      this.props.addTodoTask({
        id: uuidv4(),
        title,
        isCompleted: false,
      });

      this.titleInput.current.value = '';
    }
  };

  render = (): JSX.Element => {
    return (
      <>
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            ref={this.titleInput}
            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
              this.handleAddTodoTask(e)
            }
          />
        </header>
      </>
    );
  };
}

export default TodoHeader;
