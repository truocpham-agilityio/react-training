import { Component } from 'react';

import TodoApp from './pages/TodoApp';
import Footer from './components/Footer';

import './assets/css/App.css';

class App extends Component {
  render = () => {
    return (
      <>
        <TodoApp />
        <Footer />
      </>
    );
  };
}

export default App;
