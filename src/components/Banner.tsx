import Countdown from "./Countdown";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-text">
        <h1 className="banner-heading">BECON24 IS HERE</h1>
        <p className="banner-subheading">
          A <span>7-day</span> life-changing event
        </p>
        <Countdown />
        <p className="banner-date">AUGUST 6TH - 12TH, 2023</p>
        <button className="banner-btn">Register now</button>
      </div>
      <img className="banner-img" src="/banner.png" alt="Becon 2 s024" />
    </div>
  );
};

export default Banner;
