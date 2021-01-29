import React, {useState} from "react";
import './App.css';
import Autocomplete from "./components/ Autocomplete";
import {generateArray} from "./utils";

function App() {
    const [resp, setResp] = useState()
    const valueSelection = (value) => {
        setResp(value)
    }

    return (
        <div className="App">
            <Autocomplete arr={generateArray(10000)} valueSelection={valueSelection}/>
            <div data-testid="content" className='content'>
                <h1>{resp}</h1>
            </div>
        </div>
    )
}

export default App;
