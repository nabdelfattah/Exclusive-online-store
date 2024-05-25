import { useState } from "react";
import up from "../assets/icons/cartCounter-up.svg";
import down from "../assets/icons/cartCounter-down.svg";

export function ProductInCart({ product, updateCart }) {
  const [count, setCount] = useState(product.count);
  const [isDeleted, setIsDeleted] = useState(false);

  function incrementCounter() {
    if (count == product.stock) return;
    setIsDeleted(false);
    updateCart((prev) => {
      const newList = prev.filter((obj) => obj.id !== product.id);
      return [
        ...newList,
        {
          count: count + 1,
          id: product.id,
          thumbnail: product.thumbnail,
          title: product.title,
          price: product.price,
          stock: product.stock - (count + 1),
        },
      ];
    });
    setCount((prev) => {
      return +prev + 1;
    });
  }
  function decrementCounter() {
    if (count == 0) return;
    if (count - 1 == 0) {
      setIsDeleted(true);
      updateCart((prevCart) => prevCart.filter((obj) => obj.id !== product.id));
      setCount((prev) => prev - 1);
      return;
    }
    updateCart((prev) => {
      const newList = prev.filter((obj) => obj.id !== product.id);
      return [
        ...newList,
        {
          count: count - 1,
          id: product.id,
          thumbnail: product.thumbnail,
          title: product.title,
          price: product.price,
          size: product.size,
          stock: product.stock + (count - 1),
        },
      ];
    });
    setCount((prev) => +prev - 1);
  }

  return (
    <li className="pdtCart">
      <div
        className={`pdtCart_info ${isDeleted ? "pdtcart_info--deleted" : ""}`}
      >
        <img
          src={product.thumbnail}
          alt={`an image of a ${product.title}`}
          className={`pdtCart_img`}
        />
        <span>{product.title}</span>
      </div>
      <p className="subTotal">&nbsp; ${product.price}</p>
      <div className="pdtCart_counter">
        <p className="counter">{count}</p>
        <img src={up} alt="up arrow" onClick={incrementCounter} />
        <img src={down} alt="down arrow" onClick={decrementCounter} />
      </div>
      <p className="total">
        &nbsp; $
        {Math.round((product.price * count + Number.EPSILON) * 100) / 100}
      </p>
    </li>
  );
}
