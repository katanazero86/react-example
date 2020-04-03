import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNumberAction } from '../store/numberModule/index.js';

function StoreTest() {

    const dispatch = useDispatch();
    const number = useSelector((store) => store.number.number);

    const dispatchAddNumber = () => {
        console.log('dispatch..');
        dispatch(addNumberAction());
    }

    return (
        <div>
            {number} <br />
            <button onClick={dispatchAddNumber}>dispatch(add number)</button>
        </div>
    )

}


export default StoreTest