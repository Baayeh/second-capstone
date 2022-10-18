const BASE_URL = 'https://restcountries.com/v3.1';

class API {
  static getCountries = async () => {
    const response = await fetch(`${BASE_URL}/all`);
    return response.json();
  };
}

export default API;
