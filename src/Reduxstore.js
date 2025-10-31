// import { configureStore } from "@reduxjs/toolkit";
// import slice from './Createslice'

// const store=configureStore({
//     reducer:{
//         products:slice
//     }
// })
// export default store 


import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Createslice";

// Logging middleware (custom)
const logger = (store) => (next) => (action) => {
  console.log("Dispatching:", action);
  const result = next(action);
  console.log("Next State:", store.getState());
  return result;
};

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: true, // enables Redux DevTools
});
