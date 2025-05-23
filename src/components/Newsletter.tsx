import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToMailingList } from "../util/mail-subscription";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = async () => {
    if (email && name) {
      toast
        .promise(addToMailingList(email, name), {
          pending: "Please wait..",
          success: "You have successfully subscribed for updates",
          error: "An error occured while subscribing, please try again.",
        })
        .then(() => {
          setName("");
          setEmail("");
        });
    }
  };
  return (
    <div className="newsletter">
      <p className="newsletter-supertitle">OUR NEWSLETTER</p>
      <h6 className="newsletter-title">STAY TUNED FOR BECON’25 UPDATES</h6>
      <form
        className="newsletter-form"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          className="newsletter-input"
          type="firstname"
          name="firstname"
          placeholder="First Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          className="newsletter-input"
          type="email"
          name="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button className="newsletter-btn">
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.43 0.929688L18.5 6.99969L12.43 13.0697M1.5 6.99969H18.33"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default Newsletter;
