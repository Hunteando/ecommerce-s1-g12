import axios from 'axios';

export const productsApi = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/character',
});
