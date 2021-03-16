import React, { Component } from 'react'; // JSX를 사용하기 위해 반드시 import 해야함
//import './App.css'
import MyName from './MyName';
import Counter from './Counter';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';

//const App = ()=>{}
// function App() {
//   const name = 'react';
//   const value = 1;
//   const style = {
//     backgroundColor: 'black',
//     padding: '15px',
//     color: 'pink',
//     fontSize: '20px'
//   }
//   return (
//     // 두개 이상의 엘리먼트 감싸는 방법1
//     // <div>
//     //   <div>
//     //     Hello
//     //   </div>
//     //   <div>
//     //     Bye
//     //   </div>
//     // </div>


//     // 두개 이상의 엘리먼트 감싸는 방법2
//     // <Flagment>
//     //   <div>
//     //     Hello
//     //   </div>
//     //   <div>
//     //     Bye
//     //   </div>
//     // </Flagment>


//     // JSX 안에 자바스크립트 값 사용하기
//     // <div>
//     //   hello {name}!
//     // </div>


//     // 삼항 연산자
//     // <div>
//     //   {
//     //     1 + 1 === 2 
//     //       ? (<div>맞아요!</div>)
//     //       : (<div>틀려요!</div>)
//     //   }
//     // </div>


//     // AND 연산자
//     // <div>
//     //   {
//     //     1 + 1 === 2 && (<div>맞아요!</div>)
//     //   }
//     // </div>


//     // IIFE
//     // <div className="App">
//     //   {
//     //     (function(){
//     //       if (value === 1) return (<div>1</div>)
//     //       if (value === 2) return (<div>2</div>)
//     //       if (value === 3) return (<div>3</div>)
//     //     })()
//     //   }
//     // </div>


//     // 스타일 적용
//     // <div style={style}>
//     //   hi there
//     // </div>


//     // css 적용
//     // <div className="App">
//     //   react
//     // </div>


//     // 주석
//     // <div>
//     //   {/* 주석은 이렇게 */}
//     //   <h1
//     //     //태그 사이에
//     //   >리액트</h1>
//     // </div>


//     // props
//     // <MyName name="리액트"/>

//     // props를 빼먹거나 일부러 비우는 경우
//     //  <MyName />

//     <Counter />

//   );
// }

class App extends Component {
  render () {
    return (
      <div>
        <ValidationSample />
        <hr/>
        <ScrollBox ref={(ref) => this.scrollBox=ref} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
        <button onClick={() => this.scrollBox.scrollToTop()}>
          맨 위로
        </button>
        <hr/>
        <IterationSample />
      </div>
    )
  }
}

export default App;
