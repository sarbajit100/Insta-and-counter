import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
  return (
    <div className="flex justify-center items-center flex-col mt-20">
        <h1 className="rounded-full border-4 border-yellow-400 h-32 text-5xl w-32 flex font-semibold items-center justify-center bg-slate-600 text-white">{count}</h1>
        <div className="flex items-center justify-center m-10 space-x-6">
        <button className="h-10 w-20 bg-sky-500 rounded-md" onClick={()=>{setCount(count+1)}}>Increase</button>
        <button className="h-10 w-20 bg-sky-500 rounded-md" onClick={()=>{setCount(count-1)}}>Decrease</button>
        </div>
      
    </div>
  )
}

export default Counter
