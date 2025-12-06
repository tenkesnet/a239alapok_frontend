import React from 'react';
import './App.css';
import UserList from './components/v2/UserList';
import Lifecycles from './components/lifecicley.component';
import logo from './logo.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      azEletErtelem: 42,
      incrementValue: props.incrementValue || 1
    };
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <button
            onClick={() =>
              this.setState(state => ({
                showChild: !state.showChild
              }))
            }
          >
            Toggle Lifecycles
          </button>
          <button
            onClick={() =>
              this.setState(state => ({
                text: state.text + '_hello'
              }))
            }
          >
            Update Text
          </button>
          {this.state.showChild ? <Lifecycles text={this.state.text} /> : null}
        </header>
      </div>
    );

  }
}

export default App;
