
import moment from 'moment-timezone';

const Calculating = () => {
  // Calculate the time in New York and Los Angeles
  const timeInNY = moment.tz("2024-11-06 12:00", "America/New_York");
  const timeInLA = moment.tz("2024-11-06 12:00", "America/Los_Angeles");

  // Calculate the difference in hours between the two time zones
  const difference = timeInNY.diff(timeInLA, 'hours'); // Result: 3

  return (
    <div>
      {/* Render the time difference */}
      <p>Time difference between New York and Los Angeles: {difference} hours</p>
    </div>
  );
}

export default Calculating;
