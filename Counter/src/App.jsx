import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(0);
    }
  };

  return (
    <div>
      <h2>Counter = {counter}</h2>
      <button onClick={increase}>Increase</button>
      <br />
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default App;
