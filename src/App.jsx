import { useEffect, useState } from "react";
import Body from "./pages/Body";
import SecondaryContainer from "./pages/SecondaryContainer";
import FourthContainer from "./pages/FourthContainer";
import FifthContainer from "./pages/FifthContainer";
import LastContainer from "./pages/LastContainer";
import Footer from "./pages/Footer";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    if (!loading) {
      const sections = document.querySelectorAll('.fade-in');
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      sections.forEach(section => observer.observe(section));


      return () => sections.forEach(section => observer.unobserve(section));
    }
  }, [loading]);

  if (loading) {
    return <Loading />;
  }


  return (
    <div className="w-full">
      <div className="lg:px-[64px] md:px-[46px] sm:px-[30px] px-4 py-[14px] fade-in">
        <Body />
      </div>
      <div className="fade-in">
        <SecondaryContainer />
      </div>
      <div className="fade-in">
        <FourthContainer />
      </div>
      <div className="fade-in">
        <FifthContainer />
      </div>
      <div className="fade-in">
        <LastContainer />
      </div>
      <hr />
      <div className="fade-in">
        <Footer />
      </div>
    </div>
  );
}

export default App;
