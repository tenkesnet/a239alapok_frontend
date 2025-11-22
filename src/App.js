import logo from './logo.svg';
import './App.css';

const eloadas = {
  title: "React alapok",
  duration: 90,
  isFree: true,
  tags: ["react", "frontend"],
  show: function() {
    console.log(`Az előadás címe: ${this.title}`);
  },
  arrowShow: () => {
    console.log(`Az előadás címe: ${this.title}`);
  },
  address:{
    city: "Budapest",
    street: "Fő utca 1."
  }
}

eloadas.title = "React alapok 2024";
eloadas.valami = 10;
//eloadas.show=null;
eloadas.show();
console.log(eloadas.valami); // Budapest


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
