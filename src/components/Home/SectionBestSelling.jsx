import { Link } from "react-router-dom";
import { HomeHeader } from "./HomeHeader";
import { ProductList } from "../Product";
import { useTranslation } from "react-i18next";

export function SectionBestSelling({ products }) {
  const { t } = useTranslation();
  function handleProductCount() {
    return;
  }
  return (
    <section className="section-best container mb-14">
      <HomeHeader
        subheading={t("This Month")}
        heading={t("Best Selling Products")}
      >
        <Link to="/products" className="btn-primary">
          {t("View All")}
        </Link>
      </HomeHeader>
      <ProductList
        category="furniture"
        onProductCountChange={handleProductCount}
      />
    </section>
  );
}
