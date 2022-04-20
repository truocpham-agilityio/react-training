import { Component } from 'react';

import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';
import { Product } from '../interfaces/Product';

type ProductsProps = {
  products: Product[];
};

/**
 * ProductTable: displays and filters the data collection based on user input
 */
class ProductTable extends Component<ProductsProps> {
  render() {
    const rows: any[] = [];
    let lastCategory: any = null;

    this.props.products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />,
        );
      }

      rows.push(<ProductRow product={product} key={product.name} />);

      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ProductTable;
