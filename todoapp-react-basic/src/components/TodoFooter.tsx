import { IFilterButton } from '../interfaces/IFilterButton';
import FilterButton from './FilterButton';

const TodoFooter = () => {
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
          <strong>2</strong> items left
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
        <button className="clear-completed">Clear completed</button>
      </footer>
    </>
  );
};

export default TodoFooter;
