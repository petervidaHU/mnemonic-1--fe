import { createSlice } from '@reduxjs/toolkit';
import { IRootState } from './store';

export enum StatusOfResponse {
  disliked = 'disliked',
  liked = 'liked',
  fav = 'fav',
}

interface ResponseObject {
  id: string,
  status: StatusOfResponse | null,
  text: Array<string>,
}

interface MyDataState {
  data: Array<ResponseObject>;
}

const initialState: MyDataState = { data: [] }

const mnemonicsSlice = createSlice({
  name: 'mnemonics',
  initialState,
  reducers: {
    initMnemonics: (state, action) => {
      state.data = action.payload;
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
export const getMnemonics = (state: IRootState) => state.mnemonics.data; 

export default mnemonicsSlice.reducer;