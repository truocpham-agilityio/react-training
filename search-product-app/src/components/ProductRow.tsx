import { Component } from 'react';
import { Product } from '../interfaces/Product';

type ProductProps = {
  product: Product;
};

/**
 * ProductRow: displays a row for each product
 */
class ProductRow extends Component<ProductProps> {
  render() {
    const product = this.props.product;
    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: 'red' }}>{product.name}</span>
    );

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
