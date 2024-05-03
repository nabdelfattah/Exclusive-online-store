import feature1 from "../assets/icons/feature1.svg";
import feature2 from "../assets/icons/feature2.svg";
import feature3 from "../assets/icons/feature3.svg";

export function Features() {
  return (
    <ul className="features container mb-14">
      <li className="feature">
        <img src={feature1} />
        <p className="feature_title">FREE AND FAST DELIVERY</p>
        <p className="featrue_description">
          Free delivery for all orders over $140
        </p>
      </li>
      <li className="feature">
        <img src={feature2} />
        <p className="feature_title">24/7 CUSTOMER SERVICE</p>
        <p className="featrue_description">Friendly 24/7 customer support</p>
      </li>
      <li className="feature">
        <img src={feature3} />
        <p className="feature_title">MONEY BACK GUARANTEE</p>
        <p className="featrue_description">We reurn money within 30 days</p>
      </li>
    </ul>
  );
}
