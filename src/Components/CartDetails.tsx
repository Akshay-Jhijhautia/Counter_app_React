import React from "react";
import { BsFillCartFill } from "react-icons/bs";

interface Props {
  countersInCart: number;
}

const CartDetails = ({ countersInCart }: Props) => {
  return (
    <div>
      <BsFillCartFill />
      {countersInCart}
    </div>
  );
};

export default CartDetails;
