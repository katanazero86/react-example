import React, { useState } from 'react';

import '../scss/App.scss';
import Profile from './profile/Profile';
import ButtonBasic from './atoms/ButtonBasic';
import StoreTest from './StoreTest';

// 함수형 컴포넌트
// props 매개변수를 가진다 (컴포넌트 속성)
// props 는 어디까지나 전달받은 값
function App({name, age}) {

    // state
    // 컴포넌트가 가지고 있는 상태
    const [number, setNumber] = useState(1);

    return (
        <div className="hello-wrap">
            <p className="hello-wrap-content">Hello React World!!!!</p>
            <p>{`${name}은 ${age}살`}</p>
            <p>{number}</p>
            <ButtonBasic text="add"/>
            <ButtonBasic text="add2" color="primary" size="small"/>
            <ButtonBasic text="add3" color="primary" size="large"/>
            <ButtonBasic onClick={() => setNumber(number + 1)} text="숫자 증가" color="primary" size="large" fullWidth={true}/>
            <hr/>
            <Profile/>
            <hr/>
            <StoreTest/>
        </div>
    );
    
}


export default App