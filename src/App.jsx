import {useState, useEffect} from 'react';
import './App.css';


function App() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const isAm = hours < 12;

  const timeString = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).replace(/\s*(AM|PM)/i, '');

  const period = isAm ? 'AM' : 'PM';


  return (
    <>
    <div className="App">
      <div className="clock-container">
        <span className={`time-digits ${isAm ? 'am-mode' : 'pm-mode'}`}>
          {timeString}
        </span>

        <span className={`period ${isAm ? 'am-mode' : 'pm-mode'}`}>
            {period}
        </span>

      </div>
    </div>
    </>
  );
}

export default App;