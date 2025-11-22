import logo from './logo.svg';
import './App.css';
// const addNumbers = (a, b) => {
//   return a + b;
// };
// console.log(`App component is rendering: ${addNumbers(2, 3)}`);
// function addNumbers(a, b) {
//   return a + b;
// }
// const addNumbers = (a, b) => a + b;
function App() {
  return (
    <div >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to kjdsfhglkgjhdsakgkgjdalkjgdh.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <h1>New Heading</h1>
    </div>
  );
}

export default App;
