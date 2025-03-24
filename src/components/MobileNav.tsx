import { Button } from '@/components/ui/button';
import cn from 'classnames';
import NavLinks from './NavLinks';

interface MobileNavProps {
  className?: string;
}

const MobileNav = ({ className }: MobileNavProps) => {
  return (
    <div className={cn(
      "md:hidden absolute left-6 right-6 top-20 py-10 px-6 bg-shortly-voilet rounded-lg text-center z-50",
      className
    )}>
      <NavLinks className="flex flex-col space-y-6" mobile />
      
      <div className="border-t border-gray-500/30 pt-6 flex flex-col space-y-4 mt-6">
        <Button 
          variant="ghost" 
          className="text-white hover:text-shortly-cyan hover:bg-transparent font-bold text-lg h-12"
        >
          Login
        </Button>
        <Button 
          variant="cyanPrimary"
          className="w-full rounded-full font-bold text-lg h-12"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default MobileNav;