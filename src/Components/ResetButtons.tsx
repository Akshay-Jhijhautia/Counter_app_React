import React from "react";
import { BiRefresh, BiReset } from "react-icons/bi";

interface Props {
  resetCounters: () => void;
  resetCart: () => void;
}
const ResetButtons = ({ resetCounters, resetCart }: Props) => {
  return (
    <div>
      <button onClick={resetCounters}>
        <BiRefresh />
      </button>{" "}
      <button onClick={resetCart}>
        <BiReset />
      </button>{" "}
    </div>
  );
};

export default ResetButtons;
