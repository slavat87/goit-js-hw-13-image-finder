import errorsNotifications from './notification';

const url = 'https://pixabay.com/api/';
const apiKey = '19598883-8e8293d515495519269109cc8';

export default {
  searchQuery: '',
  page: 1,
  perPage: 12,
  totalItems: 0,
  fetchCard() {
    const search = `${url}?image_type=photo&q=${this.searchQuery}&page=${this.page}&per_page=${this.perPage}&orientation=horizontal&key=${apiKey}`;

    return fetch(search)
      .then(res => res.json())
      .then(({ hits, totalHits }) => {
        this.totalItems = totalHits;
        if (hits.length === 0) {
          throw new Error('Error feching data');
        }
        return { hits, page: this.page };
      })
      .catch(error => {
        errorsNotifications(
          'Nothing was found for your request. Enter the correct country name',
        );
        return error;
      });
  },

  reset() {
    this.page = 1;
  },

  get newPage() {
    return this.page;
  },

  set newPage(value) {
    this.page = value;
  },

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  },
};
