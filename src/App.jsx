// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import {fecthproducts} from './Createslice'

// function App() {

//   const dis=useDispatch()
//   const { status,products,error}=useSelector((state)=>state.products)
//    useEffect(()=>{
//     dis(fecthproducts())
//    },[dis])
//   return (
//     <div>q
//       <h1>list</h1>
//       {status==='loading' && <p>loading</p>}
//       {status==='failed' && <p>error:{error}</p>}
//       {status==='succeeded' && <ul>
//         {products.map((item)=>(
//           <li key={item.id}>
//             {item.name}
//           </li>
//         ))}
//       </ul> }
      
//     </div>
//   )
// }

// export default App





import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment,decrement,reset } from "./Createslice";

function App() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Counter: {value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;
