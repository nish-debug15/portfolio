import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

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

  // Logo used in both nav bar and mobile menu header
  const LogoMark = ({ className = '' }) => (
    <a href="#" className={`font-bold font-heading tracking-tight text-xl ${className}`}>
      NISHIT PATEL
    </a>
  );

  // Full-viewport mobile menu — rendered via portal to escape all stacking contexts
  const mobileMenu = menuOpen
    ? createPortal(
        <div
          className="md:hidden"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: '#ffffff',
          }}
        >
          {/* Header row — logo + close button */}
          <div
            className="flex items-center justify-between px-6 border-b-2 border-black"
            style={{ height: '80px' }}
          >
            <LogoMark />
            <button
              onClick={() => setMenuOpen(false)}
              className="brutal-border bg-white p-2"
              aria-label="Close menu"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="2" y1="2" x2="16" y2="16" />
                  <line x1="16" y1="2" x2="2" y2="16" />
                </svg>
              </div>
            </button>
          </div>

          {/* Nav links — stacked, left-aligned, generous spacing */}
          <div className="flex flex-col px-8 pt-10 space-y-7">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-black font-heading tracking-tight block w-full py-2"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA button */}
          <div className="px-8 pt-10">
            <a
              href="https://mail.google.com/mail/?view=cm&to=patelnishit118@gmail.com&su=Let's%20Connect"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="brutal-border brutal-shadow bg-[#e53e3e] text-white px-8 py-4 font-bold text-lg block text-center w-full"
              aria-label="Let's Connect — send an email"
            >
              LET'S CONNECT
            </a>
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b-2 border-black transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-sm brutal-shadow' : 'bg-white/70 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo — NP monogram */}
          <LogoMark />

          {/* Desktop nav links */}
          <div className="hidden md:flex space-x-8 font-bold text-sm tracking-wide">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side — desktop CTA */}
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
            onClick={() => setMenuOpen(true)}
            className="md:hidden brutal-border bg-white p-2"
            aria-label="Open menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className="block h-0.5 w-full bg-black" />
              <span className="block h-0.5 w-full bg-black" />
              <span className="block h-0.5 w-full bg-black" />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu — portaled to document.body, fully outside nav stacking context */}
      {mobileMenu}
    </>
  );
};

export default Navbar;
