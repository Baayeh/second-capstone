// Countries API
const BASE_URL = 'https://restcountries.com/v3.1';

// Get list of countries
const getCountries = async () => {
  const response = await fetch(`${BASE_URL}/all`);
  return response.json();
};

export default getCountries;
