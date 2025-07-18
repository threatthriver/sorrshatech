import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

// Define section colors and their corresponding styles
type SectionColors = {
  [key: string]: {
    bg: string;
    text: string;
    logo: string;
  };
};

const sectionColors: SectionColors = {
  hero: {
    bg: 'bg-transparent',
    text: 'text-white',
    logo: 'text-white drop-shadow-lg hover:drop-shadow-xl transition-all duration-300'
  },
  default: {
    bg: 'bg-white/90 backdrop-blur-lg shadow-lg',
    text: 'text-slate-900',
    logo: 'bg-gradient-to-r from-indigo-700 via-blue-600 to-indigo-700 bg-clip-text text-transparent font-bold bg-[length:200%_auto] hover:bg-right transition-all duration-1000 ease-in-out'
  },
  about: {
    bg: 'bg-indigo-50/90 backdrop-blur-lg shadow-lg',
    text: 'text-indigo-900',
    logo: 'bg-gradient-to-r from-indigo-700 to-purple-600 bg-clip-text text-transparent'
  },
  projects: {
    bg: 'bg-blue-50/90 backdrop-blur-lg shadow-lg',
    text: 'text-blue-900',
    logo: 'bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent'
  },
  contact: {
    bg: 'bg-violet-50/90 backdrop-blur-lg shadow-lg',
    text: 'text-violet-900',
    logo: 'bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'
  }
};

const navItems = [
  { name: "Home", href: "/" },
  { name: "Company", href: "/company" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const Navigation = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Dropdown logic removed; no longer needed.
      // if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      //   setOpenDropdown(null);
      // }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Update current section based on scroll position
  const updateCurrentSection = useCallback(() => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    let current = 'hero';
    sections.forEach((element) => {
      const section = element as HTMLElement;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.id;
      }
    });

    setCurrentSection(current);
  }, []);

  // Set up intersection observer for section detection
  useEffect(() => {
    const handleScroll = () => {
      updateCurrentSection();
      
      // Handle scroll hide/show logic
      const latest = window.scrollY;
      const previous = scrollY.getPrevious() || 0;
      
      if (latest > 100 && latest > previous && !isOpen) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      
      setScrolled(latest > 10);
    };

    // Initial check
    updateCurrentSection();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen, updateCurrentSection]);

  // Get current section styles
  const currentStyles = sectionColors[currentSection] || sectionColors.default;

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
            "relative flex items-center justify-between rounded-full h-16 px-6",
            "backdrop-blur-md border border-white/30 bg-white/20 shadow-lg",
            scrolled ? currentStyles.bg : '',
            scrolled ? currentStyles.text : 'text-white'
          )}
          style={{
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          role="navigation"
          aria-label="Main Navigation"
        >
          {/* Logo */}
          <button onClick={() => navigate("/")} className="flex items-center space-x-2 group" aria-label="Home">
            <div className="w-10 h-10 flex items-center justify-center group-hover:rotate-12 transition-transform">
              <img 
                src="/favicon/logo.png" 
                alt="SorrshaTech Logo" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <motion.span
              className={cn(
                "text-2xl font-extrabold tracking-tight relative group",
                scrolled ? currentStyles.logo : '',
                'transition-all duration-300 ease-out',
                'focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2'
              )}
              whileHover={{ scale: 1.05, boxShadow: '0 4px 32px 0 rgba(80, 130, 255, 0.24)' }}
              whileTap={{ scale: 0.98 }}
              tabIndex={0}
            >
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-700 bg-clip-text text-transparent relative z-10 font-extrabold drop-shadow-[0_2px_8px_rgba(80,130,255,0.18)]">Sorrsha</span>
              <span className="bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent relative z-10 animate-gradient-x font-extrabold drop-shadow-[0_2px_8px_rgba(80,130,255,0.18)]">Tech</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
              <span className="absolute inset-0 rounded-full pointer-events-none bg-white/10 blur-xl opacity-60 group-hover:opacity-80 transition-all duration-300"></span>
            </motion.span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                onClick={() => handleNavigate(item.href)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 relative overflow-hidden group/nav-button",
                  "text-slate-700 hover:text-indigo-600",
                  "after:absolute after:inset-0 after:bg-indigo-50/50 after:rounded-full",
                  "after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-200",
                  "hover:scale-105 hover:shadow-sm"
                )}
              >
                {item.name}
              </Button>
            ))}

          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} className={cn("p-2 rounded-full transition-colors", "text-slate-700 hover:text-indigo-600")} aria-label={isOpen ? "Close menu" : "Open menu"}>
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
              <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-slate-200/50 overflow-hidden">
                <div className="px-4 py-3 space-y-1">
                  {navItems.map((item) => (
                    <div key={item.name} className="border-b border-slate-200/80 last:border-0">
                      <button
                        onClick={() => handleNavigate(item.href)}
                        className="flex items-center w-full text-left px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-100/80 rounded-lg transition-colors"
                      >
                        {item.name}
                      </button>
                    </div>
                  ))}
                  <div className="pt-4 pb-2 px-3">
                    <Button onClick={() => window.open("https://app.sorrshatech.com", "_blank")} className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-md">
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
