import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
function App() {
  function reqAxios() {
    try {
      axios({
        //token
        method: "get",
        url: `http://localhost:80`,
        data: {},
      });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="App">
      <button onClick={reqAxios}>haha</button>
    </div>
  );
}

export default App;
