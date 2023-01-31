import { API_URL } from '../config';
import { apiInstance } from './base';

const URL = '/data/mock_news.json';

export const getNewsDataQuery = () => {
  return apiInstance(`${API_URL}${URL}`);
};
