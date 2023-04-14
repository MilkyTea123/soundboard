import * as React from 'react';
import  { createRoot }  from 'react-dom/client';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from '../src/reportWebVitals';

// const App = () => {
//   return (
//     <div>
//       <h1>Hello, React!</h1>
//     </div>
//   );
// };

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />)
// ReactDOM.render(<App />, domNode)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
