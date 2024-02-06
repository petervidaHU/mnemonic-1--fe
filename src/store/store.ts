'use client'
import { configureStore } from '@reduxjs/toolkit';
import mnemonicsSlice from './mnemonicsSlice';

export const store = configureStore({
  reducer: {
    mnemonics: mnemonicsSlice
  },
  middleware: (getDefaultMiddleware) =>  
    getDefaultMiddleware(),
});

export type IRootState = ReturnType<typeof store.getState>
