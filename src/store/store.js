// Import the necessary functions from Redux Toolkit.
import { configureStore } from '@reduxjs/toolkit';

// Import the root reducer that combines all your slice reducers.
import rootReducer from './rootReducer';

// Create a Redux store using the configureStore function.
const store = configureStore({
  // Configure the store with the root reducer that combines all your slice reducers.
  reducer: rootReducer,
});

// Export the configured Redux store.
export default store;
