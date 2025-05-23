import { useEffect, useState } from "react";

function getTimeRemaining(endtime: string) {
  const total = Date.parse(endtime) - Date.parse(new Date().toString());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}

const Countdown = () => {
  const [time, setTime] = useState(getTimeRemaining("2025-08-17"));
  useEffect(() => {
    setInterval(() => {
      setTime(getTimeRemaining("2025-08-17"));
    }, 1000);
  }, []);

  return (
    <div className="countdown">
      <TimeFigure figure={time.days} time="DAYS" />
      <span className="countdown-colon">
        <svg
          width="6"
          height="21"
          viewBox="0 0 6 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="3" cy="3.5" r="3" fill="#EBDCC0" />
          <circle cx="3" cy="17.5" r="3" fill="#EBDCC0" />
        </svg>
      </span>
      <TimeFigure figure={time.hours} time="HOURS" />
      <span className="countdown-colon">
        <svg
          width="6"
          height="21"
          viewBox="0 0 6 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="3" cy="3.5" r="3" fill="#EBDCC0" />
          <circle cx="3" cy="17.5" r="3" fill="#EBDCC0" />
        </svg>
      </span>
      <TimeFigure figure={time.minutes} time="MINS" />
      <span className="countdown-colon">
        <svg
          width="6"
          height="21"
          viewBox="0 0 6 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="3" cy="3.5" r="3" fill="#EBDCC0" />
          <circle cx="3" cy="17.5" r="3" fill="#EBDCC0" />
        </svg>
      </span>
      <TimeFigure figure={time.seconds} time="SECS" />
    </div>
  );
};
interface TimeFigureProps {
  figure: number;
  time: string;
}
const TimeFigure = ({ figure, time }: TimeFigureProps) => (
  <div className="time-figure">
    <p className="figure">{figure}</p>
    <p className="time">{time}</p>
  </div>
);
export default Countdown;
