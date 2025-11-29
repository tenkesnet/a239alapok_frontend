import './App.css';
import SearchSpeaker from './components/test/SearchSpeaker';


function App() {
  const name='Pallas PlatformXXXXXXXXX';
  return (
    <div className="App">
      <div>
        <h1>Welcome to {name}</h1>
        <p>This is a sample React application.</p>              
        <SearchSpeaker name='elso'/>
      </div>
    </div>
  );
}


export default App;
