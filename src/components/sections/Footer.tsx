import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

import Logo from "../Logo";

interface FooterProps {
  className?: string;
}

interface FooterSection {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

const Footer = ({ className }: FooterProps) => {
  const footerLinks: FooterSection[] = [
    {
      title: "Features",
      links: [
        { label: "Link Shortening", href: "/features#shortening" },
        { label: "Branded Links", href: "/features#branded" },
        { label: "Analytics", href: "/features#analytics" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/resources/blog" },
        { label: "Developers", href: "/resources/developers" },
        { label: "Support", href: "/resources/support" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Our Team", href: "/team" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ];

  const socialLinks = [
    { icon: "/images/icon-facebook.svg", href: "https://facebook.com", label: "Facebook" },
    { icon: "/images/icon-twitter.svg", href: "https://twitter.com", label: "Twitter" },
    { icon: "/images/icon-pinterest.svg", href: "https://pinterest.com", label: "Pinterest" },
    { icon: "/images/icon-instagram.svg", href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <footer className={cn("bg-[#232127] py-16 w-full", className)}>
      <div className="section-wrapper">
        <div className="flex flex-col md:flex-row">
          {/* Logo */}
          <div className="mb-12 md:mb-0 md:w-1/3 flex justify-center md:justify-start">
            <Logo className="text-white"/>
          </div>

          {/* Link Sections */}
          <div className="flex flex-col md:flex-row md:w-2/3 md:justify-between">
            {footerLinks.map((section) => (
              <div 
                key={section.title} 
                className="mb-10 md:mb-0 text-center md:text-left"
              >
                <h3 className="text-white font-bold mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link 
                        to={link.href} 
                        className="text-shortly-gray hover:text-shortly-cyan transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social Media Links */}
            <div className="flex justify-center md:justify-start space-x-6 mt-8 md:mt-0">
              {socialLinks.map(({ icon, href, label }) => (
                <Link 
                  key={label}
                  to={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white hover:text-shortly-cyan transition-colors"
                >
                  <img src={icon} alt={label} className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;