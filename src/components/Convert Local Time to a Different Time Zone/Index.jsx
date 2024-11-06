
import moment from 'moment-timezone';

const ConvertLocalToDiff = () => {
  // Calculate the local time
  const localTime = moment();
  
  // Calculate the time in Tokyo
  const timeInTokyo = localTime.clone().tz("Asia/Tokyo").format("YYYY-MM-DD HH:mm:ss");

  return (
    <div>
      {/* Render the time in Tokyo */}
      <p>Time in Tokyo: {timeInTokyo}</p>
    </div>
  );
}

export default ConvertLocalToDiff;
