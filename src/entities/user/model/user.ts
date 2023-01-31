import { useSelector } from 'react-redux';
import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { useQuery } from 'react-query';

import { User } from '../../../shared/api/models';
import { getUserDataQuery } from '../../../shared/api';

export const initialState: {
  data: User | null;
} = {
  data: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      state.data = action.payload;
    },
    removeUserData: (state) => {
      state.data = null;
    },
  },
});

const USER_DATA_QUERY_KEY = 'user';

export const getUserDataAsync = () => (dispatch: Dispatch) => useQuery(
  USER_DATA_QUERY_KEY,
  () => getUserDataQuery(),
  {
    // @ts-ignore
    onSuccess: async (res) => {
      const data = await res.json();
      return dispatch(userSlice.actions.setUserData(data));
    },
    refetchOnWindowFocus: false,
  }
);

// eslint-disable-next-line react-hooks/rules-of-hooks
export const getUserData = () => useSelector((state: RootState) => state.user.data);

export const userReducer = userSlice.reducer;
