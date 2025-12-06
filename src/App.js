import React from 'react';
import './App.css';
import UserList from './components/v2/UserList';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <UserList />
      </div>
    );

  }
}

export default App;
