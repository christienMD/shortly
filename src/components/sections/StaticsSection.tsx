import cn from 'classnames';
import StatisticsCard from '../cards/StaticsCard';

interface Props {
  className?: string;
}

const StatisticsSection = ({ className }: Props) => {
  const statisticsData = [
    {
      title: "Brand Recognition",
      description: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
      iconSrc: "/images/icon-brand-recognition.svg",
    },
    {
      title: "Detailed Records",
      description: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      iconSrc: "/images/icon-detailed-records.svg",
    },
    {
      title: "Fully Customizable",
      description: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      iconSrc: "/images/icon-fully-customizable.svg",
    },
  ];

  return (
    <section className={cn("py-20 bg-shortly-gray/10", className)}>
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-shortly-dark-voilet md:mt-12 mb-4">
            Advanced Statistics
          </h2>
          <p className="text-shortly-grayish-voilet text-lg">
            Track how your links are performing across the web with our advanced statistics dashboard.
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative mt-32">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-16 bottom-16 w-2 bg-shortly-cyan 
                          md:left-8 md:right-8 md:w-auto md:h-2 md:top-[45%] 
                          transform -translate-x-1/2 md:translate-x-0 md:translate-y-0"></div>
          
          {/* Cards */}
          <div className="grid gap-20 md:grid-cols-3 md:gap-6 relative z-10">
            {/* First card - positioned higher than the others */}
            <div className="md:self-start md:-mt-10">
              <StatisticsCard {...statisticsData[0]} />
            </div>
            
            {/* Second card - standard position */}
            <div>
              <StatisticsCard {...statisticsData[1]} />
            </div>
            
            {/* Third card - positioned lower than the others */}
            <div className="md:self-end md:mt-16">
              <StatisticsCard {...statisticsData[2]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;