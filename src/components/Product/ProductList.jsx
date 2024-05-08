import { ProductCard } from "./";

export function ProductList({ products }) {
  return (
    <ul className="pdtList">
      {products.map((obj) => {
        return (
          <li key={obj.id}>
            <ProductCard data={obj} />
          </li>
        );
      })}
    </ul>
  );
}
