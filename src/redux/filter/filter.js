import { createSlice } from '@reduxjs/toolkit';

const filter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    addTar(state, actions) {
      return (state = actions.payload);
    },
  },
});
export default filter.reducer;
export const { addTar } = filter.actions;
