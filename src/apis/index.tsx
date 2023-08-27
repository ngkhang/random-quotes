// https://github.com/lukePeavey/quotable
const API_SERVERS = 'https://api.quotable.io';

// Get Random Quotes - GET /quotes/random
const GET_QUOTES = `${API_SERVERS}/quotes/random`;

// Get all quotes by author - GET /quotes?author=albert-einstein
const ALL_QUOTES_BY_AUTHOR = `${API_SERVERS}/quotes?author=`;

// List Authors - GET /authors
const LIST_AUTHORS = `${API_SERVERS}/authors`;

// Get Author by slug - GET /authors?slug=albert-einstein
const GET_AUTHOR = `${LIST_AUTHORS}?slug=`;

const Apis = {
  GET_QUOTES,
  LIST_AUTHORS,
  GET_AUTHOR,
  ALL_QUOTES_BY_AUTHOR,
};

export default Apis;
