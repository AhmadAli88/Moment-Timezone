import { useEffect, useState } from 'react';
import moment from 'moment-timezone';

const HandlingUserLocalTime = () => {
  const [localTime, setLocalTime] = useState(null);

  useEffect(() => {
    // Guess the user's time zone and get the local time
    const userTimeZone = moment.tz.guess();
    const time = moment.tz(new Date(), userTimeZone).format("YYYY-MM-DD HH:mm:ss");
    setLocalTime(time); // Store the local time in the state
  }, []);

  return (
    <div>
      {localTime ? (
        <p>Local time in your time zone: {localTime}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default HandlingUserLocalTime;
