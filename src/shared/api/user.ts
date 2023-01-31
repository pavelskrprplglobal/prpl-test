import { API_URL } from '../config';
import { apiInstance } from './base';

const URL = '/data/mock_user.json';

export const getUserDataQuery = () => {
  return apiInstance(`${API_URL}${URL}`);
};
