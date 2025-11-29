import React, { use, useState, useEffect } from "react";
const SearchSpeaker = ({name}) => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    let sum = parseFloat(value1) + parseFloat(value2);
    useEffect(() => {
        //sum = parseFloat(value1) + parseFloat(value2);
    }, []);
    return (
        <div>
            <label htmlFor="search">szam1:</label>
            <input id="value1" type="text" onChange={e => setValue1(e.target.value)} />
            <label htmlFor="search">szam2:</label>
            <input id="value2" type="text" onChange={e => setValue2(e.target.value)} />
            
            <p>
                Összeg: <strong>{sum}</strong>
            </p>

        </div>
    );
}
export default SearchSpeaker;