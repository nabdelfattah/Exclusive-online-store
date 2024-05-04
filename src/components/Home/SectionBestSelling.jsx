import { Link } from "react-router-dom";
import { HomeHeader } from "./HomeHeader";

export function SectionBestSelling() {
  return (
    <section className="section-best container mb-14">
      <HomeHeader subheading="This Month" heading="Best Selling Products">
        <Link to="/products" className="btn-primary">
          View All
        </Link>
      </HomeHeader>
    </section>
  );
}
