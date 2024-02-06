import { createSlice } from '@reduxjs/toolkit';
import { IRootState } from './store';

export enum StatusOfResponse {
  disliked = 'disliked',
  liked = 'liked',
  fav = 'fav',
}

export interface MnemonicObject {
  id: string,
  status: StatusOfResponse | null,
  text: Array<string>,
}

export interface ResponseObj {
  data: Array<MnemonicObject>;
  acronyms: string | null
}

const initialState: ResponseObj = { 
  data: [],
  acronyms: null,
}

const mnemonicsSlice = createSlice({
  name: 'mnemonics',
  initialState,
  reducers: {
    initMnemonics: (state, action) => {
      state.data = action.payload.data;
      state.acronyms = action.payload.acronyms;
    },
    updateMnemonics: (state, action) => {
      const { id, status } = action.payload;
      if (status === StatusOfResponse.fav) {
        const indexOfPrevFav = state.data.findIndex(item => item.status === StatusOfResponse.fav);
        if (indexOfPrevFav!== -1) {
          state.data[indexOfPrevFav].status = StatusOfResponse.liked;
        }
      }
      const index = state.data.findIndex(item => item.id === id);
      state.data[index].status = status;
    },
  },
});

export const { initMnemonics, updateMnemonics } = mnemonicsSlice.actions;
export const getMnemonics = (state: IRootState) => state.mnemonics; 

export default mnemonicsSlice.reducer;