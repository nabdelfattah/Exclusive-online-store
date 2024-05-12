import { useContext } from "react";
import { UserContext } from "../UserContext";
import { FetchedProductCard, ProductList } from "../components/Product";
import { HomeHeader } from "../components/Home/HomeHeader";
import { Link } from "react-router-dom";
import { addToCart } from "../helper";

export function WishlistPage() {
  const { wishlist } = useContext(UserContext);

  function moveToCartHandler() {
    wishlist.forEach(async (element) => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${element}`
        );
        const data = await response.json();
        addToCart(data);
      } catch {
        alert("Can't move you wishlist to cart.");
      }
    });
  }

  return (
    <div className="container mb-14">
      <div className="wishlist_header">
        <p>Wishlist ({wishlist.length})</p>
        {wishlist.length ? (
          <button className="btn-outline" onClick={moveToCartHandler}>
            Move All To Bag
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="pdtList mb-8">
        {wishlist.map((id) => {
          return <FetchedProductCard key={id} id={id} />;
        })}
      </div>
      <div className="wishlist_relatedPdts">
        <HomeHeader subheading="Just For You" heading="">
          <Link to="/products" className="btn-outline">
            See All
          </Link>
        </HomeHeader>
        <ProductList category="sunglasses" />
      </div>
    </div>
  );
}
