import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const page = (
  <div>
    <h1>Sample React Page</h1>
    <h3>A Random List</h3>
    <ol>
      <li>Dogs</li>
      <li>Cats</li>
      <li>Fish</li>
      <li>Birds</li>
    </ol>
  </div>
)

ReactDOM.render(page, document.getElementById("root"))

