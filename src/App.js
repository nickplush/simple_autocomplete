import React from "react";
import './App.css';
import Autocomplete from "./components/ Autocomplete";

function App() {
  const generateArray = (count) => {
    const newArray = [0]
    for(let i = 0; i<count; i++){
      newArray.push(i)
    }
   return newArray
  }
  return <Autocomplete arr={generateArray(10000)}/>
}

export default App;
