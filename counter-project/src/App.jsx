import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  // let counter = 12;

  const incrementValue = () => {
    // console.log("Incrementing Value" , Math.random());
    // counter = counter + 1;
    setCounter(counter + 1);
    if (counter === 100) {
      alert("Counter cannot be greater than 100");
      return;
    }
  };

  const decrementValue = () => {
    if (counter === 0) {
      alert("Counter cannot be less than 0");
      return;
    }
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={incrementValue}>Increment</button>
      <br />
      <br />
      <button onClick={decrementValue}>Decrement</button>
    </>
  );
}

export default App;
