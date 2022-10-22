import { INVVOLVED_URL, APP_ID } from './Involvement.js';

const showComments = async (id) => {
  const url = `${INVVOLVED_URL}/apps/${APP_ID}/comments?item_id=${id}`;
  const requestOptions = { method: 'GET' };
  const response = await fetch(url, requestOptions);
  return response.json();
};

const addComment = async (data) => {
  const response = await fetch(`${INVVOLVED_URL}/apps/${APP_ID}/comments`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.text();
};

export { showComments, addComment };
