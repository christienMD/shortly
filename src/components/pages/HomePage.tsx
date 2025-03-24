import CtaSection from "../sections/CtaSection";
import Hero from "../sections/Hero";
import ShortenerForm from "../sections/ShortnerForm";
import StatisticsSection from "../sections/StaticsSection";
import { useState } from "react";

export interface ShortenedLink {
  original: string;
  shortened: string;
  copied: boolean;
}

const HomePage = () => {
  const [shortenedLinks, setShortenedLinks] = useState<ShortenedLink[]>([]);

  // Handle copying to clipboard
  const handleCopy = (index: number) => {
    navigator.clipboard.writeText(shortenedLinks[index].shortened);

    // Update the copied state
    setShortenedLinks((prev) =>
      prev.map((link, i) => ({
        ...link,
        copied: i === index ? true : link.copied,
      }))
    );

    // Reset copied state after 3 seconds
    setTimeout(() => {
      setShortenedLinks((prev) =>
        prev.map((link, i) => ({
          ...link,
          copied: i === index ? false : link.copied,
        }))
      );
    }, 3000);
  };

  return (
    <div className="overflow-hidden">
      <Hero />
      
      {/* Container with relative positioning */}
      <div className="relative">
        <div className="h-8 md:h-12"></div>
        
        {/* Form positioned absolutely to stay fixed */}
        <div className="relative z-20">
          <ShortenerForm 
            shortenedLinks={shortenedLinks}
            setShortenedLinks={setShortenedLinks}
          />
        </div>
        
        {/* Statistics section contains the links display */}
        <StatisticsSection 
          shortenedLinks={shortenedLinks}
          handleCopy={handleCopy}
        />
      </div>
      
      <CtaSection />
    </div>
  );
};

export default HomePage;