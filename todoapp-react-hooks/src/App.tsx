import { FC } from 'react';

import TodoApp from './pages/TodoApp';
import Footer from './components/Footer';

import './assets/css/App.css';

const App: FC = () => {
  return (
    <>
      <TodoApp />
      <Footer />
    </>
  );
};

export default App;
