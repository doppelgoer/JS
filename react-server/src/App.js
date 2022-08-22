import './App.css';
import Test from './Components/Test';
import React, { useEffect, useState } from 'react';
function App() {
  const [test, setTest] = useState(true);
  function test111() {
    setTest(!test);
  }
  return (
    <div className='App'>
      <div>{test && <Test />}</div>
      <button onClick={test111}>생겨라</button>
    </div>
  );
}

export default App;
