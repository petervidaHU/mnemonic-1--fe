'use client'
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';
import mnemonicsSlice from './mnemonicsSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    mnemonics: mnemonicsSlice
  },
  middleware: (getDefaultMiddleware) =>  
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type IRootState = ReturnType<typeof store.getState>
