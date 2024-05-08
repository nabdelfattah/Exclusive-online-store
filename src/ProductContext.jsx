import { createContext, useState } from "react";
import { useFetch } from "./useFetch";

export const ProductContext = createContext({
  pdtDetailsId: 1,
  setPdtDetailsId: (val) => {},
});

export function ProductContextProvider(props) {
  const [pdtDetailsId, setPdtDetailsId] = useState(1);
  const { pdtsList, IsFetchErr, isFetchLoading } = useFetch(
    "https://fakestoreapi.com/products"
  );
  return (
    <ProductContext.Provider
      value={{
        pdtsList,
        pdtDetailsId,
        setPdtDetailsId,
        IsFetchErr,
        isFetchLoading,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}
