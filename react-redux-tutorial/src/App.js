import React from 'react';
import CounterContainer from './containers/CounterContainer';
import TodosConatiner from './containers/TodosConatiner';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosConatiner />
    </div>
  );
};

export default App;
