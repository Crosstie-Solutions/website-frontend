import React, { useContext, useState } from 'react';
import { CrossContext } from '../Context/CrossContext';


function TrialComponent() {

    // const [count, setCount] = useState(0);

    const {setCount, count } = useContext(CrossContext);

  

  return (
    <div className='mt-20'>
      <h1>The count is {count}</h1>


      <div className='flex flex-row'>
        <button onClick={()=>setCount(count + 1)}>Increase</button>

        <button onClick={()=>setCount(count - 1)}>decrease</button>
      </div>
    </div>
  )
}

export default TrialComponent
