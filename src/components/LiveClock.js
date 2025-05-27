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
      color: "#ffffffcc",
      textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
      background: "rgba(0, 0, 0, 0.5)",
      padding: "10px 14px",
      borderRadius: "10px",
      fontFamily: "'Courier New', monospace",
      zIndex: 999
    }}>
      {time.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata", // Change to desired timezone
        hour12: true
      })}
    </div>
  );
}

export default LiveClock;
