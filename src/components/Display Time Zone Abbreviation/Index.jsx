
import moment from 'moment-timezone';

const DisplayTimeZone = () => {
  // Calculate the time with the time zone abbreviation
  const timeWithZone = moment.tz("2024-11-06 12:00", "America/New_York").format("h:mm A z");

  return (
    <div>
      {/* Render the time with the zone abbreviation */}
      <p>Time with zone: {timeWithZone}</p>
    </div>
  );
}

export default DisplayTimeZone;
