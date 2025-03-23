import { Button } from '@/components/ui/button';
import cn from 'classnames';
import NavLinks from './NavLinks';

interface MobileNavProps {
  className?: string;
}

const MobileNav = ({ className }: MobileNavProps) => {
  return (
    <div className={cn(
      "md:hidden mt-6 py-8 px-6 bg-shortly-voilet rounded-lg w-full text-center", 
      className
    )}>
      <NavLinks className="flex flex-col space-y-6 mb-6" mobile />
      
      <div className="border-t border-gray-400/40 pt-6 flex flex-col space-y-4 mt-6">
        <Button 
          variant="ghost" 
          className="text-white hover:text-shortly-voilet hover:opacity-75 text-lg w-full rounded-full"
        >
          Login
        </Button>
        <Button 
          variant="cyanPrimary"
          size="lg"
          className="w-full rounded-full text-lg"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default MobileNav;