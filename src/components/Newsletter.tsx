const Newsletter = () => {
  return (
    <div className="newsletter">
      <p className="newsletter-supertitle">OUR NEWSLETTER</p>
      <h6 className="newsletter-title">STAY TUNED FOR BECON’24 UPDATES</h6>
      <form className="newsletter-form" action="">
        <input
          className="newsletter-input"
          type="email"
          placeholder="your email address"
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
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
