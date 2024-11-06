import  { useEffect, useState } from 'react';
import moment from 'moment-timezone';

const HandlingDaylight = () => {
  const [isDST, setIsDST] = useState(null);

  useEffect(() => {
    // Check if the given date is during DST in "America/New_York"
    const dstStatus = moment.tz("2024-06-01", "America/New_York").isDST();
    setIsDST(dstStatus); // Store the result in the state
  }, []);

  return (
    <div>
      {isDST !== null ? (
        <p>Is DST on 2024-06-01 in New York? {isDST ? "Yes" : "No"}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default HandlingDaylight;
