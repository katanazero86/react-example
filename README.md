## react-example

- react 를 구성해보고, 간단한 사용법을 익히고자 프로젝트 생성
- 툴은 VSCode 사용


### 프로젝트 구성

```
- node.js 가 설치가 되어있어야한다.
1. npm init

- create-react-app 을 이용하여 초기 시작 프로젝트를 구성 가능
2. npx create-react-app my-app


저는 공부를 하는 목적이기 때문에, 직접 구성으로 진행하겠습니다.

- react 모듈, react-dom 모듈 설치
3. npm i -S react react-dom

- babel 모듈 설치(설정은 .babelrc)
4. npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react

- webpack 모듈 설치(설정은 webpack.config.js)
5. npm i -D webpack webpack-dev-server webpack-cli html-webpack-plugin

6. 모듈 설치를 완료했으면, 프로젝트 루트 경로에 
- webpack.config.js 생성
- babel 설정은 package.json 에서 진행

https://babeljs.io/docs/en/configuration
https://webpack.js.org/configuration/

7. npm i -D node-sass sass-loader style-loader css-loader
- scss 적용을 위한 모듈 설치



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