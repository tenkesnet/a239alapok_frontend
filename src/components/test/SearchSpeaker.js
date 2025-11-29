import React, { useState, useEffect, useRef } from "react";

const SearchSpeaker = () => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [sum, setSum] = useState(0);
    const inputRef = useRef(null);

    useEffect(() => {
        const newSum = (parseFloat(value1) || 0) + (parseFloat(value2) || 0);
        setSum(newSum);
    }, [value1, value2]); // ✅ State változáskor frissül
    useEffect(() => {
        inputRef.current.focus();
        inputRef.current.select();
    }, []); 

    return (
        <div>
            <label htmlFor="value1">szam1:</label>
            <input
                ref={inputRef}
                id="value1" 
                value={value1}
                onChange={e => setValue1(e.target.value)} 
            />
            
            <label htmlFor="value2">szam2:</label>
            <input 
                id="value2"                 
                value={value2}
                onChange={e => setValue2(e.target.value)} 
            />
            
            <p>
                Összeg: <strong>{sum.toFixed(2)}</strong>
            </p>
        </div>
    );
};
export default SearchSpeaker;