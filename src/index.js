// React antiguo

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// // import PrimeraApp from './PrimeraApp';
// import CounterApp from './CounterApp';


// const divRoot = document.querySelector("#root");

// ReactDOM.render( <CounterApp value ={5}  />, divRoot );

// React 18
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';


const divRoot = document.querySelector("#root");
const root = createRoot( divRoot );

root.render( <CounterApp value ={5}  />);


