import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Company", href: "/company" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNavigate = (href: string) => {
    navigate(href);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-0" : "bg-transparent py-2"
      }`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a
            href="#"
            className="flex-shrink-0 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="text-2xl font-bold text-slate-900 tracking-tight group-hover:opacity-80 transition-opacity duration-200">SorrshaTech</span>
          </a>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigate(item.href);
                    }}
                    className={`relative px-3 py-2 text-sm font-light text-slate-600 hover:text-slate-900 transition-colors duration-300 group`}
                  >
                    <span className="relative">
                      {item.name}
                      <span
                        className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full ${
                          isActive ? "w-full" : ""
                        }`}
                      />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={`relative h-12 w-12 rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-md ${
                isOpen ? "text-slate-900" : "text-slate-700"
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6 transition-transform duration-300" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={false}
            animate={isOpen ? "open" : "closed"}
          >
            <motion.div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              variants={{
                open: { opacity: 1, pointerEvents: "auto" },
                closed: { opacity: 0, pointerEvents: "none" },
              }}
              transition={{ duration: 0.2 }}
            />

            <motion.div
              className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-xl"
              variants={{
                open: { x: 0 },
                closed: { x: "100%" },
              }}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            >
              <div className="flex flex-col h-full p-6 space-y-4">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-light text-slate-900">Menu</h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                  >
                    <X className="h-5 w-5 text-slate-600" />
                  </button>
                </div>

                <nav className="flex-1 space-y-2" aria-label="Mobile Navigation">
                  {navItems.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        tabIndex={0}
                        aria-current={isActive ? "page" : undefined}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigate(item.href);
                        }}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-light transition-colors ${
                          isActive
                            ? "bg-slate-50 text-slate-900"
                            : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        <span>{item.name}</span>
                        <ArrowUpRight
                          className={`w-4 h-4 transition-transform ${
                            isActive ? "text-blue-500" : "text-slate-400"
                          }`}
                        />
                      </a>
                    );
                  })}
                </nav>

                <div className="pt-4 mt-auto border-t border-slate-100">
                  <Button
                    onClick={() => {
                      setIsOpen(false);
                      navigate("/waitlist");
                    }}
                    className="w-full"
                  >
                    Join Waitlist
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
