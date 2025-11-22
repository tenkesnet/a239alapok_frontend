import logo from './logo.svg';
import './App.css';

const person = { name: 'John', age: 30, city: 'New York' };

console.log({ ...person, name: 'Johnny' });

const speakers = {
  id: 1,
  name: "Juliet Runolf",
  jobTitle: "Director, Marketing",
  company: "Abernatny Group",
  address: {
    street: "Okaland Dtuse",
    city: "Greenland",
    state: "Houston",
    country: "USA",
  }
}


function App() {
  const { name, jobTitle, company, address } = speakers;
  const { street, city, state, country } = address;
  return (
    <div className="App">
      <header className="App-header">
    <div> <h2>Name: {name}</h2>
        <h4>Position: {jobTitle}</h4>
        <h4>Company: {company}</h4>
        <h4>Street: {street}</h4>
        <h4>City: {city}</h4>
        <h4>State: {state}</h4>
        <h4>Country: {country}</h4>
      </div>
      </header>
      
    </div>
  );
}

export default App;
