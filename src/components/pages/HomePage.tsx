import CtaSection from "../sections/CtaSection";
import Hero from "../sections/Hero";
import StatisticsSection from "../sections/StaticsSection";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <StatisticsSection />
      <CtaSection />
    </div>
  );
};

export default HomePage;
