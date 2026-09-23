import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SiteContent, VisitorLog } from '../types';
import { COURSES, EMPLOYMENT_STATUS, PROCESS_STEPS } from '../constants';

const defaultContent: SiteContent = {
  hero: {
    badge: "취업잘되는 자격증 4위, 전기분야",
    title: "미래를 밝히는 기술",
    highlight: "전기 전문가",
    description: "에듀윌 국비교육원에서 전기기능사·전기(산업)기사 자격증 취득부터 실무 교육, 그리고 취업지원까지 한 번에 해결하십시오.",
    stats: [
      { label: '교육비 지원', value: '국비지원' },
      { label: '모집 정원', value: '각 20명' },
      { label: '교육 장소', value: '부평/구로/성남' },
      { label: '취업 지원', value: '1:1 매칭' },
    ]
  },
  intro: {
    badge: "Education Mission",
    title1: "전공·경력·나이에 상관없이",
    highlight: "‘할 수 있는 사람’",
    title2: "을 만들어냅니다",
    description: "20대부터 50대까지, 성별과 전공을 넘어 다양한 수료생들이 지금 이 순간에도 현장에서 활약하고 있습니다.",
    images: [
      "https://postfiles.pstatic.net/MjAyNjAxMjhfNjcg/MDAxNzY5NTcwMzIyMzU4.UKzP7PD7KQWFR-nsAPLOOMn2IcKW8b0N28YChdPLz0Yg.5qKMY9Fo1EdWSrwFm837mQFYckzrqxGD4XgIC23MvMMg.PNG/Gemini_Generated_Image_4spg6f4spg6f4spg.png?type=w466",
      "https://postfiles.pstatic.net/MjAyNjAxMjhfMTgx/MDAxNzY5NTcwMzIyMzY4.nZmd95fkyvp32b9yIJ-1hIx0EpkTyaozkOuUx2fM8_0g.F_PTgpCDA4xlwDYEW5cx_wu1wHKOF6VyZwTc6FGsU-4g.PNG/Gemini_Generated_Image_hm87dchm87dchm87.png?type=w466",
      "https://postfiles.pstatic.net/MjAyNjAxMjhfMTY2/MDAxNzY5NTcwMzIyMzYw.1_YtzWJjzPhvojxVFHzcvnSaSuke6m78x1ijUnykMDMg.TgXr-tKFDxHZxneRVjyzArXRSmMX00zoH0Pas_vjQ7wg.PNG/Gemini_Generated_Image_gxb5oigxb5oigxb5.png?type=w466",
      "https://postfiles.pstatic.net/MjAyNjAxMjhfMzAw/MDAxNzY5NTcwMzIyMzQ5.J4AtHagzmy4V7wuSjIiU6Ozx8j4XLnVO1cE9Mi-J9r4g.MQBue43Js4oAA6M_aEA3BXYHDAhEZzyvm9Y8FzIT2Lgg.PNG/Gemini_Generated_Image_zwtxwzwtxwzwtxwz.png?type=w466"
    ]
  },
  vision: {
    items: [
      { num: '01', title: '보수·승진 우대', desc: '기술직 공무원 및 기업체 보수나 승진에 있어 확실한 우대' },
      { num: '02', title: '공기업 가산점', desc: '한국전력공사 등 주요 공기업 입사 지원 시 가산점 부여' },
      { num: '03', title: '전기 관리직 수요', desc: '4차 산업 발전과 함께 꾸준히 수요가 늘어나는 전문직' },
      { num: '04', title: '중장년층 취업 가능', desc: '나이 무관! 은퇴 없는 평생 직업으로 제2의 인생 시작' }
    ]
  },
  courses: COURSES,
  examSchedule: {
    technician: [
      { round: "전기기능사 1회", writtenApp: "01.06 ~ 01.09", writtenExam: "01.20 ~ 02.02", writtenRes: "02.05", practicalApp: "03.09 ~ 03.12", practicalExam: "03.14 ~ 04.01", practicalRes: "04.10" },
      { round: "전기기능사 2회", writtenApp: "03.09 ~ 03.12", writtenExam: "03.20 ~ 04.09", writtenRes: "04.30", practicalApp: "05.11 ~ 05.14", practicalExam: "05.30 ~ 06.14", practicalRes: "06.26" },
      { round: "필기면제 검정", writtenApp: "-", writtenExam: "면제", writtenRes: "-", practicalApp: "05.11 ~ 05.14", practicalExam: "06.08 ~ 06.24", practicalRes: "07.15" },
      { round: "전기기능사 3회", writtenApp: "06.08 ~ 06.11", writtenExam: "06.27 ~ 07.02", writtenRes: "07.10", practicalApp: "07.27 ~ 07.30", practicalExam: "08.24 ~ 09.16", practicalRes: "10.02" },
      { round: "전기기능사 4회", writtenApp: "08.27 ~ 08.30", writtenExam: "09.21 ~ 10.15", writtenRes: "10.07", practicalApp: "10.12 ~ 10.15", practicalExam: "11.14 ~ 12.02", practicalRes: "12.11" },
    ],
    engineer: [
      { round: "전기(산업)기사 1회", writtenApp: "01.12 ~ 01.15", writtenExam: "01.30 ~ 03.03", writtenRes: "03.11", practicalApp: "03.23 ~ 03.26", practicalExam: "04.18 ~ 05.06", practicalRes: "06.12" },
      { round: "전기(산업)기사 2회", writtenApp: "04.20 ~ 04.23", writtenExam: "05.09 ~ 05.29", writtenRes: "06.10", practicalApp: "06.22 ~ 06.25", practicalExam: "07.18 ~ 08.05", practicalRes: "09.11" },
      { round: "전기(산업)기사 3회", writtenApp: "07.20 ~ 07.23", writtenExam: "08.07 ~ 09.01", writtenRes: "09.09", practicalApp: "09.21 ~ 09.28", practicalExam: "10.24 ~ 11.13", practicalRes: "12.18" },
    ]
  },
  strategy: {
    items: [
      { title: "핵심 위주의 고효율 커리큘럼", desc: "방대한 이론 중 시험에 꼭 나오는 핵심만 짚어드립니다. 단기간에 합격권 실력을 완성하는 완성도 높은 커리큘럼입니다." },
      { title: "초보자 눈높이 맞춤 교육", desc: "생소한 용어와 수학 공식도 비전공자의 눈높이에서 알기 쉽게 설명합니다. 막연한 두려움을 자신감으로 바꿔드립니다." },
      { title: "실전 중심의 완벽한 실기 대비", desc: "도면 해석부터 배관 배선까지 반복 훈련을 진행합니다. 초보자도 자연스럽게 도면을 보고 작업할 수 있는 수준으로 끌어올립니다." },
      { title: "최적의 학습 환경과 지원", desc: "학습에만 집중할 수 있는 최고의 시설과 자재, 열정적인 강사진이 여러분의 합격을 끝까지 책임집니다." }
    ],
    reviews: [
      { name: "오OO님", text: "에듀윌의 환경과 시설 자재 모두 너무나 맘에 들었습니다. 선생님의 열정적인 강의 덕분에 시험 합격할 수 있었습니다.", tag: "최종합격" },
      { name: "박OO님", text: "초심자여서 막연함과 생소한 용어, 수학 공식들로 인해 어려움이 있었지만, 선생님의 강의를 들으면 들을 수록 이해가 잘 되었습니다.", tag: "비전공자" },
      { name: "최OO님", text: "실기에 초보에 가까웠던 제가 아주 자연스럽게 도면을 보고 배관배선을 하게 된 것을 보고 감탄하게 되었습니다.", tag: "실기합격" },
      { name: "한OO님", text: "비교적 짧은 교육기간(2개월)에 비해 전기기능사자격취득을 위한 커리큘럼의 완성도가 높다고 판단됩니다.", tag: "단기합격" },
      { name: "김OO님", text: "주요내용과 용어들이 처음에는 힘들었지만, 에듀윌의 좋은 학습분위기와 꽉찬 수업진행에 잘 적응하면서 용기와 자신감이 생겼습니다.", tag: "취업준비" },
      { name: "정OO님", text: "처음 공부하는 시험인데 알기 쉽게 설명해주시면서 공부하기 쉽게 중요부분을 짚어주셔서 매우 좋았습니다.", tag: "필기합격" }
    ]
  },
  employment: {
    status: EMPLOYMENT_STATUS,
    process: PROCESS_STEPS
  }
};

interface ContentContextType {
  content: SiteContent;
  visitorLogs: VisitorLog[];
  updateContent: (newContent: SiteContent) => void;
  addVisitorLog: (log: Omit<VisitorLog, 'id'>) => void;
  resetContent: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [visitorLogs, setVisitorLogs] = useState<VisitorLog[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 사이트 콘텐츠 로드
    const savedContent = localStorage.getItem('site_content_v1');
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent);
        setContent({ ...defaultContent, ...parsed });
      } catch (e) {
        console.error("Failed to load content", e);
      }
    }

    // 방문자 로그 로드
    const savedLogs = localStorage.getItem('visitor_logs_v1');
    if (savedLogs) {
      try {
        setVisitorLogs(JSON.parse(savedLogs));
      } catch (e) {
        console.error("Failed to load logs", e);
      }
    }

    setIsLoaded(true);
  }, []);

  const updateContent = (newContent: SiteContent) => {
    setContent(newContent);
    localStorage.setItem('site_content_v1', JSON.stringify(newContent));
  };

  const addVisitorLog = (logData: Omit<VisitorLog, 'id'>) => {
    const newLog: VisitorLog = {
      ...logData,
      id: Math.random().toString(36).substr(2, 9)
    };
    
    setVisitorLogs(prev => {
      const updated = [newLog, ...prev].slice(0, 500); // 최근 500개까지만 유지
      localStorage.setItem('visitor_logs_v1', JSON.stringify(updated));
      return updated;
    });
  };

  const resetContent = () => {
    if (window.confirm("모든 변경사항을 초기화하시겠습니까?")) {
      setContent(defaultContent);
      localStorage.removeItem('site_content_v1');
    }
  };

  if (!isLoaded) return null;

  return (
    <ContentContext.Provider value={{ content, visitorLogs, updateContent, addVisitorLog, resetContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) throw new Error("useContent must be used within a ContentProvider");
  return context;
};