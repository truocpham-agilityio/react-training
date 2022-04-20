import { Component, ChangeEvent } from 'react';

type ProductsProps = {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: (v: string) => void;
  onInStockChange: (v: boolean) => void;
};

/**
 * SearchBar: receives all user input
 */
class SearchBar extends Component<ProductsProps> {
  constructor(props: ProductsProps | Readonly<ProductsProps>) {
    super(props);

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e: ChangeEvent<HTMLInputElement>) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e: ChangeEvent<HTMLInputElement>) {
    this.props.onInStockChange(e.target.checked);
  }

  render() {
    const { filterText, inStockOnly } = this.props;

    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={this.handleInStockChange}
          />{' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default SearchBar;
