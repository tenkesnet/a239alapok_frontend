import React, { useState } from 'react';

function UserCard({ user }) {
    const [isExpanded, setIsExpanded] = useState(false);  // Minden példánynak SAJÁT state!

    return (
        <div>
            <h3>{user.name}</h3>
            <button onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? 'Összecsuk' : 'Kibont'}
            </button>
            {isExpanded && <p>Bővebben: {user.details}</p>}            
        </div>
    );
}

export default UserCard;
