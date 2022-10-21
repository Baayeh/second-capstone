const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

const showComments = async (id) => {
  const url = `${BASE_URL}apps/IgY08bvfNLdtRYcSagqI/comments?item_id=${id}`;
  const requestOptions = { method: 'GET' };
  const response = await fetch(url, requestOptions);
  return response.json();
};

export default showComments;