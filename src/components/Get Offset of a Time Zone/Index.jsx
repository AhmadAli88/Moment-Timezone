import { useEffect, useState } from 'react';
import moment from 'moment-timezone';

const GetOffset = () => {
  const [offset, setOffset] = useState(null);

  useEffect(() => {
    // Calculate the UTC offset for "America/New_York"
    const utcOffset = moment.tz("America/New_York").utcOffset();
    setOffset(utcOffset); // Store the result in the state
  }, []);

  return (
    <div>
      {offset !== null ? (
        <p>UTC Offset for New York: {offset} minutes</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default GetOffset;
