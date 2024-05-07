import About from "./components/About";
import AnyQuestion from "./components/AnyQuestion";
import Banner from "./components/Banner";
import FAQs from "./components/FAQS";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Reasons from "./components/Reasons";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Reasons />
      <FAQs />
      <AnyQuestion />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
