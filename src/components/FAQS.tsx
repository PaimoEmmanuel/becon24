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
      'The program holds at <strong>Faith Plaza, Bariga.</strong> <a href="https://egfm.org/" target="_blank">Use the Map to find us</a>',
  },
];
const FAQs = () => (
  <div className="faqs">
    <p className="faqs-supertitle">FAQS</p>
    <h5 className="faqs-title">FREQUENTLY ASKED QUESTIONS</h5>
    <div className="faqs-wrapper">
      {faqs.map((faq) => (
        <FAQ title={faq.title} answer={faq.answer} />
      ))}
    </div>
  </div>
);
export default FAQs;
