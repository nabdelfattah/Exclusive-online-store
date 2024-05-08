import { useContext } from "react";
import {
  Advertisement,
  Features,
  SectionBestSelling,
  SectionCategories,
  SectionExplore,
  SectionHero,
  SectionNew,
  SectionSale,
} from "../components";
import { ProductContext } from "../ProductContext";

export function HomePage() {
  let { pdtsList } = useContext(ProductContext);

  if (!pdtsList.length) {
    pdtsList = JSON.parse(localStorage.getItem("pdtsList"));
    if (!pdtsList || !pdtsList.length) {
      pdtsList = Array(20)
        .fill()
        .map(() => ({
          id: 1,
          title: "Product",
          price: 0.0,
          description: "A product",
          category: "not organized",
          image: "https://placehold.co/600x400/png",
          rating: {
            rate: 0,
            count: 0,
          },
        }));
    }
  }

  console.log("rerender home page with this product list:", pdtsList);
  return (
    <>
      <SectionHero />
      <SectionSale products={pdtsList.splice(0, 6)} />
      <SectionCategories />
      <SectionBestSelling products={pdtsList.splice(0, 4)} />
      <Advertisement />
      <SectionExplore products={pdtsList.splice(0, 10)} />
      <SectionNew />
      <Features />
    </>
  );
}
