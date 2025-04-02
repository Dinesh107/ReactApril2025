import React, { useEffect, useState } from 'react'


function Timer() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Screen Rendered");
        // checkCount();
        //setCount(1)
        setTimeout(() => {
          setCount((preState) => { return preState + 1 });
        }, 1000)
    }, []);

   function checkCount() {
      if(count > 10) {
        setCount(1);
      }
   }
  
    function updateCount() {
        setCount((preCount) => { return preCount + 1})
    }

  return (
    <>
        <h1>I have refreshed or rendered {count} times!!!</h1>
        <button onClick={updateCount} >Increase Count</button>
    </>
  )
}

export default Timer

