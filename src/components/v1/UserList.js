import UserCard from './UserCard';

function UserList() {
    const users = [
        { id: 1, name: 'Anna', details: 'Anna részletes adatai' },
        { id: 2, name: 'Béla', details: 'Béla részletes adatai',eyeColor: 'blue' },
        { id: 3, name: 'Cecília', details: 'Cecília részletes adatai' },
    ];    
    return (
        <div>
            {users.map(user => (
                <UserCard key={user.id} user={user} />  // 2 külön UserCard instance!
            ))}



            {/* Komment
            <UserCard key={users[0].id} user={users[0]} />
            <UserCard key={users[1].id} user={users[1]} /> 
            <UserCard key={users[2].id} user={users[2]} />           
            */}
            
        </div>
    );
}

export default UserList;