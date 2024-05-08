import { RatingStars } from "./";

export function ProductCard(props) {
  const { id, title, price, category, description, image, rating } = props.data;
  return (
    <article className="pdt">
      <div className="pdt_imgWrapper">
        <img src={image} alt={title} />
      </div>
      <div className="pdt_textWrapper">
        <p className="pdt_title">{title}</p>
        <p className="pdt_price">{price}$</p>
        <p className="pdt_rating_wrapper">
          <RatingStars rate={rating.rate} />
          <span className="pdt_rating_num">({rating.count})</span>
        </p>
      </div>
    </article>
  );
}
// <article className="pdt">
//   <div className="pdt_imgWrapper">
//     <img src={image} alt={title} />
//   </div>
//   <div className="pdt_textWrapper">
//     <p className="pdt_title">{title}</p>
//     <p className="pdt_price">
//       {price}
//       <span className="pdt_price--before"></span>
//     </p>
//     <div className="pdt_rating">
//       <RatingStars /> <span className="pdt_rating_num"></span>
//     </div>
//   </div>
// </article>
