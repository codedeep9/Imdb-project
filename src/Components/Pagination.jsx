import React from 'react'


function Pagination({handleLeftFn,handleRightFn,CurrPageNo}) {
  return (
    <div className="bg-gray-900/40 h-[50px] w-full m-4 flex justify-center align-center p-4">
        <div><i class="fa-solid fa-caret-left fa-xl px-6 text-white" onClick={handleLeftFn} ></i></div>
        <div className="px-4 text-white" >{CurrPageNo}</div>
        <div><i class="fa-solid fa-caret-right fa-xl px-6 text-white" onClick={handleRightFn}></i></div>
    </div>
  )
}

export default Pagination