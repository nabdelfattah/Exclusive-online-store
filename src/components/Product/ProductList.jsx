import { useFetch } from "../../useFetch";
import { LoadingProduct, ProductCard } from "./";

export function ProductList({ category }) {
  const data = useFetch(`https://dummyjson.com/products/category/${category}`);
  let content = Array(5)
    .fill(0)
    .map((item, index) => <LoadingProduct key={index} />);

  if (data) {
    if (data.products.length) {
      content = data.products.slice(0, 5).map((obj) => {
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
