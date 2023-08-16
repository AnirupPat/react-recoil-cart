import React from "react";
import Button from "../button/Button";
import { useRecoilState } from "recoil";
import { cartState } from "../../state/atoms/cartState";
import classes from "./product.module.css";

const Product = ({ product }) => {
  const [cartItems, setCartItems] = useRecoilState(cartState);
  const handleClick = () => {
    setCartItems((prevItems) => [
      ...prevItems,
      { id: product.id, name: product.name, price: product.price },
    ]);
  };
  return (
    <div className={classes.product}>
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price}</p>
      <Button label="Cart" onClick={handleClick} />
    </div>
  );
};

export default Product;
