import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

// test 대상 컴포넌트
import Button from '../src/components/test/Button';

test('isElement', () => {
    const props = {
        label : 'foo',
        onClickHandler: () => {}
    };

    const element = <Button {...props} />

    // react 컴포넌트인지 검증
    expect(ReactTestUtils.isElement(element)).toBe(true);

});

test('onClick', () => {
    const props = {
        label : 'foo',
        onClickHandler: jest.fn() // jest 목킹함수
    };

    // 함수형은 한번 감싸줘야함.
    const instance = ReactTestUtils.renderIntoDocument(<div><Button {...props}/></div>); // DOM에 랜더링하여 인스턴스를 준비
    const node = ReactDOM.findDOMNode(instance); // 인스턴스에서 DOM 노드 가져오기

    ReactTestUtils.Simulate.click(node.firstChild); // click 이벤트를 발생시킴 (button 노드에 대한 클릭 이벤트이기 때문에, 감싸진 상태이니.. 첫번째 자식 노드를 꺼내야함)
    expect(props.onClickHandler).toBeCalled();

});
