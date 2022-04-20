import { Component } from 'react';

/**
 * SearchBar: receives all user input
 */
class SearchBar extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" /> Only show products in stock
        </p>
      </form>
    );
  }
}

export default SearchBar;
