import React from 'react';
import Header from './Header';
// import Main from '../containers/Main';
import TodoList from '../containers/todo-list';
import DetailsList from '../containers/details-list';

const App = () => {
  return (
    <div className="App">
        <Header/>
        {/* <Main>Hellloooo</Main> */}
        <div className="main">
          <TodoList/>
          <DetailsList />
        </div>
        
    </div>
  );
}

export default App;
