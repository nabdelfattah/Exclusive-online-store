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
  const { pdtsList } = useContext(ProductContext);

  const first6Products = pdtsList.slice(0, 6);
  const next4Products = pdtsList.slice(6, 10);
  const next10Products = pdtsList.slice(10);

  return (
    <>
      <SectionHero />
      <SectionSale products={first6Products} />
      <SectionCategories />
      <SectionBestSelling products={next4Products} />
      <Advertisement />
      <SectionExplore products={next10Products} />
      <SectionNew />
      <Features />
    </>
  );
}
