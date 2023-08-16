import Product from "../product/product";
import classes from "./home.module.css";
import { products } from "../../utils/products";
import { Link } from "react-router-dom";

const Home = () => {
  // console.log(cartItems);
  // console.log(products);
  return (
    <div className={classes.home}>
      {/* <Link to="/cart">Go to Cart</Link> */}
      {products.map((product) => {
        return <Product product={product} />;
      })}
    </div>
  );
};

export default Home;
