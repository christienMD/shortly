import CtaSection from "../sections/CtaSection";
import Hero from "../sections/Hero";
import ShortenerForm from "../sections/ShortnerForm";
import StatisticsSection from "../sections/StaticsSection";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ShortenerForm className="mt-24 mb-20" />
      <StatisticsSection />
      <CtaSection />
    </div>
  );
};

export default HomePage;
