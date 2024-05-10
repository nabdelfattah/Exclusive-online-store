import { useFetch } from "../../useFetch";
import { LoadingProduct, ProductCard } from "./";

export function ProductList({ category }) {
  const data = useFetch(`https://dummyjson.com/products/category/${category}`);

  let content;

  if (data) {
    content = data.products.slice(0, 4).map((obj) => {
      return (
        <li key={obj.id}>
          <ProductCard data={obj} />
        </li>
      );
    });
  } else {
    Array(4)
      .fill(0)
      .map((item, index) => <LoadingProduct key={index} />);
  }

  return <ul className="pdtList">{content}</ul>;
}
