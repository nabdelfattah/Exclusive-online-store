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
          color: product.color,
          count: count + 1,
          id: product.id,
          img: product.img,
          name: product.name,
          price: product.price,
          size: product.size,
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
          color: product.color,
          count: count - 1,
          id: product.id,
          img: product.img,
          name: product.name,
          price: product.price,
          size: product.size,
          stock: product.stock + (count - 1),
        },
      ];
    });
    setCount((prev) => +prev - 1);
  }

  return (
    <div className="pdtCart">
      <div
        className={`pdtCart_info ${isDeleted ? "pdtcart_info--deleted" : ""}`}
      >
        <img src={product.img} className={`pdtCart_img`} />
        <span>{product.name}</span>
      </div>
      <p>${product.price}</p>
      <div className="pdtCart_counter">
        <p className="counter">{count}</p>
        <img src={up} alt="up arrow" onClick={incrementCounter} />
        <img src={down} alt="down arrow" onClick={decrementCounter} />
      </div>
      <p>${product.price * count}</p>
    </div>
  );
}
