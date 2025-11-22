import logo from './logo.svg';
import './App.css';

// const speakers = ["John", "Walke", "Dan", "Sophie"];
// const firstspeakerName = speakers[0];
// const secondspeakerName = speakers[1];
// const thirdspeakerName = speakers[2];
// const fourthspeakerName = speakers[3];
// console.log(firstspeakerName); // "John"
// console.log(secondspeakerName); // "Walke"
// console.log(thirdspeakerName); // "Dan"
// console.log(fourthspeakerName); // "Sophie"

// const speakers = ["John", "Walke", "Dan", "Sophie"];
// const [firstspeakerName, secondspeakerName, thirdspeakerName, fourthspeakerName] = speakers
// console.log(firstspeakerName) // "John"
// console.log(secondspeakerName) // "Walke"
// console.log(thirdspeakerName) // "Dan"
// console.log(fourthspeakerName) // "Sophie

 const speakers = ["John", "Walke", "Dan", "Sophie"];
 //const [, ...rest] = speakers // the … used is called the  spread operator
 const refernicSzerint = speakers;
 const masolassal = [...speakers];


speakers.shift(); // removes the first element from the original array
speakers.pop();

console.log("refernicSzerint:", refernicSzerint); // ["Walke", "Dan", "Sophie"]
console.log("masolassal:", masolassal); // ["John", "Walke", "Dan", "Sophie"]

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
