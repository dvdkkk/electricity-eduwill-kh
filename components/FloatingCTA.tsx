import React, { useEffect, useState } from 'react';
import { CONSULTATION_URL } from '../constants';

export const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤이 조금 발생하면 버튼 표시
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 pointer-events-none transition-all duration-500 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
    >
      <a 
        href={CONSULTATION_URL} 
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-sm w-16 h-16 rounded-full shadow-[0_4px_15px_rgba(250,204,21,0.4)] flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
        aria-label="상담 신청하기"
      >
        상담
      </a>
    </div>
  );
};