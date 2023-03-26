import { configureStore } from '@reduxjs/toolkit';

import { contactsApi } from './contactsSlice.js';
import { filterReducer } from './filterSlice.js';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
