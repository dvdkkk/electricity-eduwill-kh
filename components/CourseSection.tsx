import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { COURSES, CONSULTATION_URL } from '../constants';
import { CheckCircle2, Calendar, MapPin, Users, BookOpen, ArrowRight } from 'lucide-react';

// 스크롤 애니메이션 컴포넌트
interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0, id }) => {
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
      id={id}
      className={`${className} transition-all duration-200 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const CourseSection: React.FC = () => {
  return (
    <section id="courses" className="py-12 bg-black relative">
      <div className="container mx-auto px-4">
        <Reveal className="text-center mb-8">
          <h2 className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-3">Education Courses</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">체계적인 교육과정</h3>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            이론부터 실무까지, 초보자도 전문가로 성장할 수 있는 에듀윌만의 독보적인 커리큘럼을 만나보세요.
          </p>
        </Reveal>

        {/* Courses List - Vertical Stack */}
        <div className="space-y-12">
          {COURSES.map((course, index) => (
            <Reveal 
              key={course.id} 
              id={course.id}
              className="block scroll-mt-32" 
            >
              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Left Info */}
                <div className="space-y-8">
                  <div className="bg-zinc-900 rounded-3xl p-7 border border-zinc-800 relative overflow-hidden group hover:border-yellow-400/50 transition-colors">
                     {/* Number Badge */}
                    <div className="absolute top-0 right-0 bg-yellow-400 text-black font-black text-lg px-3 py-1.5 rounded-bl-2xl">
                      0{index + 1}
                    </div>

                    <h4 className="text-2xl font-bold text-white mb-2">{course.title}</h4>
                    <p className="text-yellow-400 text-sm font-medium mb-6">{course.subTitle}</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8 border-b border-zinc-800 pb-8">
                      {course.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex items-start gap-3">
                        <Calendar className="text-yellow-400 shrink-0" size={20} />
                        <div>
                          <span className="block text-gray-500 text-xs">교육기간</span>
                          <span className="text-white text-sm font-medium">{course.duration}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="text-yellow-400 shrink-0" size={20} />
                        <div>
                          <span className="block text-gray-500 text-xs">모집정원</span>
                          <span className="text-white text-sm font-medium">{course.capacity}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="text-yellow-400 shrink-0" size={20} />
                        <div>
                          <span className="block text-gray-500 text-xs">교육장소</span>
                          <span className="text-white text-sm font-medium">{course.locations}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <BookOpen className="text-yellow-400 shrink-0" size={20} />
                        <div>
                          <span className="block text-gray-500 text-xs">수업형태</span>
                          <span className="text-white text-sm font-medium">{course.classTime}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-zinc-800">
                      <a
                        href={CONSULTATION_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black py-3.5 px-6 rounded-xl font-bold text-base transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-yellow-400/10"
                      >
                        <span>교육신청하기</span>
                        <ArrowRight size={18} />
                      </a>
                    </div>
                  </div>

                  {/* Visual Image / Video */}
                   <div className="relative rounded-3xl overflow-hidden aspect-square border border-zinc-800 group shadow-2xl max-w-sm mx-auto md:mx-0 bg-zinc-900 flex items-center justify-center">
                      {course.video ? (
                        <video
                          src={course.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      ) : (
                        <img 
                          src={course.image || ''} 
                          alt={course.title} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.opacity = '0.3';
                            target.src = 'https://via.placeholder.com/800/1a1a1a/888888?text=Eduwill+Curriculum';
                          }}
                        />
                      )}
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 pointer-events-none">
                          <span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded-full text-xs">
                              {course.type === 'technician' ? '전기기능사 과정' : '전기(산업)기사 과정'}
                          </span>
                      </div>
                   </div>
                </div>

                {/* Right Curriculum */}
                <div className="bg-zinc-900 rounded-3xl p-7 border border-zinc-800 h-full">
                  <div className="flex items-center justify-between mb-8">
                    <h5 className="text-xl font-bold text-white tracking-tight">CURRICULUM</h5>
                    <span className="text-xs font-bold px-2 py-1 bg-yellow-400 text-black rounded-full uppercase">Professional</span>
                  </div>

                  <div className="space-y-6">
                    {course.curriculum.map((item, idx) => (
                      <div key={idx} className="group">
                        <div className="flex items-start gap-4">
                          <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-yellow-400 font-bold shrink-0 group-hover:bg-yellow-400 group-hover:text-black transition-colors text-sm">
                            {idx + 1}
                          </div>
                          <div className="flex-1">
                            <h6 className="text-base font-bold text-white mb-2">{item.category}</h6>
                            <ul className="space-y-2">
                              {item.subjects.map((sub, sIdx) => (
                                <li key={sIdx} className="flex items-start gap-2 text-gray-400 text-xs md:text-sm">
                                  <CheckCircle2 size={14} className="text-zinc-600 mt-0.5 shrink-0" />
                                  {sub}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        {idx !== course.curriculum.length - 1 && (
                          <div className="w-px h-5 bg-zinc-800 ml-4.5 my-2"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};