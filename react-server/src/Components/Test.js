import axiosFunc from '../middleware/axios';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
export default function Test() {
  const [test1, setTest1] = useState(0);
  function plus1() {
    setTest1(test1 + 1);
  }
  // useEffect(() => {
  //   return () => {
  //     console.log(44444, test1);
  //   };
  // }, []);
  // useEffect(() => {
  //   return () => {
  //     console.log(4444, test1);
  //   };
  // }, [test1]);
  // useEffect(() => {
  //   console.log(5555, test1);
  // }, [test1]);
  // useEffect(() => {
  //   let dataFromServer = axios({
  //     //token
  //     method: 'GET',
  //     url: `http://localhost/test`,
  //     params: {},
  //   });
  //   //   // setImmediate(dataFromServer)
  //   // let dataFromServer = axiosFunc('get', 'test', {});
  //   setTxt(dataFromServer);
  // }, []);
  return (
    <div>
      <div>{test1}</div>
      <button onClick={plus1}>plus</button>
    </div>
  );
}
