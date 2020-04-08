import React, {useState} from 'react';
import FlagSwitch from './FlagSwitch';
import ViewFlagValue from './ViewFlagValue';


function SwitchContainer() {

    const [flag, setFlag] = useState(false);

    const changeFlag = () => {
        setFlag(!flag);
    }

    return (
        <div>
            <FlagSwitch changeFlag={changeFlag}/>
            <ViewFlagValue flag={flag}/>
        </div>
    )

}

export default SwitchContainer