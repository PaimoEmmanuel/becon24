import { useEffect, useState } from "react";

interface TestimonyProps {
  testimonies: {
    name: string;
    content: string;
    image: string;
    grayImage: string;
  }[];
}

const Testimony = ({ testimonies }: TestimonyProps) => {
  const [currentTestimony, setCurrentTestimony] = useState(0);

  useEffect(() => {
    const testimonyInterval = setInterval(() => {
      setCurrentTestimony((currentTestimony) =>
        currentTestimony < testimonies.length - 1 ? currentTestimony + 1 : 0
      );
    }, 10000);
    return () => clearInterval(testimonyInterval);
  }, [testimonies.length]);

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
          <img
            src={testimonies[currentTestimony].grayImage}
            alt={testimonies[currentTestimony].name}
          />
        </div>
      </div>
    </div>
  );
};
export default Testimony;
