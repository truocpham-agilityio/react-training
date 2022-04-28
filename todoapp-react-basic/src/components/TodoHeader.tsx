import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, Component, KeyboardEvent } from 'react';

import { ITask } from '../interfaces/ITask';

type TodoHeaderProps = {
  addTodoTask: (task: ITask) => void;
};

type TodoHeaderState = {
  text: string;
};

class TodoHeader extends Component<TodoHeaderProps, TodoHeaderState> {
  state = {
    text: '',
  };

  handleAddTodoTask = (event: KeyboardEvent<HTMLInputElement>) => {
    const title: string = this.state.text;

    if (event.key === 'Enter' && title) {
      this.props.addTodoTask({
        id: uuidv4(),
        title,
        isCompleted: false,
      });

      this.setState({
        text: '',
      });
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
            value={this.state.text}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              this.setState({
                text: e.target.value,
              });
            }}
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
