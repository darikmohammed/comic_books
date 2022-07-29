import { createSlice } from '@reduxjs/toolkit';

import GetDisney from './GetDisney';

// const initialState = {
//   characters: [],
//   status: 'waiting',
// };
const initialState = [];
const Disney = createSlice({
  name: 'disney',
  initialState,
  reducers: {},
  extraReducers: {
    // Get Disney Characters
    // [GetDisney.pending]: (state) => ({
    //   ...state,
    //   status: 'loading',
    // }),
    [GetDisney.fulfilled]: (state, action) => action.payload,
    // [GetDisney.rejected]: (state) => ({
    //   ...state,
    //   status: 'rejected',
    // }),
  },
});

export default Disney.reducer;
