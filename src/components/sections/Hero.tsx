import { Button } from "@/components/ui/button";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <section className={className}>
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between py-8 md:py-16 w-full">
        {/* Text Content */}
        <div className="md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-shortly-dark-voilet leading-tight">
            More than just shorter links
          </h1>
          <p className="text-shortly-grayish-voilet my-4 md:my-6 md:text-lg max-w-md mx-auto md:mx-0">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button
            variant="cyanPrimary"
            size="lg"
            className="font-bold rounded-full text-lg py-5"
          >
            Get Started
          </Button>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 relative">
          <div className="relative md:absolute md:right-[-15%] lg:right-[-25%] md:top-[-10%] lg:top-[-15%] w-full h-full">
            <img
              src="/images/illustration-working.svg"
              alt="Person working at computer"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
