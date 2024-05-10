import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState();

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
    fetctData(url)
      .then((data) => {
        setData(data);
      })
      .catch(() => {
        setData(null);
      });
  }, []);

  return data;
}
