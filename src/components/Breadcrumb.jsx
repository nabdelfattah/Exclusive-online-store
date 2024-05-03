import { Link } from "react-router-dom";

export function Breadcrumb({ chain }) {
  //  chain is a list of {route, text} objects
  return (
    <ul className="breadcrumb container">
      {chain.map((item, index) => {
        let len = chain.length - 1;
        return index !== len ? (
          <li key={item.text}>
            <Link to={item.route}>{item.text}</Link>
          </li>
        ) : (
          <li key={item.text}>{item.text}</li>
        );
      })}
    </ul>
  );
}
