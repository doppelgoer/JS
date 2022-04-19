import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios, { AxiosResponse } from 'axios';

function App() {
  async function test() {
    let data: AxiosResponse<any>;
    try {
      data = await axios({
        method: 'GET',
        url: 'http://localhost:80/dbRouter/getTodayUser',
      });
      console.log(123);
    } catch {}
  }
  return (
    <div className='App'>
      <button
        onClick={test}
        onKeyDown={function (e) {
          if (e.key === 'Enter') {
            test();
          }
        }}>
        fdsfds
      </button>
    </div>
  );
}

export default App;
