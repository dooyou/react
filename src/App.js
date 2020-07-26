import React from 'react';
import MyComponent from './MyComponent';


const App = () => {
  return <MyComponent name="강아지" favoriteNumber={3}>고양이</MyComponent>;
};

export default App;














//import logo from './logo.svg';
//import './App.css';

// function App() {
//   const element = '강아지';
//   const element2 = '고양이';
//   const num = 0;
//   const name = undefined;
//   const style = {
//     backgroundColor : '#dddddd',
//     padding : 20,
//     fontWeight : 'bold'
//   };
//   return (
//     <>
//       {element === '강아지' ? (<h1>강아지 입니다.</h1>) : null}
//       {element2 === '강아지' && <h1>강아지 입니다.</h1>}
//       {num && <h1>숫자</h1>}
//       {name || ' 값이 undefined입니다.'}
//       <h1 style={style}>{element}</h1>
//     </>
//   );
// }
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
