
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementByOne = () => {
    setCounter((prev) => prev + 1);
  };

  const decrementByOne = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <section className="counter">
      <h2>Contatore</h2>
      <p>Valore: {counter}</p>

      <div className="counter_buttons">
        <button onClick={incrementByOne}>+</button>
        <button onClick={decrementByOne}>-</button>
      </div>
    </section>
  );
}
