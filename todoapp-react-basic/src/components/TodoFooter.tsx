import { IFilterButton } from '../interfaces/IFilterButton';
import { ITask } from '../interfaces/ITask';
import FilterButton from './FilterButton';

type TodoFooterProps = {
  clearCompleted: () => void;
  numOfTodosLeft: number;
  numOfTodos: number;
};

const TodoFooter = (props: TodoFooterProps) => {
  const { clearCompleted, numOfTodosLeft, numOfTodos } = props;

  const filterButtons: IFilterButton[] = [
    {
      text: 'All',
      isActivated: true,
      link: '',
      handleClick: () => {},
    },
    {
      text: 'Active',
      isActivated: false,
      link: 'active',
      handleClick: () => {},
    },
    {
      text: 'Completed',
      isActivated: false,
      link: 'completed',
      handleClick: () => {},
    },
  ];

  return (
    <>
      <footer className="footer">
        <span className="todo-count">
          <strong>{numOfTodosLeft}</strong>
          <span>{` item${
            numOfTodosLeft === 0 || numOfTodosLeft > 1 ? 's' : ''
          } left`}</span>
        </span>
        <ul className="filters">
          {filterButtons.map((filterButton: IFilterButton) => {
            return (
              <FilterButton
                key={`key${filterButton.text}`}
                data={filterButton}
              />
            );
          })}
        </ul>
        {numOfTodosLeft < numOfTodos && (
          <button className="clear-completed" onClick={clearCompleted}>
            Clear completed
          </button>
        )}
      </footer>
    </>
  );
};

export default TodoFooter;
