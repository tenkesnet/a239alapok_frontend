import React, { useState } from 'react';

function UserCard({ user, isExpanded, onToggle }) {
    return (
        <div className="user-card">
            <div className="card-header">
                <h3>{user.name}</h3>
                <span className="role">{user.role}</span>
                <button onClick={onToggle} className="toggle-btn">
                    {isExpanded ? '− Összecsuk' : '+ Kibont'}
                </button>
            </div>

            {isExpanded && (
                <div className="card-details">
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Regisztráció:</strong> 2025.01.15.</p>
                    <p><strong>Utolsó bejelentkezés:</strong> 2 órája</p>
                </div>
            )}
        </div>
    );
}

export default UserCard;
