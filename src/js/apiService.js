const apiKey = '20386842-9f390c2ddb67ac927c9e310bb';

export default {
  userQuery: '',
  page: 1,
  fetchCards() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${apiKey}`;

    return fetch(url)
      .then(response => response.json())
      .then(({ hits }) => {
        this.page += 1;
        return hits;
      })
      .catch(error => console.log(error));
  },
  get query() {
    return this.userQuery;
  },
  set query(newQuery) {
    this.query = newQuery;
  },
  resetPage() {
    this.page = 1;
  },
};
