import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(100);
  }, [counter]);

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount + 11111)}>+</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount - 11111)}>-</button>
    </div>
  );
}

export default App;
