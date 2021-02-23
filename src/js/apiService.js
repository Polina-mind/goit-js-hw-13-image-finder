function apiService(query, page = 1) {
  const apiKey = '20386842-9f390c2ddb67ac927c9e310bb';

  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${apiKey}`;

  return fetch(url)
    .then(response => response.json())
    .then(({ hits }) => hits)
    .catch(error => console.log(error));
}

export default apiService;
