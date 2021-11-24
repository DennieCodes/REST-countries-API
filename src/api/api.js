const axios = require("axios");

axios.defaults.baseURL = "https://restcountries.com/v2";
axios.defaults.headers = { "Content-Type": "application/json" };
axios.defaults.params = {
  fields:
    "name,population,region,subregion,capital,topLevelDomain,alpha3Code,currencies,languages,borders,flags",
};

// `baseURL` will be prepended to `url` unless `url` is absolute.
// It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
// to methods of that instance.

const api = axios.create();

export default api;
