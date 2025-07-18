import { Twitter, Linkedin, Github, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Twitter", href: "https://x.com/SorrshaTech", icon: Twitter },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/sorrshatech/", icon: Linkedin },
    { name: "GitHub", href: "https://github.com/SorrshaTech", icon: Github },
    { name: "Email", href: "mailto:hello@sorrshatech.com", icon: Mail },
  ];

  const navLinks = {
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Company", href: "/company" },
      { name: "Contact", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column - Takes up more space */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-medium text-slate-900 mb-4">SorrshaTech</h3>
            <p className="text-slate-500 text-sm mb-4">
              Empowering businesses with innovative technology solutions.
            </p>
            <p className="text-slate-400 text-xs">
              Owned & Operated by Sohan Sharma
            </p>
          </div>

          {/* Company Links */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-medium text-slate-900 mb-4">Company</h4>
            <ul className="space-y-3">
              {navLinks.Company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-slate-900 text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-medium text-slate-900 mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-slate-400 hover:text-slate-900 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} SorrshaTech. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/privacy" className="text-slate-400 hover:text-slate-600 text-sm">
              Privacy Policy
            </a>
            <a href="/terms" className="text-slate-400 hover:text-slate-600 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
