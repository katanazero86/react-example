## react-example

- react 를 구성해보고, 간단한 사용법을 익히고자 프로젝트 생성
- 툴은 VSCode 사용

### 프로젝트 구성

```
- node.js 가 설치가 되어있어야한다.
npm init

- create-react-app 을 이용하여 초기 시작 프로젝트를 구성 가능
npx create-react-app my-app


CRA를 이용하여도 좋으나, 직접 구성으로 진행하겠습니다.

- react 모듈, react-dom 모듈 설치
npm i -S react react-dom

- babel 모듈 설치(설정은 .babelrc)
npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react

- webpack 모듈 설치(설정은 webpack.config.js)
npm i -D webpack webpack-dev-server webpack-cli html-webpack-plugin

6. 모듈 설치를 완료했으면, 프로젝트 루트 경로에 
- webpack.config.js 생성
- babel 설정은 package.json 에서 진행

https://babeljs.io/docs/en/configuration
https://webpack.js.org/configuration/

7. npm i -D node-sass sass-loader style-loader css-loader
- scss 적용을 위한 모듈 설치

```

```
- react 에 필요한 npm dependencies(이정도만 기억을 해두자!)
react
react-dom
react-redux
redux
redux-saga
babel
webpack
```

- https://velog.io/@katanazero86/React-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B5%AC%EC%84%B1

- https://velog.io/@katanazero86/React-state-props-event-bind


### Redux 

```

1. npm i -S redux react-redux

/store 경로 참조

- action 타입 정의
- action 정의
- initialState 정의
- reduce 정의

-> 이걸 combineReducers 로 결합

/src/index.js

- store 생성
- store provide

```


### redux-saga

```
- 외부 API 에서 데이터를 가져와 표시하는 등 동적인 요소가 포함되거나, 일정시간이 지난 다음 상태를 변경하는 경우 비동기 처리를 적용
-> 이러한 흐름을 리덕스에서 처리해야하는데 어려움이 있어서, redux-thunk / redux-saga 2종류를 많이 사용
-> 이러한 비동기처리는 담당하는 미들웨어

npm i --save redux-saga

- action 타입 정의
- action 정의
- initialState 정의
- reduce 정의

-> 이걸 combineReducers 로 결합

여기까지는 동일한데.. 이제 저걸 사가에서 쓰고싶다?

- saga 작성 -> /store/saga/index.js 참조

그리고 /src/index.js 에서
saga 미들웨어를 연동해주는 설정을 한다.
1. createSagaMiddleware
2. 사용할 saga 모듈 import
3. applyMiddleware 
4. .run()  -> import 한 saga 모듈을 백그라운드에서 동작하게 하자.

- 혹시 regeneratorRuntime is not defined redux saga 에러가 발생한다면, polyfill 문제이니 
npm i -S @babel/polyfill  
설치 후, 적용해주자.

```


###  모범 사례 따라해보기

```

- UI 컴포넌트 구현에서는 어떤 구조가 최적일까?

- Presentaion Component : 보여주는 부분만 책임을 가짐
- Container Component : 로직 부분에 대한 책임을 가짐

 * SFC? Stateless Functional Component : 내부적으로 상태를 가지고 있지 않은 컴포넌트

/src/components/userCard
UserCard.js -> Presentation Component
UserCardWrapper.js -> Container Component

/src/components/switch
SwitchContainer.js -> Container Component
FlagSwitch.js -> Presentation Component
ViewFlagValue.js -> Presentation Component

-> 컨테이너가 프레젠테이션을 감싸는 형태

```

### jest 를 사용하여 컴포넌트 테스트 해보기

```
npm i -D jest
npm i -D babel-jest

- react 에서 TestUtils 제공 (import ReactTestUtils from 'react-dom/test-utils';)

xxx.test.js 파일을 작성


```


### react 프로젝트에 storybook 적용 해보기

```

npm install @storybook/react --save-dev

add scripts

"scripts": {
  "storybook": "start-storybook"
}

create file

.storybook/main.js
/src/components/story/index.stories.js

npm run storybook

- 몇가지 addon 모듈을 추가
npm i -D @storybook/addon-docs
npm i -D @storybook/addon-knobs

```