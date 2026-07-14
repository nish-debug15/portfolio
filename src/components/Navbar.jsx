import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const links = [
    { label: 'ABOUT', href: '#about' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'LEADERSHIP', href: '#leadership' },
    { label: 'PROJECTS', href: '#projects' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b-2 border-black transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-sm brutal-shadow' : 'bg-white/70 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-black font-heading tracking-tight">
          NISHIT PATEL
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex space-x-8 font-bold text-sm tracking-wide">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex">
          <a
            href="https://mail.google.com/mail/?view=cm&to=patelnishit118@gmail.com&su=Let's%20Connect"
            target="_blank"
            rel="noreferrer"
            className="brutal-border brutal-shadow-hover bg-[#e53e3e] text-white px-6 py-2.5 font-bold text-sm transition-all"
            aria-label="Let's Connect — send an email"
          >
            LET'S CONNECT
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden brutal-border bg-white p-2 z-[10000] relative"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 w-full bg-black transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-full bg-black transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-full bg-black transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`mobile-menu ${menuOpen ? 'open' : ''} fixed inset-0 top-20 md:hidden`}
        style={{ zIndex: 9999, backgroundColor: '#ffffff' }}
      >
        <div className="flex flex-col items-center pt-12 space-y-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-black font-heading"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://mail.google.com/mail/?view=cm&to=patelnishit118@gmail.com&su=Let's%20Connect"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
            className="brutal-border brutal-shadow bg-[#e53e3e] text-white px-8 py-3 font-bold text-lg"
            aria-label="Let's Connect — send an email"
          >
            LET'S CONNECT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
