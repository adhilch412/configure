// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




//  export const fecthproducts=createAsyncThunk('products/fetchproduts',async()=>{
//     return new Promise((resolve) => {
        
//         setTimeout(() => {
            

//             resolve([
//                 {id:1,name:'laptop'},
//                 {id:2,name:'computer'},
//                 {id:3,name:'phone'}
//             ])
//         }, 1000);
//     })
// })


// const slice=createSlice({
//     name:'products',
//     initialState:{
//       products:[],
//       status:'idle',
//       error:null
//     },
//     reducers:{},
//     extraReducers:(builder) =>{
//         builder
//         .addCase(fecthproducts.pending,(state)=>{
//             state.status='loading'
//             state.error=null
//         })
//         .addCase(fecthproducts.fulfilled,(state,action)=>{
//             state.status='succeeded'
//             state.products=action.payload
//         })
//         .addCase(fecthproducts.rejected,(state,action)=>{
//             state.status='failed'
//             state.error=action.error.message
//         })
//     }
// })

// export default slice.reducer







import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
