import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

interface NavLinksProps {
  className?: string;
  mobile?: boolean;
}

interface NavLink {
  label: string;
  path: string;
}

const NavLinks = ({ className, mobile = false }: NavLinksProps) => {
  const location = useLocation();

  const navLinks: NavLink[] = [
    { label: "Features", path: "/features" },
    { label: "Pricing", path: "/pricing" },
    { label: "Resources", path: "/resources" },
  ];

  return (
    <ul className={className}>
      {navLinks.map((link) => {
        const isActive = location.pathname === link.path;
        console.log(isActive)

        return (
          <li key={link.path}>
            <Link
              to={link.path}
              className={cn(
                "font-medium transition-colors",
                mobile
                  ? "text-white text-xl font-bold hover:text-shortly-voilet"
                  : "text-shortly-grayish-voilet hover:text-shortly-dark-voilet",
                isActive &&
                  (mobile ? "text-shortly-gray" : "text-shortly-dark-voilet")
              )}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
