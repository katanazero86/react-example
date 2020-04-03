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


- action 정의
/src/actions

```