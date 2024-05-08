import { Link } from "react-router-dom";
import { HomeHeader } from "./HomeHeader";
import { ProductList } from "../Product";

export function SectionBestSelling({ products }) {
  return (
    <section className="section-best container mb-14">
      <HomeHeader subheading="This Month" heading="Best Selling Products">
        <Link to="/products" className="btn-primary">
          View All
        </Link>
      </HomeHeader>
      <ProductList products={products} />
    </section>
  );
}
