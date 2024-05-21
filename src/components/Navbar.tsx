const Navbar = () => {
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
                stroke="black"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </p>
          <a className="nav-button" href="">
            Register now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
