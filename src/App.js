import './App.css';
import SpeakerProfile from './SpeakerProfile';
import SearchSpeaker from './SearchSpeaker';


function App() {
  const name='Pallas PlatformXXXXXXXXX';
  return (
    <div className="App">
      <div>
        <h1>Welcome to {name}</h1>
        <p>This is a sample React application.</p>
       
        
        <SearchSpeaker />
        <SearchSpeaker />
      </div>
    </div>
  );
}


export default App;
