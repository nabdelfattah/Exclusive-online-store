export function Coupon() {
  return (
    <div className="coupon_wrapper">
      <input type="text" name="coupon" placeholder="Coupon Code" />
      <button type="button" className="btn-primary">
        Apply Coupon
      </button>
    </div>
  );
}
