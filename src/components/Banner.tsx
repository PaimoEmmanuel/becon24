import Countdown from "./Countdown";
import CursorTransform from "./CursorTransform";

const Banner = () => {
  return (
    <div id="banner-container">
      <div id="home" className="banner">
        <div className="banner-text">
          <h1 className="banner-heading">BECON24 IS HERE</h1>
          <p className="banner-subheading">
            A <span>7-day</span> life-changing event
          </p>
          <Countdown />
          <p className="banner-date">AUGUST 18TH - 24TH, 2024</p>
          <a
            href="https://events.egfm.org/"
            target="_blank"
            className="banner-btn"
          >
            Register now
          </a>
        </div>
        <CursorTransform />
      </div>
    </div>
  );
};

export default Banner;
