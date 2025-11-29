import React from 'react';
import UserCard from './UserCard';
import { useState } from 'react';

// SZÜLŐ: UserList kezeli a KÖZÖS expanded state-et
function UserList() {
    // Megosztott állapot: Set-ben tároljuk a kibontott user ID-kat
    // Array: [1,3,5,3,4,5,1]  Set: {1,3,4,5} objektum: {name: 'Anna', age: 30} 
    const [expandedIds, setExpandedIds] = useState(new Set());

    // Dummy user adatok
    const users = [
        { id: 1, name: 'Anna Kovács', email: 'anna@email.com', role: 'Developer' },
        { id: 2, name: 'Béla Nagy', email: 'bela@email.com', role: 'Designer' },
        { id: 3, name: 'Csaba Kiss', email: 'csaba@email.com', role: 'Manager' }
    ];

    // Toggle függvény: hozzáad/kivesz ID-t a Set-ből
    const toggleExpanded = (userId) => {
        setExpandedIds(prev => {            
            const newSet = new Set(prev);
            if (newSet.has(userId)) {
                newSet.delete(userId);
            } else {
                newSet.add(userId);
            }
            return newSet;
        });
    };

    return (
        <div className="user-list">
            <h2>Felhasználók ({expandedIds.size}/{users.length} kibontva)</h2>
            {users.map(user => (
                <UserCard
                    key={user.id}  // Kötelező key listában!
                    user={user}
                    isExpanded={expandedIds.has(user.id)}
                    onToggle={() => toggleExpanded(user.id)}
                />
            ))}
        </div>
    );
}

export default UserList;