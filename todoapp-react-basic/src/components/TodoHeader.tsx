import { v4 as uuidv4 } from 'uuid';
import {
  ChangeEvent,
  Component,
  createRef,
  KeyboardEvent,
  RefObject,
} from 'react';

import { ITask } from '../interfaces/ITask';

type TodoHeaderProps = {
  addTodoTask: (task: ITask) => void;
};

type TodoHeaderState = {};

class TodoHeader extends Component<TodoHeaderProps, TodoHeaderState> {
  titleInputRef: RefObject<any>;

  constructor(props: TodoHeaderProps) {
    super(props);
    this.state = {};
    this.titleInputRef = createRef<HTMLInputElement>();
  }

  handleAddTodoTask = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    const title: string = this.titleInputRef.current.value;

    if (event.key === 'Enter' && title) {
      this.props.addTodoTask({
        id: uuidv4(),
        title,
        isCompleted: false,
      });
      this.titleInputRef.current.value = '';
    }
  };

  handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      text: event.target.value,
    });
  };

  handleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    this.handleAddTodoTask(event);
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
            ref={this.titleInputRef}
            onChange={this.handleOnChange}
            onKeyDown={this.handleOnKeyDown}
          />
        </header>
      </>
    );
  };
}

export default TodoHeader;
