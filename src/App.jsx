import { useEffect, useState } from "react";
import { format } from "date-fns";
import "./App.css";

function App() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000); // updates every second

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  return (
    <div className="clock-container">
      <h1>Dynamic Color Clock</h1>
      <p className="clock-time">
        {format(now, "EEEE, MMMM do yyyy — hh:mm:ss a")}
      </p>
    </div>
  );
}

export default App;
