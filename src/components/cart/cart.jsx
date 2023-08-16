import classes from "./cart.module.css";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import Product from "../product/product";
import { cartState } from "../../state/atoms/cartState";
import { useRecoilValue } from "recoil";
import { totalCartItems } from "../../state/selectors/totalCartItems";

const Cart = () => {
  const cartItemCount = useRecoilValue(totalCartItems);
  const [cartItems, setCartItems] = useRecoilState(cartState);
  console.log("cart cart");
  console.log(cartItems);
  return (
    <div>
      <div>Cart Items: {cartItemCount}</div>
      <div className={classes.cart}>
        {cartItems.map((cartItem) => {
          return <Product product={cartItem} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
