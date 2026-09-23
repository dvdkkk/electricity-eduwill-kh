import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { CourseSection } from './components/CourseSection';
import { VisionSection } from './components/VisionSection';
import { EmploymentSection } from './components/EmploymentSection';
import { ConsultationForm } from './components/ConsultationForm';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { CursorFollower } from './components/CursorFollower';
import { ExamSchedule } from './components/ExamSchedule';
import { SuccessStrategy } from './components/SuccessStrategy';
import { ContentProvider, useContent } from './contexts/ContentContext';
import { AdminDashboard } from './components/AdminDashboard';
import { AdminLogin } from './components/AdminLogin';

function VisitorTracker() {
  const { addVisitorLog } = useContent();

  useEffect(() => {
    const trackVisitor = async () => {
      // 1회 방문 추적 (세션당 1회만 기록)
      const sessionKey = 'visitor_tracked_' + new Date().toISOString().split('T')[0];
      if (sessionStorage.getItem(sessionKey)) return;

      try {
        // IP 가져오기
        const ipRes = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipRes.json();
        const ip = ipData.ip;

        // 유입 키워드 추출 시도 (referrer에서 q= 파라미터 등 검색)
        const referrer = document.referrer || '직접 접속';
        let keyword = '없음';
        
        try {
          if (referrer.includes('naver.com')) {
            const url = new URL(referrer);
            keyword = url.searchParams.get('query') || '네이버 유입';
          } else if (referrer.includes('google')) {
            keyword = '구글 유입'; // 구글은 referrer에서 키워드 추출이 막혀있는 경우가 많음
          } else if (referrer.includes('daum.net')) {
            const url = new URL(referrer);
            keyword = url.searchParams.get('q') || '다음 유입';
          }
        } catch (e) {}

        addVisitorLog({
          ip,
          referrer,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          keyword
        });

        sessionStorage.setItem(sessionKey, 'true');
      } catch (error) {
        console.error('Visitor tracking failed', error);
      }
    };

    trackVisitor();
  }, []);

  return null;
}

function AppContent() {
  const [isAdminRoute, setIsAdminRoute] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkRoute = () => {
      // 보안을 위해 URL Hash 변경: #admin -> #0107761
      const isRoute = window.location.hash === '#0107761';
      setIsAdminRoute(isRoute);
      
      // 세션 스토리지 체크 (새로고침 해도 로그인 유지)
      const hasAuth = sessionStorage.getItem('admin_auth') === 'true';
      setIsAuthenticated(hasAuth);
    };
    
    checkRoute(); // Initial check
    window.addEventListener('hashchange', checkRoute);
    
    const handleContextMenu = (e: MouseEvent) => {
      // Allow context menu only in admin mode
      if (window.location.hash !== '#0107761') {
        e.preventDefault();
      }
    };

    const handleDragStart = (e: DragEvent) => {
      if (window.location.hash !== '#0107761') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      window.removeEventListener('hashchange', checkRoute);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_auth');
    setIsAuthenticated(false);
    window.location.hash = ''; // 메인으로 리다이렉트
  };

  if (isAdminRoute) {
    if (!isAuthenticated) {
      return <AdminLogin onLogin={handleLogin} />;
    }
    return <AdminDashboard onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-yellow-400 selection:text-black cursor-none md:cursor-auto">
      <VisitorTracker />
      <CursorFollower />
      <Navigation />
      <main>
        <Hero />
        <IntroSection />
        <VisionSection />
        <ExamSchedule />
        <CourseSection />
        <SuccessStrategy />
        <EmploymentSection />
        <ConsultationForm />
      </main>
      <FloatingCTA />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ContentProvider>
      <AppContent />
    </ContentProvider>
  );
}

export default App;