import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { TARGET_AUDIENCE } from '../constants';
import { TrendingUp, Award, Building2, Check, Users } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

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

export const VisionSection: React.FC = () => {
  const { content } = useContent();
  const { items } = content.vision;

  // Icon mapping logic is needed because we can't store components in JSON
  const icons = [Award, Building2, TrendingUp, Users];

  return (
    <section id="vision" className="py-20 bg-black relative border-b border-zinc-900">
      <div className="container mx-auto px-4">
        {/* Why Choose Section */}
        <div className="mb-12">
          <Reveal className="text-center mb-16">
            <h2 className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-3">VISION</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">왜 주목해야 하나?</h3>
            <p className="text-gray-400 text-sm md:text-base">전기기사 자격증이 지속적으로 인기를 끄는 확실한 이유</p>
          </Reveal>

          <Reveal delay={200}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {items.map((item, idx) => {
                const Icon = icons[idx] || Award; // Fallback icon
                return (
                  <div key={idx} className="bg-zinc-900/50 p-7 rounded-2xl border border-zinc-800 hover:border-yellow-400/50 transition-colors group relative overflow-hidden">
                    <div className="text-yellow-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={36} />
                    </div>
                    <div className="text-4xl font-black text-white absolute top-6 right-6 select-none opacity-20">{item.num}</div>
                    <h4 className="text-lg font-bold text-white mb-4 relative z-10">{item.title}</h4>
                    <p className="text-gray-400 relative z-10 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>

        {/* Benefits Card & Target Audience */}
        <div className="grid lg:grid-cols-2 gap-12">
            {/* National Funding Info */}
            <Reveal delay={300} className="h-full">
              <div className="bg-gradient-to-br from-zinc-900 to-black p-8 md:p-10 rounded-3xl border border-zinc-800 relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-6">국민내일배움카드 국비지원</h3>
                  
                  <div className="space-y-6 relative z-10">
                      <div className="flex gap-4">
                          <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center shrink-0">
                              <span className="text-yellow-400 font-bold text-lg">₩</span>
                          </div>
                          <div>
                              <h4 className="text-white font-bold text-base">고용노동부 훈련비 지원</h4>
                              <p className="text-gray-400 text-xs">직종 취업률별 일부 자부담 발생 (국비지원과정)</p>
                          </div>
                      </div>

                      <div className="flex gap-4">
                          <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center shrink-0">
                              <span className="text-yellow-400 font-bold text-lg">$</span>
                          </div>
                          <div>
                              <h4 className="text-white font-bold text-base">훈련수당 지급</h4>
                              <p className="text-gray-400 text-xs">월 최대 61만 6천원 (유형별 상이)</p>
                          </div>
                      </div>

                      <div className="flex gap-4">
                          <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center shrink-0">
                              <span className="text-yellow-400 font-bold text-xs">Pass</span>
                          </div>
                          <div>
                              <h4 className="text-white font-bold text-base">취업성공수당</h4>
                              <p className="text-gray-400 text-xs">취업 성공 시 최대 150만원 지급</p>
                          </div>
                      </div>
                  </div>
              </div>
            </Reveal>

            {/* Target Audience */}
            <Reveal delay={400} className="h-full">
              <div className="bg-zinc-900 p-8 md:p-10 rounded-3xl border border-zinc-800 flex flex-col justify-center h-full">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-8">교육 훈련 대상</h3>
                  <ul className="space-y-3.5">
                      {TARGET_AUDIENCE.map((target, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                              <div className="bg-yellow-400/20 p-1 rounded-full mt-0.5">
                                  <Check size={13} className="text-yellow-400" />
                              </div>
                              <span className="text-gray-300 text-sm">{target}</span>
                          </li>
                      ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-zinc-800">
                      <p className="text-center text-gray-500 text-xs">
                          * 비전공자도 기초부터 탄탄하게 배워 전문가가 될 수 있습니다.
                      </p>
                  </div>
              </div>
            </Reveal>
        </div>
      </div>
    </section>
  );
};