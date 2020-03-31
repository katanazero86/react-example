import React, { useState } from 'react';

import '../../scss/Profile.scss';

// list 랜더링
function Profile () {

    const [items, setItems] = useState(['a', 'b', 'c', 'd', 'e', 'f', 'g']);

    const itemList = items.map((item, index) => {
        return (
            <p key={index} className="item">
                {item}
            </p>
        )
    });

    return (
        <div>
            {itemList}
        </div>
    )
}



export default Profile