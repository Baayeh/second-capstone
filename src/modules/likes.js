// eslint-disable-next-line operator-linebreak
const INVVOLVED_URL =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

const APP_ID = 'Xwzhy7hICqJVdnAtJGEs';

// Get all Likes ----->  /apps/:app_id/likes/
const getLikes = async () => {
  const response = await fetch(`${INVVOLVED_URL}/apps/${APP_ID}/likes`);
  return response;
};

export { INVVOLVED_URL, APP_ID, getLikes };
