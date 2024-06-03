import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Breadcrumb({ chain }) {
  const { t } = useTranslation();
  //  chain is a list of {route, text} objects
  return (
    <ul className="breadcrumb container" key={1}>
      {chain.map((item, index) => {
        let len = chain.length - 1;
        return index !== len ? (
          <li key={`${JSON.stringify(item)}`}>
            <Link to={item.route}>{t(item.text)}</Link>
          </li>
        ) : (
          <li key={`${JSON.stringify(item)}`}>{t(item.text)}</li>
        );
      })}
    </ul>
  );
}
