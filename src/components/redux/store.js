import { configureStore } from '@reduxjs/toolkit';
import { myContactsReducerSlice, myFilterSlice } from './slice';

export const store = configureStore({
  reducer: {
    contacts: myContactsReducerSlice.reducer,
    filter: myFilterSlice.reducer,
  },
});

