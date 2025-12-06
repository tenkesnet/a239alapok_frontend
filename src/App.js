import React from 'react';
import './App.css';
import UserList from './components/v2/UserList';


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
      <div className="App">
        <h1>Üdv a Felhasználói alkalmazásban!</h1>
        <h2>Az élet értelme: {this.state.azEletErtelem}</h2>
        <button onClick={() => {
          this.setState({ azEletErtelem: this.state.azEletErtelem + this.state.incrementValue });
          console.log('Az élet értelme most már:', this.state.azEletErtelem);
          setTimeout(() => {
            console.log('Időzített élet értelme:', this.state.azEletErtelem);
          }, 1);
        }
        }>Növeld az élet értelmét!</button>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        {/*<UserList />*/}
      </div>
    );

  }
}

export default App;
