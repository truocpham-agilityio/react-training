import { Component } from 'react';

import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import { Product } from '../interfaces/Product';

type ProductsProps = {
  products: Product[];
};

type ProductsState = {
  filterText: string;
  inStockOnly: boolean;
};

/**
 * FilterableProductTable: contains the entirety of the example
 */
class FilterableProductTable extends Component<ProductsProps, ProductsState> {
  constructor(props: ProductsProps | Readonly<ProductsProps>) {
    super(props);

    this.state = {
      filterText: '',
      inStockOnly: false,
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText: string) {
    this.setState({
      filterText,
    });
  }

  handleInStockChange(inStockOnly: boolean) {
    this.setState({
      inStockOnly,
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
