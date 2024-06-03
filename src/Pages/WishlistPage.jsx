import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { FetchedProductCard, ProductList } from "../components/Product";
import { HomeHeader } from "../components/Home/HomeHeader";
import { Link } from "react-router-dom";
import { addToCart } from "../helper";
import { useTranslation } from "react-i18next";

export function WishlistPage() {
  const { t } = useTranslation();
  const { wishlist } = useContext(UserContext);

  const handleProductCount = (count) => {
    return;
  };
  function moveToCartHandler() {
    wishlist.forEach(async (element) => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${element}`
        );
        const data = await response.json();
        addToCart({ ...data, count: 1 });
      } catch {
        alert("Can't move you wishlist to cart.");
      }
    });
  }

  return (
    <div className="wishlist_wrapper container mb-14">
      <div className="wishlist_header">
        <p>
          {t("Wishlist")} ({wishlist.length})
        </p>
        {wishlist.length ? (
          <button className="btn-outline" onClick={moveToCartHandler}>
            {t("Move All To Bag")}
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
        <HomeHeader subheading={t("Just For You")} heading="">
          <Link to="/products" className="btn-outline">
            {t("See All")}
          </Link>
        </HomeHeader>
        <div className="justForU">
          <ProductList
            category="sunglasses"
            onProductCountChange={handleProductCount}
          />
        </div>
      </div>
    </div>
  );
}
