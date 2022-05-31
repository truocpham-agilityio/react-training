import { Component } from 'react';

import { IFilterButton } from '../interfaces/IFilterButton';

type FilterButtonProps = {
  data: IFilterButton;
};

class FilterButton extends Component<FilterButtonProps> {
  constructor(props: FilterButtonProps) {
    super(props);
  }

  render = (): JSX.Element => {
    const { text, link, isActivated, handleClick } = this.props.data;

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
  }
}

export default FilterButton;
