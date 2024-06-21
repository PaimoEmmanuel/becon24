import Testimony from "./Testimony";
import InfiniteScroll from "./InfiniteScroll";

const testimonies = [
  {
    name: "Pst. Kolade’s Testimony",
    content:
      "I knew about the Ministry during my undergraduate years and got to know about Believers Convention. I remember my first BECON experience, it was in 2009, and the theme was “The Blessing”. <br><br> I invited my fiancée (now my wife) to attend the convention, and we were truly blessed. The understanding of what the Blessing of God really is became clear to us, and on the last day of the Convention, we both concluded that we would follow the message(Word of Righteousness). <br><br> I am thankful to God for more understanding that has come to me and my wife over the years and for how far we have both  journeyed together in light. <br><br> It’s been over a decade since we both attended our first convention, and we are eternally grateful to God for the fountain that never runs dry as we continue to enjoy God in every season of our lives.",
    image: "/pst-kolade.png",
  },
  {
    name: "Mummy Omilana's Testimony",
    content:
      "Men and women gather from all over the world for a great encounter, irrespective of denomination and culture. Believers’ Convention provides a platform for intense fellowship with the Lord and the brethren. <br> <br> Men and women gather from all over the world for a great encounter, irrespective of denomination and culture. Believers’ Convention provides a platform for intense fellowship with the Lord and the brethren. <br><br> Men and women gather from all over the world for a great encounter, irrespective of denomination and culture. Believers’ Convention provides a platform for intense fellowship with the Lord and the brethren.",
    image: "/mummy-leke.png",
  },
  {
    name: "Sis Omosehin Juliana's Testimony",
    content:
      "Men and women gather from all over the world for a great encounter, irrespective of denomination and culture. Believers’ Convention provides a platform for intense fellowship with the Lord and the brethren. <br> <br> Men and women gather from all over the world for a great encounter, irrespective of denomination and culture. Believers’ Convention provides a platform for intense fellowship with the Lord and the brethren. <br><br> Men and women gather from all over the world for a great encounter, irrespective of denomination and culture. Believers’ Convention provides a platform for intense fellowship with the Lord and the brethren.",
    image: "/sis-juliana.png",
  },
  {
    name: "Bro Leye's Testimony",
    content:
      "Men and women gather from all over the world for a great encounter, irrespective of denomination and culture. Believers’ Convention provides a platform for intense fellowship with the Lord and the brethren. <br> <br> Men and women gather from all over the world for a great encounter, irrespective of denomination and culture. Believers’ Convention provides a platform for intense fellowship with the Lord and the brethren. <br><br> Men and women gather from all over the world for a great encounter, irrespective of denomination and culture. Believers’ Convention provides a platform for intense fellowship with the Lord and the brethren.",
    image: "/bro-leye.png",
  },
];

const streamingPlatforms = [
  {
    title: "WAYSTREAM",
    image: "/waystream-lg.png",
    link: "https://waystre.am/live/egfmfountain",
  },
  {
    title: "FOUNTAIN STREAM",
    image: "/fs-lg.png",
    link: "https://fountainstream.com",
  },
  {
    title: "MIXLR",
    image: "/mixlr-lg.png",
    link: "https://egfmfountain.mixlr.com",
  },
  {
    title: "YOUTUBE",
    image: "/youtube-lg.png",
    link: "https://youtube.com/egfmfountain",
  },
];
const Reasons = () => {
  return (
    <div className="reasons">
      <h3 className="reasons-heading">
        WHY YOU SHOULD ATTEND <span>EGFM BELIEVERS’ CONVENTION?</span>
      </h3>
      <Testimony testimonies={testimonies} />
      <div className="bg-[#000000]">
        <div className="previous">
          <h4 className="previous-heading">
            PREVIOUSLY ON <span>EGFM BELIEVERS’ CONVENTION</span>
          </h4>
          <div className="previous-text">
            <p>9 years and on…</p> <br />
            <p>
              Season after season, through the revelation of the divine
              mysteries, Believers' Convention has become even more beautiful as
              we have drawn nearer to the things of God’s glory.
            </p>
            <br />
            <p>
              From the days of <strong>The Gathering of 2 or 3</strong>, till
              the dawning of <strong>Who is Like God</strong>, the light of the
              gospel has continued to shine brighter upon every heart that
              diligently participates.
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
        <InfiniteScroll />
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
            <span> BECON 24 </span>STREAMING PLATFORMS
          </h4>
          <div className="stream-cards">
            {streamingPlatforms.map((platform, index) => (
              <div
                className={index > 0 ? `stream-card` : "stream-card"}
                key={platform.title}
              >
                <img
                  className="stream-icon"
                  src={platform.image}
                  alt="USE MIXLR"
                />
                <p className="stream-text">{platform.title}</p>
                <a className="stream-link" href={platform.link} target="_blank">
                  visit platform <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
