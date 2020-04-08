import React from 'react';

function FlagSwitch({changeFlag}) {

    return(
        <button onClick={changeFlag}>
            Switch flag(전달받은 함수실행만 담당)
        </button>
    )

}

export default FlagSwitch