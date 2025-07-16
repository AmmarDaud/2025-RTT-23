import { useState, useEffect } from "react";

function TimerDisplay() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());


  useEffect(() => {
    console.log("subscribe to the time service");
    
    const intervalId = setInterval(() => {
        setTime(new Date().toLocaleTimeString())
    }, 1000);

    return () => {
        console.log("unsubscribe to the time service");
        clearInterval(intervalId);// prevent memory leaks
    }
  }, []);
  
  return (
    <div>
      <h2>{time}</h2>
    </div>
  );
}

export default TimerDisplay;