import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t-4 border-black mt-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="font-black text-2xl md:text-3xl tracking-wide font-heading">
          MINIMIZING CHAOS, MAXIMIZING TECH.
        </p>

        <div className="flex space-x-6 text-lg font-bold">
          <a
            href="https://github.com/nish-debug15"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#e53e3e] transition-colors nav-link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nishit-patell/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#e53e3e] transition-colors nav-link"
          >
            LinkedIn
          </a>
          <a
            href="mailto:patelnishit118@gmail.com"
            className="hover:text-[#e53e3e] transition-colors nav-link"
          >
            Email
          </a>
          <a
            href="https://www.instagram.com/nishhx0/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#e53e3e] transition-colors nav-link"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
