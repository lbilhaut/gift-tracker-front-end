import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Style/common.css'
import Main from './Components/Main'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
