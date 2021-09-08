const axios = require("axios");

const baseURL = "https://restcountries.eu/rest/v2";

const request = async (method, url = baseURL, params = "") => {
  const countryNames = [];

  try {
    // Some kind of condition to sent base url or with params

    // Since data is filtered through all, :id, filter, region, etc... have it here so it doesn't have to be passed each time.

    const headers = {
      "Content-Type": "application/json",
    };

    // Make axios call with props and return response
    const response = await axios({
      method,
      url,
      headers,
      params,
    });

    // const resData = await response.then((response) => response.data);

    // console.log("response.data[0] is: ", typeof response.data[0].name);
    for (const name of response.data) {
      countryNames.push(name.name);
    }
  } catch (error) {
    console.error(error);
  }
  return countryNames;
};

export default request;
