import React, { useState, useEffect } from 'react';
 
const WorldClock = () => {
  const [time, setTime] = useState(new Date());
 
  // Function to update the time
  const updateTime = () => {
    setTime(new Date());
  };
 
  // Update the time every second
  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
   
    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, []);
 
  // Format the time for different time zones
  const timeZones = [
    { name: "New York", offset: "America/New_York" },
    { name: "London", offset: "Europe/London" },
    { name: "Tokyo", offset: "Asia/Tokyo" },
    { name: "Sydney", offset: "Australia/Sydney" }
  ];
 
  return (
    <div>
      <h1>World Clock</h1>
      <div>
        {timeZones.map((zone, index) => {
          const timeInZone = new Date().toLocaleString("en-US", {
            timeZone: zone.offset,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
          });
          return (
            <div key={index}>
              <h2>{zone.name}</h2>
              <p>{timeInZone}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
 
export default WorldClock;