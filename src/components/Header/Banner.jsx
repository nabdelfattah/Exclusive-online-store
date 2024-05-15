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
          <Link to="/products" className="banner_link">
            ShopNow
          </Link>
        </p>
        <select
          defaultValue="english"
          className="banner_select"
          onChange={selectHandler}
        >
          <option value="english" title="English">
            English
          </option>
          <option value="spanish" title="española">
            española
          </option>
          <option value="arabic" title="العربية">
            العربية
          </option>
        </select>
      </div>
    </div>
  );
}
