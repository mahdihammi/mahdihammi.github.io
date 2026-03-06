import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Articles', href: '#articles' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map(i => i.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar fixed top-0 left-0 right-0 z-50 ${scrolled ? 'scrolled' : ''}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" onClick={() => handleClick('#home')} className="font-display text-lg font-bold" style={{ color: 'hsl(var(--primary))' }}>
            {'<DE />'}
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className={`nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-0.5 bg-foreground transition-all" style={mobileOpen ? { transform: 'rotate(45deg) translate(2px, 2px)' } : {}} />
            <span className="block w-5 h-0.5 bg-foreground transition-all" style={mobileOpen ? { opacity: 0 } : {}} />
            <span className="block w-5 h-0.5 bg-foreground transition-all" style={mobileOpen ? { transform: 'rotate(-45deg) translate(2px, -2px)' } : {}} />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <button
          className="absolute top-5 right-6 text-2xl"
          style={{ color: 'hsl(var(--foreground))' }}
          onClick={() => setMobileOpen(false)}
        >
          ✕
        </button>
        {navItems.map(item => (
          <button
            key={item.href}
            onClick={() => handleClick(item.href)}
            className={`nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default Navbar;
