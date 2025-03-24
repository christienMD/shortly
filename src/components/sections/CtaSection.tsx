import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaSectionProps {
  className?: string;
}

const CtaSection = ({ className }: CtaSectionProps) => {
  return (
    <section
      className={cn(
        "py-20 sm:py-16 bg-shortly-voilet relative overflow-hidden",
        className
      )}
    >
      <div
        className="absolute inset-0 z-0 hidden md:block"
        style={{
          backgroundImage: `url('/images/bg-boost-desktop.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0 z-0 md:hidden"
        style={{
          backgroundImage: `url('/images/bg-boost-mobile.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-5 md:mb-8">
          Boost your links today
        </h2>
        <Button
          variant="cyanPrimary"
          size="xl"
          className="text-lg font-bold px-12 py-4 h-auto rounded-full"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
