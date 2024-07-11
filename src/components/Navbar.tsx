import { useState } from "react";
import { socials, socialsTwo } from "../utils/data";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-wrapper">
      <nav className="nav">
        <a href="#home">
          <img src="/logo.png" alt="EGFM Logo" />
        </a>
        <button
          className="nav-menu"
          onClick={() => {
            setOpen(!open);
            document
              .querySelector(".nav-wrap")
              ?.classList.toggle("nav-wrap-mobile");
          }}
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="28"
              height="28"
              viewBox="0 0 50 50"
            >
              <path
                fill="currentColor"
                stroke="currentColor"
                d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"
              ></path>
            </svg>
          ) : (
            <svg
              width="28"
              height="27"
              viewBox="0 0 28 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2.8335H26"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 13.5H26"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 24.1665H26"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
        <div className="nav-wrap">
          <ul className="nav-links">
            <li>
              <a href="#about-becon">About BECON</a>
            </li>
            <li>
              <a href="https://www.egfm.org/about-us" target="_blank">
                About EGFM
              </a>
            </li>
            <li>
              <a href="#faqs">FAQs</a>
            </li>
          </ul>
          <div className="nav-details">
            <div className="dropdown-wrapper">
              <p className="nav-dropdown">
                Follow BECON online
                <svg
                  width="19"
                  height="9"
                  viewBox="0 0 19 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.34 0.951172L10.82 7.47117C10.05 8.24117 8.79 8.24117 8.02 7.47117L1.5 0.951172"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
              <div className={`socials`}>
                <div className="socials-wrapper">
                  <div className="socials-icons">
                    {socials.map((social) => (
                      <a
                        key={social.title}
                        title={social.title}
                        href={social.link}
                        target="_blank"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                  <div>
                    {socialsTwo.map((social) => (
                      <a
                        href={social.link}
                        target="_blank"
                        className="social"
                        key={social.title}
                      >
                        <img src={social.img} alt={social.title} />

                        <div
                          className="social-text"
                          dangerouslySetInnerHTML={{ __html: social.title }}
                        ></div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <a
              className="nav-button"
              target="_blank"
              href="https://events.egfm.org/"
            >
              Register now
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
