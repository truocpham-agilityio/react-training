import { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <>
        <footer className="info">
          <p>Double-click to edit a todo</p>
          <p>
            Created by{' '}
            <a href="https://github.com/truocpham-agilityio">Truoc Pham</a>
          </p>
          <p>
            Part of <a href="http://todomvc.com">TodoMVC</a>
          </p>
        </footer>
      </>
    );
  }
}

export default Footer;
