const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

const showComments = async (id) => {
  const url = `${BASE_URL}apps/IgY08bvfNLdtRYcSagqI/comments?item_id=${id}`;
  const requestOptions = { method: 'GET' };
  const response = await fetch(url, requestOptions);
  return response.json();
};

const addComment = async (data) => {
  const response = await fetch(`${BASE_URL}apps/IgY08bvfNLdtRYcSagqI/comments`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(data)
  });
  return response.text();
};

export { showComments, addComment };