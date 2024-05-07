const Countdown = () => {
  return (
    <div className="countdown">
      <TimeFigure figure={45} time="DAYS" />
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
      <TimeFigure figure={22} time="HOURS" />
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
      <TimeFigure figure={34} time="MINS" />
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
      <TimeFigure figure={12} time="SECS" />
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
