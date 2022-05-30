import { Component } from 'react';

import FilterButton from './FilterButton';
import { TODO_STATUS } from '../constants/todoStatus';
import { IFilterButton } from '../interfaces/IFilterButton';

type TodoFooterProps = {
  setStatusFilter: (status: TODO_STATUS) => void;
  onClearCompleted: () => void;
  status: TODO_STATUS;
  numOfTodosLeft: number;
  numOfTodos: number;
};

class TodoFooter extends Component<TodoFooterProps> {
  constructor(props: TodoFooterProps) {
    super(props);
  }

  render() {
    const {
      setStatusFilter,
      onClearCompleted,
      numOfTodosLeft,
      numOfTodos,
      status,
    } = this.props;

    const filterButtons: IFilterButton[] = [
      {
        text: 'All',
        isActivated: status === TODO_STATUS.ALL,
        link: '',
        handleClick: () => setStatusFilter(TODO_STATUS.ALL),
      },
      {
        text: 'Active',
        isActivated: status === TODO_STATUS.ACTIVE,
        link: 'active',
        handleClick: () => setStatusFilter(TODO_STATUS.ACTIVE),
      },
      {
        text: 'Completed',
        isActivated: status === TODO_STATUS.COMPLETED,
        link: 'completed',
        handleClick: () => setStatusFilter(TODO_STATUS.COMPLETED),
      },
    ];

    const renderFilterButton = (filterButton: IFilterButton): JSX.Element => {
      return (
        <FilterButton key={`key${filterButton.text}`} data={filterButton} />
      );
    };

    return (
      <>
        <footer className="footer">
          <span className="todo-count">
            <strong>{numOfTodosLeft}</strong>
            <span>{` item${numOfTodosLeft === 1 ? '' : 's'} left`}</span>
          </span>
          <ul className="filters">{filterButtons.map(renderFilterButton)}</ul>
          {numOfTodosLeft < numOfTodos && (
            <button className="clear-completed" onClick={onClearCompleted}>
              Clear completed
            </button>
          )}
        </footer>
      </>
    );
  }
}

export default TodoFooter;
