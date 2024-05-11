export function CartTotal({ subtotal, shipping, total }) {
  return (
    <>
      <p className="total">
        Subtotal: <span>${subtotal}</span>
      </p>
      <p className="shipping">
        Shipping: <span>{shipping}</span>
      </p>
      <p className="total">
        Total: <span>${total}</span>
      </p>
    </>
  );
}
