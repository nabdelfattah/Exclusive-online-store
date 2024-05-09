import { useEffect, useState } from "react";

export function useFetch(url) {
  const [pdtsList, setPdtsList] = useState([]);
  const [IsFetchErr, setIsFetchErr] = useState(false);
  const [isFetchLoading, setIsFetchLoading] = useState(false);

  async function fetctData(url) {
    console.log("fetch data....");
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (err) {
      throw new Error(err.message);
    }
  }
  useEffect(() => {
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
