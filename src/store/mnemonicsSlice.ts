import { createSlice } from '@reduxjs/toolkit';
import { IRootState } from './store';

interface MyDataState {
  data: Array<any>;
}

const initialState: MyDataState = { data: [] }

const mnemonicsSlice = createSlice({
  name: 'mnemonics',
  initialState,
  reducers: {
    setMnemonics: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setMnemonics } = mnemonicsSlice.actions;
export const getMnemonics = (state: IRootState) => state.mnemonics.data; 

export default mnemonicsSlice.reducer;