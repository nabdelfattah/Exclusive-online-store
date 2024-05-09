import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../ProductContext";
import { ProductList } from "../components/Product";

export function ProductsPage() {
  const { pdtsList } = useContext(ProductContext);
  const [targetIndex, setTargetIndex] = useState(10);
  function showMoreHandler() {
    if (pdtsList.length >= targetIndex + 10) {
      setTargetIndex((previousVal) => previousVal + 10);
    } else {
      setTargetIndex(pdtsList.length);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top left corner of the page
  }, []);
  return (
    <div className="products-wrapper container">
      <ProductList products={pdtsList.slice(0, targetIndex)} />
      {targetIndex < pdtsList.length ? (
        <button className="btn-primary" onClick={showMoreHandler}>
          Show More
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
