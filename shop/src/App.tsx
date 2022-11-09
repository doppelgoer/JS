import './App.css';
import axios, { AxiosResponse } from 'axios';

function App() {
  async function test() {
    let data: AxiosResponse<any>;
    try {
      data = await axios({
        method: 'GET',
        url: 'http://localhost:80/test',
      });
      console.log(123);
    } catch {}
  }
  return (
    <div className='App'>
      <button onClick={test}>fdsddddsfds</button>
    </div>
  );
}

export default App;
