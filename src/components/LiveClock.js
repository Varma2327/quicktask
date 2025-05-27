import React, { useState, useEffect } from "react";

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: "fixed",
      top: "20px",
      right: "30px",
      fontSize: "20px",
      fontWeight: "600",
      color: "#ffffffdd",
      textShadow: "1px 1px 4px rgba(0,0,0,0.7)"
    }}>
      {time.toLocaleTimeString()}
    </div>
  );
}

export default LiveClock;
