import { useState } from "react";

interface FAQProps {
  title: string;
  answer: string;
}
const Faq: React.FC<FAQProps> = ({ title, answer }) => {
  const [close, setClose] = useState(true);
  return (
    <div className="faq">
      <button
        className="faq-title"
        onClick={() => {
          setClose(!close);
        }}
      >
        <h5>{title}</h5>
        {close ? (
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.6667 10.6667H10.6667V18.6667H8V10.6667H0V8H8V0H10.6667V8H18.6667V10.6667Z"
              fill="black"
            />
          </svg>
        ) : (
          <svg
            width="19"
            height="3"
            viewBox="0 0 19 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.6667 2.66667H0V0H18.6667V2.66667Z" fill="black" />
          </svg>
        )}
      </button>
      <p
        className={`faq-text ${close ? "open" : ""}`}
        dangerouslySetInnerHTML={{ __html: answer }}
      ></p>
    </div>
  );
};
export default Faq;
