import FilterButton from './FilterButton';
import { IFilterButton } from '../interfaces/IFilterButton';

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

  const renderFilterButton = (filterButton: IFilterButton): JSX.Element => {
    return <FilterButton key={`key${filterButton.text}`} data={filterButton} />;
  };

  return (
    <>
      <footer className="footer">
        <span className="todo-count">
          <strong>{numOfTodosLeft}</strong>
          <span>{` item${
            numOfTodosLeft === 0 || numOfTodosLeft > 1 ? 's' : ''
          } left`}</span>
        </span>
        <ul className="filters">{filterButtons.map(renderFilterButton)}</ul>
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
