import { useRef, useState } from "react";

interface TestimonyProps {
  testimonies: {
    name: string;
    content: string;
    image: string;
    video: string;
  }[];
}

const Testimony = ({ testimonies }: TestimonyProps) => {
  const [currentTestimony, setCurrentTestimony] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <div className="bg-[#000000]">
      <div className="testimony">
        <div className="testimony-text">
          <div>
            <p className="testimony-name">
              {testimonies[currentTestimony].name}
            </p>
            <p
              className="testimony-content"
              dangerouslySetInnerHTML={{
                __html: testimonies[currentTestimony].content,
              }}
            ></p>
          </div>
          <div className="testimony-options">
            {testimonies.map((testimony, index) => (
              <button
                key={testimony.name}
                className={currentTestimony === index ? "active" : ""}
                onClick={() => {
                  setCurrentTestimony(index);
                }}
              >
                <img src={testimony.image} alt={testimony.name} />
              </button>
            ))}
          </div>
        </div>
        <div className="testimony-img">
          <button
            className="testimony-play"
            onClick={() => {
              videoRef.current?.play();
            }}
          >
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.7" filter="url(#filter0_b_1158_386)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42ZM15.375 30.7428L32.25 21L15.375 11.2572L15.375 30.7428Z"
                  fill="black"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_1158_386"
                  x="-96.5106"
                  y="-96.5106"
                  width="235.021"
                  height="235.021"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur
                    in="BackgroundImageFix"
                    stdDeviation="48.2553"
                  />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_1158_386"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_1158_386"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </button>
          <video
            ref={videoRef}
            src={testimonies[currentTestimony].video}
            loop
          ></video>
        </div>
      </div>
    </div>
  );
};
export default Testimony;
