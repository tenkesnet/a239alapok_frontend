import React, { useState } from "react";
const SearchSpeaker = () => {
    const [searchText, setSearchText] = useState('cégtár');
    const [cegNev, setCegNev] = useState('Pallas Platform');
    const peldaClick = () => {
        setSearchText('React Kft');
    }
    const tesztClick = (e) => {
        console.log(searchText);
    }
    function handleChange(e) {
        console.log(e);
        e.target.className = 'alert';

    }
    return (
        <div>
            <label htmlFor="search" onClick={e => {
                setSearchText('Label clicked');
                setCegNev('Labeled cegnev');
            }
            } on>Search speaker:
            </label>
            <input id="search" type="text" onClick={handleChange} onChange={e =>
                setSearchText(e.target.value)} onBlur={e => { setSearchText('Pokol'); e.target.className = ''; }} />
            <p>
                Searching for <strong>{searchText}</strong> in {cegNev}
            </p>
            <button onClick={e => peldaClick()}>Példa gomb</button>
            <button onClick={handleChange}>Teszt gomb</button>
        </div>
    );
}
export default SearchSpeaker;