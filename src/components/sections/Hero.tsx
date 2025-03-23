import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const Hero = ({ className }: Props) => {
  return (
    <section className={cn("section-wrapper md:mb-24", className)}>
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 py-6 md:py-16 w-full">
        {/* Text Content */}
        <div className="md:w-1/2 md:mt-0 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-shortly-dark-voilet leading-tight">
            More than just shorter links
          </h1>
          <p className="text-shortly-grayish-voilet my-4 md:my-6 md:text-lg max-w-md mx-auto md:mx-0">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button
            variant="cyanPrimary"
            size="xl"
            className="font-bold rounded-full text-lg py-5"
          >
            Get Started
          </Button>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 relative p-0">
          <div className="
            w-[100%] mx-auto sm:w-[90%] 
            md:w-[125%] md:absolute md:right-[-30%] md:top-[-150px]
            lg:w-[100%] lg:right-[-20%] lg:top-[-160px]
            xl:w-[100%] xl:right-[-30%] xl:top-[-170px]
          ">
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
