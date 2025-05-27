import React, { useEffect, useState } from "react";

const timezones = {
  EST: "America/New_York",
  CST: "America/Chicago",
  PST: "America/Los_Angeles",
};

function LiveClock() {
  const [time, setTime] = useState(new Date());
  const [zone, setZone] = useState("CST");

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "30px",
        fontSize: "20px",
        fontWeight: "600",
        color: "#ffffff",
        background: "rgba(0,0,0,0.5)",
        padding: "10px 14px",
        borderRadius: "10px",
        zIndex: 999,
      }}
    >
      {time.toLocaleTimeString("en-US", {
        timeZone: timezones[zone],
        hour12: true,
      })}
      <br />
      <select
        value={zone}
        onChange={(e) => setZone(e.target.value)}
        style={{ marginTop: "5px", fontSize: "14px" }}
      >
        {Object.keys(timezones).map((z) => (
          <option key={z}>{z}</option>
        ))}
      </select>
    </div>
  );
}

export default LiveClock;
