import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// This is just a placeholder. Replace it with your actual API.
const API_URL = 'https://api.crossref.org/works';

export const fetchDoiInfo = createAsyncThunk(
  'doi/fetchDoiInfo',
  async (doi) => {
    const response = await fetch(`${API_URL}/${doi}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.message; // Note: Crossref's API puts the actual message in the "message" property of the returned JSON object
  }
);

export const doiSlice = createSlice({
  name: 'doi',
  initialState: {
    info: null,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoiInfo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDoiInfo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.info = action.payload;
      })
      .addCase(fetchDoiInfo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default doiSlice.reducer;
