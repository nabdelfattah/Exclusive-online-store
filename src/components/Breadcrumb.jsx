import { Link } from "react-router-dom";

export function Breadcrumb({ chain }) {
  //  chain is a list of {route, text} objects
  return (
    <ul className="breadcrumb container" key={1}>
      {chain.map((item, index) => {
        let len = chain.length - 1;
        return index !== len ? (
          <li key={`${JSON.stringify(item)}`}>
            <Link to={item.route}>{item.text}</Link>
          </li>
        ) : (
          <li key={`${JSON.stringify(item)}`}>{item.text}</li>
        );
      })}
    </ul>
  );
}
