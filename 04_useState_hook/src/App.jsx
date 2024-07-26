import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  let incrementVal = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      alert(`maximun value reached ${counter}`);
    }
  };
  let decrementVal = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert(`minimum value reached ${counter}`);
    }
  };

  return (
    <>
      <h2>😎 Counter</h2>
      <h4>Current value is {counter}</h4>
      <button onClick={incrementVal}>🔼 Increment</button>
      <br />
      <button onClick={decrementVal}>🔽 Decrement</button>
    </>
  );
}

export default App;
