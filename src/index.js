import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';




/* Using React Normal JSX Templates */
ReactDOM.render(
  // Multiple Elements using React.Fragment Sugar Template form.
  <>
    <App/>
  </>,
  document.getElementById('root')
);




/* Using React Normal JSX Templates */
// ReactDOM.render(
//   // Multiple Element using React.Fragment Sugar Template form.
//   <>
//   <h1>Hi {fnam} {lname} Welcome to React App Using React Normal JSX Template.</h1>  {/* Using JSX Expression */}
//   <h3>Mathematics : {5*9} </h3>
//   <div>
//     <p>You are now using React version &gt;16.0.0. So you just need to enclose all elements in JSX within Square Brackets & differntiated with comma</p>
//   </div>
//   </>,
//   document.getElementById('root')
// );




/* Using React Normal JSX Templates */
// ReactDOM.render(
//   // Multiple Element using Array.
//   [
//   <h1>Hi Sunny Welcome to React App Using React Normal JSX Template.</h1>,
//   <div>
//     <p>You are now using React version &gt;16.0.0. So you just need to enclose all elements in JSX within Square Brackets & differntiated with comma</p>
//   </div>
//   ],
//   document.getElementById('root')
// );




/* Using React Normal Extended Templates */
// ReactDOM.render(
//   React.createElement('h1', null, 'Welcome S H to React App Using React Extended Template.'),
//   document.getElementById('root')
// );




/* Using Normal Javascripts(>ES6) only */
// const h1=document.createElement('h1');
// h1.innerHTML='Welcome Sun H to React App Using Normal Javascripts(>ES6) only.';
// document.getElementById('root').appendChild(h1);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
