import CtaSection from "../sections/CtaSection";
import Hero from "../sections/Hero";
import ShortenerForm from "../sections/ShortnerForm";
import StatisticsSection from "../sections/StaticsSection";


const HomePage = () => {
  return (
    <div className="flex flex-col overflow-hidden">
    <Hero />
    
    <div className="relative -mb-20">
      <ShortenerForm />
    </div>
    
    <div className="pt-32">
      <StatisticsSection />
    </div>
    
    <CtaSection />
  </div>
  );
};

export default HomePage;