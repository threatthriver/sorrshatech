import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Our Work", href: "/company" },
    { name: "Contact", href: "/contact" },

  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { name: "Twitter", href: "https://x.com/SorrshaTech", icon: Twitter },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/sorrshatech/", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/threatthriver/sorrshatech", icon: Github },
  { name: "Email", href: "mailto:contact@sorrshatech.com", icon: Mail },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-white border-t border-slate-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <h3 className="text-xl sm:text-2xl font-medium text-slate-900 mb-4">SorrshaTech</h3>
            <p className="text-slate-500 text-sm mb-4">
              Empowering businesses with innovative technology solutions.
            </p>
            <p className="text-slate-400 text-xs">
              Owned & Operated by Sohan Sharma
            </p>
          </div>

          <FooterLinkColumn title="Company" links={footerLinks.company} />
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm text-center sm:text-left mb-4 sm:mb-0">
            &copy; {currentYear} SorrshaTech. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-900 transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

const FooterLinkColumn = ({ title, links }: { title: string; links: { name: string; href: string }[] }) => (
  <div>
    <h4 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">
      {title}
    </h4>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            to={link.href}
            className="text-slate-500 hover:text-slate-900 text-sm transition-colors"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
