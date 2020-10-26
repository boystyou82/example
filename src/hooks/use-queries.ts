import { useState, useEffect } from "react";
import { DailyPrice, APIResponse } from "../types/types";
import { get } from "../fetchers/fetchers";

export const useGetDailyPrices = () => {
  const [data, setData] = useState<DailyPrice[]>([]);

  const getData = async () => {
    const { results } = await get<APIResponse>("./example.json");
    setData(results);
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
};
