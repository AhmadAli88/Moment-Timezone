import './App.css';
import Calculating from './components/Calculating Time Differences Across Time Zones/Index';
import ConvertTimeZone from './components/Convert Between Time Zones/Index';
import ConvertLocalToDiff from './components/Convert Local Time to a Different Time Zone/Index';
import DisplayTimeZone from './components/Display Time Zone Abbreviation/Index';
import FormattingDates from './components/Formatting Dates in a Specific Time Zone/Index';
import GetAllTimeZone from './components/Get All Time Zones/Index';
import GetOffset from './components/Get Offset of a Time Zone/Index';
import GetCurrentDateAndTime from './components/Getting the Current Date and Time in a Specific Time Zone/Index';
import HandlingDaylight from './components/Handling Daylight Saving Time (DST)/Index';
import HandlingUserLocalTime from './components/Handling User’s Local Time Zone/Index';
import ParseDates from './components/Parse Dates in a Specific Time Zone/Index';
import Scheduling from './components/Scheduling Events Across Time Zones/Index';

function App() {
  return (
    <div>
      <Calculating />
      <ConvertTimeZone/>
      <ConvertLocalToDiff/>
      <DisplayTimeZone/>
      <FormattingDates/>
      <GetAllTimeZone/>
      <GetOffset/>
      <GetCurrentDateAndTime/>
      <HandlingDaylight/>
      <HandlingUserLocalTime/>
      <ParseDates/>
      <Scheduling/>
    </div>
  );
}

export default App;
