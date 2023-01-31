import { configureStore } from '@reduxjs/toolkit';

import { newsReducer } from '../../entities/news/model';
import { userReducer } from '../../entities/user/model/user';

export const store = configureStore({
  reducer: {
    user: userReducer,
    news: newsReducer,
  },
});
