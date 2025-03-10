import React, { useState } from 'react';



function DattiAndProf() {

    const [height, setHeight] = useState("___");
    
    

  return (
    
    <div>
      <h1>My wife is {height}</h1>

      <div className='flex flex-row w-auto h-auto gap-3 border'>
      
        <button 
        onClick={()=>setHeight("Tall")} 
        className='text-black bg-red-500'>Set it to Tall</button>
        
        <button onClick={()=>setHeight("Short")} className='text-black bg-red-500'>Set it to Short</button>
        <button onClick={()=>setHeight("Average")} className='text-black bg-red-500'>Set it to Average</button>
      </div>
    </div>
  )
};



function AnotherDattiAndProf() {

    const [height, setHeight] = useState("___");

    

  return (
    <div>
      <h1>My wife is {height}</h1>

      <div className='flex flex-row w-auto h-auto gap-3 border'>
      
        <button 
        onClick={()=>setHeight("Tall")} 
        className='text-black bg-red-500'>Set it to Tall</button>
        
        <button onClick={()=>setHeight("Short")} className='text-black bg-red-500'>Set it to Short</button>
        <button onClick={()=>setHeight("Average")} className='text-black bg-red-500'>Set it to Average</button>
      </div>
    </div>
  )
};



export {DattiAndProf, AnotherDattiAndProf}