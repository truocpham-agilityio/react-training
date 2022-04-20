import { Component } from 'react';

import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import { Product } from '../interfaces/Product';

type ProductsProps = {
  products: Product[];
};

/**
 * FilterableProductTable: contains the entirety of the example
 */
class FilterableProductTable extends Component<ProductsProps> {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}

export default FilterableProductTable;
