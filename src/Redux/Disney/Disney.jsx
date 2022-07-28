import { createSlice } from '@reduxjs/toolkit';

import GetDisney from './GetDisney';

const initialState = {
  characters: [],
  status: 'waiting',
};

const Disney = createSlice({
  name: 'disney',
  initialState,
  reducers: {},
  extraReducers: {
    // Get Disney Characters
    [GetDisney.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [GetDisney.fulfilled]: (state, action) => ({
      ...state,
      characters: action.payload,
      status: 'uploaded',
    }),
    [GetDisney.rejected]: (state) => ({
      ...state,
      status: 'rejected',
    }),
  },
});

export default Disney.reducer;
