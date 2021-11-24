import { useState, useEffect, useRef } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://restcountries.com/v2";
axios.defaults.headers = { "Content-Type": "application/json" };
axios.defaults.params = {
  fields:
    "name,population,region,subregion,capital,topLevelDomain,alpha3Code,currencies,languages,borders,flags",
};

export const useAxios = (axiosParams) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const currentApi = useRef(null);

  const fetchData = async (params) => {
    try {
      const result = await axios.request(params);
      setResponse(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // const url = useRef(params.api);
  // url.current can be changed and then call

  useEffect(() => {
    fetchData(axiosParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [axiosParams.url]);

  return { response, error, loading };
};
