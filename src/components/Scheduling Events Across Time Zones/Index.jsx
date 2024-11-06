import { useEffect, useState } from 'react';
import moment from 'moment-timezone';

const Scheduling = () => {
  const [eventTimeUser, setEventTimeUser] = useState(null);

  useEffect(() => {
    // Set the event time in New York
    const eventTimeNY = moment.tz("2024-11-06 15:00", "America/New_York");
    
    // Convert the event time to the user's local time zone
    const userTime = eventTimeNY.clone().tz(moment.tz.guess()).format("h:mm A z");
    setEventTimeUser(userTime); // Store the event time in user's time zone
  }, []);

  return (
    <div>
      {eventTimeUser ? (
        <p>Event time in your time zone: {eventTimeUser}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Scheduling;
