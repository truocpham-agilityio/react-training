import { Component } from 'react';

import TodoView from './views/TodoView';
import Footer from './components/Footer';

import './assets/css/App.css';

class App extends Component {
  render = () => {
    return (
      <>
        <TodoView />
        <Footer />
      </>
    );
  };
}

export default App;
