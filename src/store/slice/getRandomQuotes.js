import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getRandomQuote = createAsyncThunk("getRandomQuote", async () => {
  try {
    const quoteResponse = await fetch("https://api.quotable.io/random");
    const quoteData = await quoteResponse.json();
    console.log("quote", quoteData);
    return quoteData; 
    // No type casting, assuming response structure
  } catch (error) {
    throw error;
  }
});

export const randomQuote = createSlice({
  name: "randomQuote",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRandomQuote.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRandomQuote.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getRandomQuote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default randomQuote.reducer;
