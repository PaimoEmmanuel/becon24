import ImageGrid from "./ImageGrid";
import Testimony from "./Testimony";

const Reasons = () => (
  <div className="reasons">
    <h3 className="reasons-heading">
      WHY YOU SHOULD ATTEND BELIEVERS’ CONVENTION?
    </h3>
    <div className="reasons-btn-grp">
      <button className="active">Ministers</button>
      <button>Participants</button>
    </div>
    <Testimony />
    <div className="bg-[#000000]">
      <div className="previous">
        <h4 className="previous-heading">
          PREVIOUSLY ON <span>EGFM BELIEVERS’ CONVENTION</span>
        </h4>
        <div className="previous-text">
          <p>9 years and on…</p> <br />
          <p>
            Season after season, through the revelation of the divine mysteries,
            Believers' Convention has become even more beautiful as we have
            drawn nearer to the things of God’s glory.
          </p>
          <br />
          <p>
            From the days of The Gathering of 2 or 3, till the dawning of Who is
            Like God, the light of the gospel has continued to shine brighter
            upon every heart that diligently participates.
          </p>
        </div>
      </div>
    </div>
    <div className="previous-grid">
      <svg
        className="top-bg"
        width="777"
        height="1516"
        viewBox="0 0 777 1516"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_1158_376)">
          <ellipse
            cx="729.17"
            cy="758.001"
            rx="221"
            ry="264"
            transform="rotate(-23.9614 729.17 758.001)"
            fill="#F4DBA8"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1158_376"
            x="0.474609"
            y="0.528564"
            width="1457.39"
            height="1514.95"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="250"
              result="effect1_foregroundBlur_1158_376"
            />
          </filter>
        </defs>
      </svg>
      <ImageGrid />
      <svg
        className="bottom-bg"
        width="754"
        height="1516"
        viewBox="0 0 754 1516"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_1158_377)">
          <ellipse
            cx="25.17"
            cy="758.001"
            rx="221"
            ry="264"
            transform="rotate(-23.9614 25.17 758.001)"
            fill="#F4DBA8"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1158_377"
            x="-703.525"
            y="0.528564"
            width="1457.39"
            height="1514.95"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="250"
              result="effect1_foregroundBlur_1158_377"
            />
          </filter>
        </defs>
      </svg>
    </div>

    <div className="bg-[#000000]">
      <div className="stream">
        <h4 className="stream-heading">
          STREAM <span>BECON 24 NOW</span>
        </h4>
        <div className="stream-cards">
          <div className="stream-card">
            <img className="stream-icon" src="/mixlr.png" alt="USE MIXLR" />
            <p className="stream-text">STREAM ON MIXLR</p>
            <a className="stream-link" href="" target="_blank">
              USE MIXLR <span>→</span>
            </a>
          </div>
          <div className="stream-card">
            <img className="stream-icon" src="/mixlr.png" alt="USE YOUTUBE" />
            <p className="stream-text">STREAM ON YOUTUBE</p>
            <a className="stream-link" href="" target="_blank">
              USE YOUTUBE <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Reasons;
