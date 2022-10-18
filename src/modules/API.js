// COuntries API
const BASE_URL = 'https://restcountries.com/v3.1';

// eslint-disable-next-line operator-linebreak
const INVVOLVED_URL =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

const APP_ID = 'SIZ2d4YlpQTQgaTw33yY';

class API {
  // Get list of countries
  static getCountries = async () => {
    const response = await fetch(`${BASE_URL}/all`);
    return response.json();
  };

  // create app to store likes ------>    /apps/
  static createApp = async () => {
    const response = await fetch(`${INVVOLVED_URL}/apps`, {
      method: 'POST',
      body: null,
    });
    return response.text();
  };

  // Get all Likes ----->  /apps/:app_id/likes/
  static getLikes = async () => {
    const response = await fetch(`${INVVOLVED_URL}/apps/${APP_ID}/likes`);
    return response.json();
  };
}

export default API;
