// export const API_BASE = './api';
// export const API_BASE = 'https://77fc451878cdf65c.mokky.dev';
import axios from 'axios';

export const API_ROUTES = {
  profile: `profile`,
  categories: `categories`,
  bookmarks: (id: number) => `categories/${id}/bookmarks`,
};

export const http = axios.create({
  baseURL: 'https://77fc451878cdf65c.mokky.dev',
  timeout: 10000,
});
