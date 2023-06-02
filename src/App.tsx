import { useState } from "react";
import Counter from "./Components/Counter";
import CartDetails from "./Components/CartDetails";
import ResetButtons from "./Components/ResetButtons";
import "./App.css";

function App() {
  const [initialCounter, setCounter] = useState([
    { id: 0, counter: 0 },
    { id: 1, counter: 0 },
    { id: 2, counter: 0 },
    { id: 3, counter: 0 },
  ]);

  const handleIncrement = (id: number) => {
    setCounter((initial) =>
      initial.map((item) =>
        item.id === id ? { ...item, counter: item.counter + 1 } : item
      )
    );
  };

  const handleDecrement = (id: number) => {
    setCounter((initial) =>
      initial.map((item) =>
        item.id === id && item.counter !== 0
          ? { ...item, counter: item.counter - 1 }
          : item
      )
    );
  };

  const handleDelete = (id: number) => {
    setCounter((initial) => initial.filter((item) => item.id !== id));
  };

  const resetCounter = () => {
    setCounter((initial) =>
      initial.map((items) => {
        return { ...items, counter: 0 };
      })
    );
  };

  const initialCounterValue = [
    { id: 0, counter: 0 },
    { id: 1, counter: 0 },
    { id: 2, counter: 0 },
    { id: 3, counter: 0 },
  ];

  const resetEntireCart = () => {
    initialCounter.length === 0 && setCounter(initialCounterValue);
  };

  let cartLength = initialCounter.filter((item) => item.counter > 0);

  return (
    <div className="container">
      <CartDetails countersInCart={cartLength.length} />
      <ResetButtons resetCounters={resetCounter} resetCart={resetEntireCart} />
      <div className="items">
        {initialCounter.map((item, index) => (
          <Counter
            value={item.id}
            initialValue={item}
            increment={handleIncrement}
            decrement={handleDecrement}
            deleteCounter={handleDelete}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
