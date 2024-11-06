import moment from 'moment-timezone';

const GetCurrentDateAndTime = () => {
  // Calculate the formatted time in New York
  const formattedTime = moment
    .tz('2024-11-06 12:00', 'America/New_York')
    .format('MMMM Do YYYY, h:mm:ss a');

  return (
    <div>
      {/* Render the formatted time */}
      <p>Formatted time in New York: {formattedTime}</p>
    </div>
  );
};

export default GetCurrentDateAndTime;
