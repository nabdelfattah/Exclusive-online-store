import "./header.scss";
export function Banner() {
  return (
    <>
      <p className="banner">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <a href="#">ShopNow</a>
      </p>
      <select defaultValue="english">
        <option value="english">English</option>
        <option value="spanish">española</option>
        <option value="arabic">العربية</option>
      </select>
    </>
  );
}
