import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNumberAction } from '../store/numberModule/actions.js';

import { reqeustFetch } from '../store/saga/request/actions.js';

function StoreTest() {

    const dispatch = useDispatch();
    const number = useSelector((store) => store.number.number);

    const dispatchAddNumber = () => {
        console.log('dispatch..');
        dispatch(addNumberAction());
    };

    const dispatchRequestFetch = () => {
        console.log('dispatch..');
        dispatch(reqeustFetch());
    };

    return (
        <div>
            {number} <br />
            <button onClick={dispatchAddNumber}>dispatch(add number)</button>
            <hr/>
            <button onClick={dispatchRequestFetch}>reqeust fetch</button>
        </div>
    )

}


export default StoreTest