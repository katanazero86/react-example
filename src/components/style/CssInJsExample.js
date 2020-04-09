import React from 'react';

// css-in-js
// js 안에 css 를 삽입하고 효율적으로 이를 객체로 다루는 접근법
// 가상클래스 및 미디어쿼리는 지원하지 않는것이 단점

const style = {
    color : 'skyblue',
    fontSize : '24px',
    textAlign : 'center'
}

function CssInJsExample(props) {

    return (
        <div style={{border : '1px solid red', padding : '5px'}}>
            <p style={style}>
                css-in-js
            </p>
        </div>
    )


}


export default CssInJsExample