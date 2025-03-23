import { useState } from "react";
import { Menu, X } from "lucide-react";
import cn from "classnames";

// UI components
import { Button } from "@/components/ui/button";

// Local components
import Logo from "../Logo";
import NavLinks from "../NavLinks";
import MobileNav from "../MobileNav";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={cn("w-full py-6 ", className)}>
      <div className="section-wrapper">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-between items-center ml-8">
            <NavLinks className="flex items-center space-x-8" />

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-shortly-grayish-voilet hover:text-very-dark-blue rounded-full py-3 px-3.5 cursor-pointer"
              >
                Login
              </Button>
              <Button
                variant="cyanPrimary"
                className="rounded-full cursor-pointer"
              >
                Sign Up
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
              onClick={toggleMenu}
              className="text-shortly-grayish-voilet"
            >
              {isMenuOpen ? (
                <X className="size-7" />
              ) : (
                <Menu className="size-7" />
              )}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && <MobileNav />}
      </div>
    </header>
  );
};

export default Navbar;
