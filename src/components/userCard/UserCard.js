import React from 'react';

// SFC
function UserCard(props) {

    const {name, age, onClickHandler} = props

    return (
        <div>
            <p>
                {name}
            </p>
            <p>
                {age}
            </p>
            <button onClick={onClickHandler}>
                Click me!
            </button>
        </div>
    )
        
}

export default UserCard