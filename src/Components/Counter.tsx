import React from "react";
import { AiOutlinePlus, AiFillDelete } from "react-icons/ai";

interface Props {
  value: number;
  initialValue: { id: number; counter: number };
  increment: (value: number) => void;
  decrement: (value: number) => void;
  deleteCounter: (value: number) => void;
}

const Counter = ({
  value,
  initialValue,
  increment,
  decrement,
  deleteCounter,
}: Props) => {
  return (
    <div>
      <div className="zero">
        {initialValue.counter === 0 ? "Zero" : initialValue.counter}
      </div>
      <button onClick={() => increment(value)}>
        <AiOutlinePlus />
      </button>
      <button onClick={() => decrement(value)}>-</button>
      <button onClick={() => deleteCounter(value)}>
        <AiFillDelete />
      </button>
    </div>
  );
};

export default Counter;
