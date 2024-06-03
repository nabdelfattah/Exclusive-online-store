import { useEffect, useState } from "react";
import { ProductCard } from "../components/Product";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Loading } from "../components";
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
export function ProductsPage({ url }) {
  const { t } = useTranslation();
  const params = useParams();
  if (url == "") {
    url = `https://dummyjson.com/products/search?q=${params.q}`;
  }

  const pdtsList = useFetch(url);
  let filteredPdts = [];
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
            {filteredPdts.length ? (
              filteredPdts.slice(0, targetIndex).map((obj) => {
                return (
                  <li key={obj.id}>
                    <ProductCard data={obj} />
                  </li>
                );
              })
            ) : (
              <p>{t("No Products Found")}</p>
            )}
          </ul>
          {targetIndex < filteredPdts.length ? (
            <button
              className="btn-primary"
              name="show-more-button"
              onClick={showMoreHandler}
            >
              {t("Show More")}
            </button>
          ) : (
            ""
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
