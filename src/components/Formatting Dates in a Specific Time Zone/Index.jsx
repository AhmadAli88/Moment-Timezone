import moment from 'moment-timezone';

const FormattingDates = () => {
  const currentTimeInNY = moment.tz('America/New_York').format(); // Default ISO format

  return (
    <div>
      <p>Current time in New York: {currentTimeInNY}</p>
    </div>
  );
};

export default FormattingDates;
