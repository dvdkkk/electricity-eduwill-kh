import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { MapPin, FileText, CheckCircle2, ExternalLink } from 'lucide-react';
import { CONSULTATION_URL } from '../constants';

const NAVER_FORM_URL = CONSULTATION_URL;

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
      { threshold: 0.01, rootMargin: '0px' }
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

export const ConsultationForm: React.FC = () => {
  return (
    <section id="consultation" className="py-12 md:py-16 bg-yellow-400 text-black scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text */}
          <div className="space-y-6 lg:sticky lg:top-24">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-black leading-tight mb-6">
                망설이지 마세요.<br/>
                취업 전문가가 <br/>
                친절하게 안내해드립니다.
              </h2>
              <p className="text-lg font-medium text-black/80 mb-6">
                국비지원 자격 여부부터 취업 및 교육과정까지<br/>
                <span className="border-b-2 border-black">무료로 상담해드립니다.</span>
              </p>
              
              <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-black text-yellow-400 rounded-full flex items-center justify-center">
                          <FileText size={20} />
                      </div>
                      <div>
                          <p className="text-xs font-bold opacity-70">교육문의</p>
                          <a 
                            href={NAVER_FORM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl font-black block hover:opacity-80 transition-opacity cursor-pointer"
                          >
                            교육문의
                          </a>
                      </div>
                  </div>
                  <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-black text-yellow-400 rounded-full flex items-center justify-center">
                          <MapPin size={20} />
                      </div>
                      <div>
                          <p className="text-xs font-bold opacity-70">교육장소</p>
                          <p className="text-lg font-bold">부평 / 구로 / 성남</p>
                      </div>
                  </div>
              </div>
              <p className="font-bold text-base mt-4">여러분의 꿈을 응원합니다!</p>
            </Reveal>
          </div>

          {/* Right: 지정 영역 상담신청 버튼 & 카드 */}
          <Reveal delay={200} className="w-full">
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-black/5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/20 text-black font-bold text-xs mb-4">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  실시간 간편 상담 접수
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black text-black mb-3">
                  무료 교육 상담 신청하기
                </h3>
                
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                  네이버 간편 서식으로 1분 만에 편리하게 신청하세요.<br className="hidden sm:inline" />
                  전문 취업 매니저가 맞춤형 국비지원 및 교육과정을 친절히 안내해드립니다.
                </p>
              </div>

              {/* 상담신청 메인 버튼 */}
              <div className="space-y-4">
                <a
                  href={NAVER_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full bg-black hover:bg-zinc-800 text-yellow-400 font-black py-4 sm:py-5 px-6 rounded-2xl text-lg sm:text-xl shadow-xl transition-all duration-300 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] border border-black"
                >
                  <span>상담 신청하기</span>
                  <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform text-yellow-400" />
                </a>

                <div className="pt-4 border-t border-gray-100 space-y-2 text-xs md:text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-black shrink-0" />
                    <span>내일배움카드 국비지원 자격 및 훈련비 무료 진단</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-black shrink-0" />
                    <span>전기기능사 · 전기(산업)기사 1:1 맞춤 커리큘럼</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-black shrink-0" />
                    <span>부평 · 구로 · 성남 지점별 개강 일정 및 취업 연계</span>
                  </div>
                </div>

                <p className="text-[11px] text-center text-gray-400 pt-2">
                  * 버튼을 클릭하시면 공식 상담신청 페이지로 이동합니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};