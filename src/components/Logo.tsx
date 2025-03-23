import { Link } from "react-router-dom";
import cn from "classnames";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Link to="/" className={cn("inline-block", className)}>
      <h1 className="text-3xl font-extrabold text-shortly-voilet">
        Shortly
        </h1>
    </Link>
  );
};

export default Logo;
