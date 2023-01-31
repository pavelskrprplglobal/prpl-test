import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

import { News } from '../../../shared/api/models';
import { getNewsDataQuery } from '../../../shared/api';


type NewsList = Array<News>;

export const initialState: {
  data: NewsList;
} = {
  data: [],
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNewsList: (state, action: PayloadAction<NewsList>) => {
      state.data = action.payload;
    },
  },
});

const NEWS_DATA_QUERY_KEY = 'news';

export const getNewsDataAsync = () => (dispatch: Dispatch) => useQuery(
  NEWS_DATA_QUERY_KEY,
  () => getNewsDataQuery(),
  {
    // @ts-ignore
    onSuccess: async (res) => {
      const data = await res.json();
      return dispatch(newsSlice.actions.setNewsList(data.data));
    },
    refetchOnWindowFocus: false,
  }
);

// eslint-disable-next-line react-hooks/rules-of-hooks
export const getNewsData = () => useSelector((state: RootState) => state.news.data);

export const newsReducer = newsSlice.reducer;
