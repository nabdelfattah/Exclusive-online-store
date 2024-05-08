import { useEffect, useState } from "react";

export function useFetch(url) {
  const [pdtsList, setPdtsList] = useState([]);
  const [IsFetchErr, setIsFetchErr] = useState(false);
  const [isFetchLoading, setIsFetchLoading] = useState(false);

  async function fetctData(url) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (err) {
      throw new Error(err.message);
    }
  }
  console.log("useFetch re-evaluation with pdtList of:", pdtsList);
  useEffect(() => {
    console.log("useFetch calls fetchData...");
    setIsFetchErr(false);
    setIsFetchLoading(true);
    fetctData(url)
      .then((data) => {
        setPdtsList(data);
      })
      .catch(() => {
        setIsFetchErr(true);
      })
      .finally(() => {
        setIsFetchLoading(false);
      });
  }, []);

  return { pdtsList, IsFetchErr, isFetchLoading };
}
