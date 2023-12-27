// rootReducer.js

import { combineReducers } from "@reduxjs/toolkit";

import quotesSlice from "./slice/getRandomQuotes.js";

const rootReducer = combineReducers({
  randomQuotesList: quotesSlice,
});

export default rootReducer;
