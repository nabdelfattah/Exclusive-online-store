import { createContext, useState } from "react";
import { useFetch } from "./useFetch";

export const ProductContext = createContext({
  pdtsList: [],
  setPdtsList: (val) => {},
  pdtDetailsId: 1,
  setPdtDetailsId: (val) => {},
});

export function ProductContextProvider(props) {
  const [pdtDetailsId, setPdtDetailsId] = useState(1);
  const { pdtsList, IsFetchErr, isFetchLoading } = useFetch(
    "https://fakestoreapi.com/products"
  );
  localStorage.setItem("pdtsList", JSON.stringify(pdtsList));
  console.log("re-evaluation of productContext with pdtlist of:", pdtsList);
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
