import { useEffect, useState } from "react";
import { ProductCard } from "../components/Product";
import { useFetch } from "../useFetch";
const validCategories = [
  "smartphones",
  "laptops",
  "fragrances",
  "groceries",
  "home-decoration",
  "furniture",
  "mens-watches",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting",
];
export function ProductsPage() {
  const pdtsList = useFetch("https://dummyjson.com/products?limit=0");
  let filteredPdts;
  if (pdtsList) {
    filteredPdts = pdtsList.products.filter((obj) =>
      validCategories.includes(obj.category)
    );
  }

  const [targetIndex, setTargetIndex] = useState(10);

  function showMoreHandler() {
    if (pdtsList.products.length >= targetIndex + 10) {
      setTargetIndex((previousVal) => previousVal + 10);
    } else {
      setTargetIndex(pdtsList.products.length);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top left corner of the page
  }, []);

  return (
    <>
      {pdtsList ? (
        <div className="products-wrapper container">
          <ul className="pdtList">
            {filteredPdts.slice(0, targetIndex).map((obj) => {
              return (
                <li key={obj.id}>
                  <ProductCard data={obj} />
                </li>
              );
            })}
          </ul>
          {targetIndex < filteredPdts.length ? (
            <button className="btn-primary" onClick={showMoreHandler}>
              Show More
            </button>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
