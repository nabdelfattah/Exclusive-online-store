import { Link } from "react-router-dom";
import adsImg from "../../assets/icons/lg/hero2.svg";
export function Advertisement() {
  return (
    <section className="advertisement container mb-7">
      <img src={adsImg} />
      <Link to="/products" className="btn-primary">
        Buy Now!
      </Link>
    </section>
  );
}
