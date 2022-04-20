import { Component } from 'react';

type CategoryProps = {
  category: string;
};

/**
 * ProductCategoryRow: displays a heading for each category
 */
class ProductCategoryRow extends Component<CategoryProps> {
  render() {
    const category = this.props.category;

    return (
      <tr>
        <th colSpan={2}>{category}</th>
      </tr>
    );
  }
}

export default ProductCategoryRow;
