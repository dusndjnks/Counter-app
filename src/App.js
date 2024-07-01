import { useState } from "react";
function App() {



const[count,setCount]=useState(0)
  const increase=()=>{
  setCount(count<10?count+1:count)
  console.log(count);
}
const decrease=()=>{
  setCount(count>1?count-1:count)
  console.log(count);
}
const reset=()=>{
  setCount(0)
  console.log(count);
}
  
  return (
    <div className="bg-slate-300 h-screen  py-72 flex flex-col justify-center items-center gap-5">
      <div>
      <h1 className="text-2xl bg-black w-16 h-16 text-white flex items-center justify-center rounded-lg ">{count}</h1>
      </div>
      <div className="flex justify-center">
      <div><button onClick={increase} className="border border-1 text-lg w-32 py-2 bg-gray-600 text-white">Increment</button></div>
      <div><button onClick={decrease} className="border border-1 text-lg w-32 py-2 bg-gray-600 text-white">decrement</button></div>
      <div><button onClick={reset} className="border border-1 text-lg w-32 py-2 bg-gray-600 text-white ">Reset</button></div>
      </div>
    </div>
  );
}



export default App;
