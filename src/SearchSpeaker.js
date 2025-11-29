import React, { useState } from "react";
const SearchSpeaker = () => {
    const [searchText, setSearchText] = useState('cégtár');
    const [cegNev, setCegNev] = useState('Pallas Platform');
    const peldaClick= () => {
        setSearchText('React Kft');
    }
    const tesztClick= () => {
        console.log(searchText);
    }
    return (
        <div>
            <label htmlFor="search" onClick={e => {setSearchText('Label clicked');setCegNev('Labeled cegnev');}}>Search speaker:
            </label>
            <input id="search" type="text" onChange={e =>
                setSearchText(e.target.value)} onBlur={e => setSearchText('Pokol')}/>
            <p>
                Searching for <strong>{searchText}</strong> in {cegNev}
            </p>
            <button onClick={e=>peldaClick()}>Példa gomb</button>
            <button onClick={tesztClick}>Teszt gomb</button>
        </div>
    );
}
export default SearchSpeaker;