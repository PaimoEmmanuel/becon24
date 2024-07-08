import FAQ from "./Faq";

const faqs = [
  {
    title: "What is Believers’ Convention?",
    answer:
      "Believers’ Convention is a 7-day camp meeting for every believer longing to be a part of what the Lord is doing in the body of Christ today.",
  },
  {
    title: "Who can attend Egfm Believers’ Convention?",
    answer:
      "Children, adults, believers from every denomination, and ministers. Believers’ Convention is for every believer.",
  },
  {
    title: "Is accommodation available?",
    answer:
      'Yes, there are provisions for accommodation for everyone who is interested in camping throughout the  7 days of the conference. For more information, <a href="https://events.egfm.org/" target="_blank">REGISTER NOW</a>',
  },
  {
    title: "Who organises Believers’ Convention?",
    answer:
      'Believers’ Convention is hosted by the Eternal Glorious Fountain Ministry (EGFM). EGFM is home to many believers from different denominations. Believers’ Convention is the mother of all conventions that the ministry organises. <a href="https://egfm.org/" target="_blank">Learn more</a> about EGFM.',
  },
  {
    title: "Where is the venue for the program?",
    answer:
      'The program holds at <strong>Faith Plaza, Bariga.</strong> <a href="https://www.google.com/maps/dir//Cms,+Bariga+Road,+opposite+Dada+Street,+Bariga+Rd,+Lagos/@6.5347155,3.3053759,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x103b8d0570922f79:0xc7c9f142b0f183d3!2m2!1d3.3877342!2d6.5346998?hl=en-NG&entry=ttu" target="_blank">Use the Map to find us</a>',
  },
];
const FAQs = () => (
  <div id="faqs" className="faqs">
    <p className="faqs-supertitle">FAQS</p>
    <h5 className="faqs-title">FREQUENTLY ASKED QUESTIONS</h5>
    <div className="faqs-wrapper">
      {faqs.map((faq) => (
        <FAQ title={faq.title} answer={faq.answer} key={faq.title} />
      ))}
    </div>
  </div>
);
export default FAQs;
