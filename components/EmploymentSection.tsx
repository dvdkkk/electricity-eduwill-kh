import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { EMPLOYMENT_STATUS, PROCESS_STEPS } from '../constants';
import { Briefcase } from 'lucide-react';

// 스크롤 애니메이션 컴포넌트
interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: '0px' } // 1% 진입 시 즉시 실행
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-200 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const EmploymentSection: React.FC = () => {
  // Triple the list for smoother infinite loop
  const marqueeList = [...EMPLOYMENT_STATUS, ...EMPLOYMENT_STATUS, ...EMPLOYMENT_STATUS];

  return (
    <section id="employment" className="py-12 bg-zinc-950 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <Reveal>
          <div className="text-center mb-12">
              <div>
                  <h2 className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-3">Employment Status</h2>
                  <h3 className="text-3xl font-bold text-white">취업 현황</h3>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                  20대부터 50대까지, 나이와 성별을 불문하고<br/> 많은 수료생들이 현장에서 활약하고 있습니다.
              </p>
          </div>
        </Reveal>
      </div>

      {/* Marquee Ticker */}
      <Reveal delay={100} className="w-full bg-zinc-900 py-5 border-y border-zinc-800 mb-12 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-zinc-900 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-zinc-900 to-transparent z-10"></div>
        
        <div className="animate-marquee flex gap-5 px-4">
          {marqueeList.map((item, idx) => (
            <div 
              key={`${item.company}-${idx}`} 
              className="flex-shrink-0 bg-black border border-zinc-800 rounded-xl p-3.5 w-60 hover:border-yellow-400 transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="bg-zinc-800 text-gray-300 text-xs px-2 py-0.5 rounded">{item.branch}</span>
                <span className="text-yellow-400 text-xs font-bold">취업성공</span>
              </div>
              <h4 className="text-white text-sm font-bold truncate mb-1">{item.company}</h4>
              <div className="flex justify-between items-end">
                <p className="text-gray-400 text-xs">{item.name} 수강생</p>
                <p className="text-zinc-500 text-[10px] truncate max-w-[80px]">{item.license}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Employment Process */}
      <div className="container mx-auto px-4">
        <Reveal className="text-center mb-8" delay={200}>
          <h2 className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-3">JOB PROCESS</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">에듀윌 취업 지원 프로세스</h3>
          <p className="text-gray-400 text-sm md:text-base max-w-xl">
            입학부터 취업까지 체계적인 5단계 시스템
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-9 left-0 w-full h-px bg-zinc-800 -z-0"></div>

              {PROCESS_STEPS.map((step, idx) => (
                  <div key={idx} className="relative z-10 group">
                      <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 h-full hover:-translate-y-2 transition-transform duration-300 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/10">
                          <div className="w-9 h-9 bg-black rounded-full border-2 border-yellow-400 text-yellow-400 flex items-center justify-center font-bold text-base mb-6 mx-auto group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                              {step.step}
                          </div>
                          <h4 className="text-base font-bold text-white text-center mb-3 break-keep">
                              {step.title}
                          </h4>
                          <p className="text-gray-500 text-xs text-center break-keep leading-relaxed">
                              {step.description}
                          </p>
                      </div>
                  </div>
              ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};