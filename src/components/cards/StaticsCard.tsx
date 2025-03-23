import cn from 'classnames';

interface Props {
  title: string;
  description: string;
  iconSrc: string;
  className?: string;
}

const StatisticsCard = ({ title, description, iconSrc, className }: Props) => {
  return (
    <div className={cn("bg-white rounded-md p-8 relative z-10 text-lg", className)}>
      {/* Icon */}
      <div className="bg-shortly-voilet rounded-full p-5 inline-flex items-center justify-center absolute -top-12 left-1/2 md:left-8 transform -translate-x-1/2 md:translate-x-0">
        <img src={iconSrc} alt={title} className="w-8 h-8" />
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-bold text-shortly-dark-voilet mt-10 mb-4 text-center md:text-left">
        {title}
      </h3>
      <p className="text-shortly-grayish-voilet text-center md:text-left">
        {description}
      </p>
    </div>
  );
};

export default StatisticsCard;