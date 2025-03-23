import { Button } from '@/components/ui/button';
import cn from 'classnames';

// Import background pattern if available
// import bgBoostDesktop from '@/assets/bg-boost-desktop.svg';
// import bgBoostMobile from '@/assets/bg-boost-mobile.svg';

interface CtaSectionProps {
  className?: string;
}

const CtaSection = ({ className }: CtaSectionProps) => {
  return (
    <section 
      className={cn(
        "py-16 bg-dark-violet relative overflow-hidden ", 
        className
      )}
      // Style with background pattern
      style={{
        backgroundImage: `url('/images/bg-boost-desktop.svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-24 text-center relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-8">
          Boost your links today
        </h2>
        <Button 
          variant="cyanPrimary" 
          size="xl" 
          className="text-lg px-10 rounded-full"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;