import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { CONSULTATION_URL } from '../constants';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('http')) {
      setIsMobileMenuOpen(false);
      return;
    }
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const isMobile = window.innerWidth < 768;
      const additionalOffset = (isMobile && targetId === 'consultation') ? 600 : 0;

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset + additionalOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: '비전 & 혜택', href: '#vision' },
    { name: '시험일정', href: '#schedule' },
    { name: '과정소개', href: '#courses' },
    { name: '전기기능사', href: '#course-1' },
    { name: '전기(산업)기사', href: '#course-2' },
    { name: '취업현황', href: '#employment' },
    { name: '상담신청', href: CONSULTATION_URL },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg border-b border-gray-800' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="text-2xl md:text-3xl font-black tracking-tighter text-white"
        >
          <span className="text-yellow-400">Eduwill</span> 국비교육원
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-lg font-medium transition-colors ${
                link.name === '상담신청' 
                  ? 'text-yellow-400 font-bold' 
                  : 'text-gray-300 hover:text-yellow-400'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={CONSULTATION_URL} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-yellow-400 text-black px-5 py-2 rounded-full font-bold text-lg hover:bg-yellow-300 transition-transform hover:scale-105"
          >
            <FileText size={20} />
            교육문의
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 p-4 flex flex-col space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`text-base font-medium py-2 border-b border-zinc-800 ${
                link.name === '상담신청' 
                  ? 'text-yellow-400 font-bold' 
                  : 'text-gray-300 hover:text-yellow-400'
              }`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={CONSULTATION_URL} 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-black text-center py-3 rounded-md font-bold text-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            무료상담 신청하기
          </a>
        </div>
      )}
    </nav>
  );
};