import {useState} from 'react';
import UserCard from './UserCard';

function UserList() {
    const users = [{ id: 1, name: 'Anna' }, { id: 2, name: 'Béla' }];
    const [expandedIds, setExpandedIds] = useState(new Set()); 
    return (
        <div>
            {users.map(user => (
                <UserCard key={user.id} user={user} />  // 2 külön UserCard instance!
            ))}
        </div>
    );
}

export default UserList;