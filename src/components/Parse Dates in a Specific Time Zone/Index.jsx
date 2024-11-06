import  { useEffect, useState } from 'react';
import moment from 'moment-timezone';

const ParseDates = () => {
  const [parsedTime, setParsedTime] = useState(null);

  useEffect(() => {
    // Parse the time in the "America/New_York" time zone
    const time = moment.tz("2024-11-06 10:30", "America/New_York").format();
    setParsedTime(time); // Set the parsed time in the state
  }, []);

  return (
    <div>
      {parsedTime ? (
        <p>Parsed time in New York: {parsedTime}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ParseDates;
