import React from 'react';

function ViewFlagValue(props) {

    return(
        <p>
            {props.flag ? '유효' : '무효'}
            (전달 받은 값만 표시)
        </p>
    )

}

export default ViewFlagValue