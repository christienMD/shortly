import { Button } from '@/components/ui/button';
import cn from 'classnames';

interface CtaSectionProps {
  className?: string;
}

const CtaSection = ({ className }: CtaSectionProps) => {
  return (
    <section 
      className={cn(
        "py-14 md:py-16 bg-shortly-voilet relative overflow-hidden", 
        className
      )}
      style={{
        backgroundImage: `url('/images/bg-boost-desktop.svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="section-wrapper text-center relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 md:mb-8">
          Boost your links today
        </h2>
        <Button 
          variant="cyanPrimary" 
          size="xl" 
          className="text-lg font-bold px-10 py-3 h-auto rounded-full"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;