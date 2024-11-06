import { useEffect } from 'react';
import moment from 'moment-timezone';

const GetAllTimeZone = () => {
  useEffect(() => {
    // Get the list of all time zone names
    const timeZones = moment.tz.names();
    
    // Log the time zones to the console
    console.log(timeZones); // ["Africa/Abidjan", "Africa/Accra", ...]
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div>
      {/* You can render something here if needed */}
      <p>Check the console for the list of time zones.</p>
    </div>
  );
}

export default GetAllTimeZone;
