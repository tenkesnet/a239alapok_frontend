import React, { use, useState, useEffect } from "react";
const SearchSpeaker = () => {
    const [searchText, setSearchText] = useState('cégtár');
    /*
    useEffect(() => {
    // Mellékhatás logika (pl. fetch)
    return () => {
        // Cleanup (pl. előfizetés leiratkozás)
    };
    }, [függőségek]); // Opcionális tömb
    */
    useEffect(() => {
        console.log('Effect fut: ', Math.random());
    }, []);
    return (
        <div>
            <label htmlFor="search">Search speaker:</label>
            <input id="search" type="text" onChange={e => setSearchText(e.target.value)} />
            <p>
                Searching for <strong>{searchText}</strong>
            </p>

        </div>
    );
}
export default SearchSpeaker;