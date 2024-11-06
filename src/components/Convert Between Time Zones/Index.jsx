
import moment from 'moment-timezone';

const ConvertTimeZone = () => {
  // Compute the time in Los Angeles
  const timeInLA = moment.tz("2024-11-06 12:00", "America/New_York").tz("America/Los_Angeles").format("h:mm A");

  return (
    <div>
      {/* Render the computed time in Los Angeles */}
      <p>Time in Los Angeles: {timeInLA}</p>
    </div>
  );
};

export default ConvertTimeZone;
