import React, { useState } from 'react';
import './index.css';

export const App = () => {

  const [counter, setCounter] = useState(0)

  return (
    <div className="counter-app">
      <h1>
        Contador actual { counter }
      </h1>
      <button onClick={() => setCounter(counter+1)}>
        +1
      </button>
    </div>
  )
}


export default App;
