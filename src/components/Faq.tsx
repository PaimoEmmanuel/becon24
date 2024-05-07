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
        <svg
          width="19"
          height="3"
          viewBox="0 0 19 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.6667 2.66667H0V0H18.6667V2.66667Z" fill="black" />
        </svg>
      </button>
      <p
        className={`faq-text ${close ? "open" : ""}`}
        dangerouslySetInnerHTML={{ __html: answer }}
      ></p>
    </div>
  );
};
export default Faq;
