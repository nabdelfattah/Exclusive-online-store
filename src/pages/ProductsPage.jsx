import { useEffect, useState } from "react";
import { ProductList } from "../components/Product";
import { useFetch } from "../useFetch";

export function ProductsPage() {
  const pdtsList = useFetch("https://dummyjson.com/products");
  console.log(pdtsList);
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
      {pdtsList.products ? (
        <div className="products-wrapper container">
          <ProductList products={pdtsList.products.slice(0, targetIndex)} />
          {targetIndex < pdtsList.products.length ? (
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
