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

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Add more reducers here later if needed
  },
});
