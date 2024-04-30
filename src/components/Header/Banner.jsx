import { Link } from "react-router-dom";

export function Banner() {
  function selectHandler(e) {
    console.log(e);
  }
  return (
    <div className="banner">
      <div className="container">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link to="/products" className="banner-link">
            ShopNow
          </Link>
        </p>
        <select
          defaultValue="english"
          className="banner-select"
          onChange={selectHandler}
        >
          <option value="english">English</option>
          <option value="spanish">española</option>
          <option value="arabic">العربية</option>
        </select>
      </div>
    </div>
  );
}
