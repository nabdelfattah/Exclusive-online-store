import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { LoadingProduct, ProductCard } from "./";

export function ProductList({ category, onProductCountChange }) {
  // Get data
  const data = useFetch(`https://dummyjson.com/products/category/${category}`);

  // Notify the parent about the number of products
  useEffect(() => {
    if (data && data.products.length) {
      onProductCountChange(data.products.length);
    }
  }, [data, onProductCountChange]);

  // Handle Loading State
  let content = Array(5)
    .fill(0)
    .map((item, index) => <LoadingProduct key={index} />);
  // Create ProductCarf for each product
  if (data) {
    if (data.products.length) {
      content = data.products.map((obj) => {
        return (
          <li key={obj.id}>
            <ProductCard data={obj} />
          </li>
        );
      });
    }
  }

  return <ul className="pdtList">{content}</ul>;
}
