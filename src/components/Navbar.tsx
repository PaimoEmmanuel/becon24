import { useEffect, useRef, useState } from "react";
import { socials, socialsTwo } from "../utils/data";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    // const specifiedElement = document.getElementById("testDiv");
    document.addEventListener("click", function (event) {
      if (dropdownRef.current) {
        const isClickInside = dropdownRef.current.contains(
          event.target as Node
        );
        if (isClickInside) {
          console.log("You clicked inside");
          setShowDropdown(true);
        } else {
          console.log("You clicked outside");
          setShowDropdown(false);
        }
      }
    });
  }, []);
  return (
    <nav className="nav">
      <img src="/logo.png" alt="" />
      <button className="nav-menu">
        <svg
          width="28"
          height="27"
          viewBox="0 0 28 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2.8335H26"
            stroke="#292D32"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2 13.5H26"
            stroke="#292D32"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2 24.1665H26"
            stroke="#292D32"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div className="nav-wrap">
        <ul className="nav-links">
          <li>
            <a href="">About EGFM</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>
        <div className="nav-details">
          <p ref={dropdownRef} className="nav-dropdown">
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
                stroke="black"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </p>
          <div className={`socials ${showDropdown ? "socials-show" : ""}`}>
            <div>
              {socials.map((social) => (
                <div
                  className="social"
                  key={social.title}
                  style={{ backgroundColor: social.bgColor }}
                >
                  {social.icon}
                  <a
                    href={social.link}
                    target="_blank"
                    style={{ color: social.color }}
                  >
                    {social.title}
                  </a>
                </div>
              ))}
            </div>
            <div>
              {socialsTwo.map((social) => (
                <div className="social" key={social.title}>
                  <img src={social.img} alt={social.title} />
                  <a href={social.link} target="_blank">
                    {social.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <a className="nav-button" href="">
            Register now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
