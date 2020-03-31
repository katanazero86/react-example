import React, { useState } from 'react';
import '../scss/App.scss';

// 함수형 컴포넌트
// props 매개변수를 가진다 (컴포넌트 속성)
export default function App(props) {

    const { name, age } = { ...props };

    return (
        <div className="hello-wrap">
            <p className="hello-wrap-content">Hello React World!!!!</p>
            <p>{`${name}은 ${age}살`}</p>
        </div>
    );
    
}