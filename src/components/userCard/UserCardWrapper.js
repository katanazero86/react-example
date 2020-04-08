import React from 'react';
import UserCard from './UserCard';

function UserCardWrapper() {

    const onClick = () => {
        alert('이얏호!');
    }

    return (
        <div>
            <UserCard name='zero86' age='10' onClickHandler={onClick}/>
        </div>
    )
}

export default UserCardWrapper