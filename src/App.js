import React, { useState } from "react";
import "./App.css"

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="card">
      <h1>Counter App</h1>
          <div className="second">
            <div><h2>{count}</h2></div>
            <div className="button-case">
              <button className="btn btn-red" onClick={() => setCount(count + 1)}>Increment</button>
              <button className="btn btn-green" onClick={() => setCount(count - 1)}>Decrement</button>
              <button className="btn-grey" onClick={() => setCount(0)}>Reset</button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
