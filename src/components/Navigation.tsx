import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";



const navItems = [
  { name: "Home", href: "/" },
  { name: "Company", href: "/company" },
  { name: "Team", href: "/team" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const Navigation = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  const handleScroll = useCallback(() => {
    const latest = window.scrollY;
    const previous = scrollY.getPrevious() || 0;

    if (latest > 100 && latest > previous && !isOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    setScrolled(latest > 10);
  }, [isOpen, scrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  const handleNavigate = (href: string) => {
    navigate(href);
    setIsOpen(false);
  };



  return (
    <motion.header
      ref={navRef}
      variants={{
        visible: { y: 0 },
        hidden: { y: '-120%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className={cn(
          "container mx-auto mt-4 transition-all duration-300 ease-in-out",
          scrolled ? "max-w-4xl" : "max-w-7xl"
        )}
      >
        <motion.nav
          className={cn(
            "relative flex items-center justify-between rounded-full h-16 px-4 sm:px-6 text-foreground transition-all duration-300",
            scrolled
              ? "bg-background/80 backdrop-blur-lg border border-border shadow-sm"
              : "bg-transparent"
          )}
          role="navigation"
          aria-label="Main Navigation"
        >
          {/* Logo */}
          <button onClick={() => navigate("/")} className="flex items-center space-x-2 group" aria-label="Home">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center group-hover:rotate-12 transition-transform">
              <img 
                src="/favicon/logo.png" 
                alt="SorrshaTech Logo" 
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>
            <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-foreground">
              SorrshaTech
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                onClick={() => handleNavigate(item.href)}
                className="px-4 py-2 text-sm font-medium rounded-full text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Button>
            ))}

          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors" aria-label={isOpen ? "Close menu" : "Open menu"}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </motion.nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4"
            >
              <div className="bg-background/90 backdrop-blur-lg rounded-2xl shadow-xl border border-border overflow-hidden">
                <div className="px-4 py-3 space-y-1">
                  {navItems.map((item) => (
                    <div key={item.name} className="border-b border-border/50 last:border-0">
                      <button
                        onClick={() => handleNavigate(item.href)}
                        className="flex items-center w-full text-left px-4 py-3 text-lg font-medium text-foreground hover:bg-primary/10 rounded-lg transition-colors"
                      >
                        {item.name}
                      </button>
                    </div>
                  ))}
                  <div className="pt-4 pb-2 px-3">
                    <Button onClick={() => window.open("https://app.sorrshatech.com", "_blank")} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
