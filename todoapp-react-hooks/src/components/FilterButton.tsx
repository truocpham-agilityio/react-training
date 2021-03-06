import { FC } from 'react';

import { IFilterButton } from '../interfaces/IFilterButton';

type FilterButtonProps = {
  data: IFilterButton;
};

const FilterButton: FC<FilterButtonProps> = ({ data }: FilterButtonProps) => {
  const { text, link, isActivated, handleClick } = data;

  return (
    <>
      <li>
        <a
          className={isActivated ? 'selected' : ''}
          href={`#/${link}`}
          onClick={handleClick}
        >
          {text}
        </a>
      </li>
    </>
  );
};

export default FilterButton;
