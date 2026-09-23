import { Course, EmploymentStatus, ProcessStep } from './types';

export const CONSULTATION_URL = 'https://naver.me/5OlHypYu';

export const COURSES: Course[] = [
  {
    id: 'course-1',
    type: 'technician',
    title: '[국비지원] 전기기능사 (필기+실기)',
    subTitle: '전기 분야 입문의 필수 코스',
    description: '전기기능사 자격증은 전기를 합리적으로 사용하고 전기로 인한 재해를 방지하기 위해 숙련된 기술인력을 양성하기 위한 국가기술자격제도입니다.',
    duration: '2개월 or 4개월 ',
    schedule: '매달 신규 개강',
    classTime: '주5회(월~금) or 주2회(토,일)',
    capacity: '20명(오프라인)',
    locations: '부평 / 구로 / 성남',
    video: 'https://mblogvideo-phinf.pstatic.net/MjAyNjAxMjdfMTk1/MDAxNzY5NDk1MzA3NDU5.xDgtRREWWbuutZx7I6mWFwm059SbAaDVzpJCNl6qUUYg.UxLjnZDycE2w5gJLaztevGu5HUub5RmZEYsv0R_4ltEg.GIF/gif2.gif?type=mp4w800',
    curriculum: [
      {
        category: '이론과정',
        subjects: ['체계적인 개념정립', '핵심이론 압축정리']
      },
      {
        category: '문제풀이',
        subjects: ['빈출문제 집중분석', '문제 응용력 향상']
      },
      {
        category: '기출분석',
        subjects: ['과년도 기출분석', '출제 포인트 캐치']
      },
      {
        category: '실습강의',
        subjects: ['실습 중심 강의', '실기까지 한번에!']
      },
      {
        category: '배관배선공사',
        subjects: ['배선공사', '배관배선검사']
      },
      {
        category: '전기기능사(이론)',
        subjects: [
          '전기이론: 정전기, 자기장, 직류/교류회로',
          '전기기기: 변압기, 유도전동기, 정류기',
          '전기설비: 옥내배선공사, 배전반 공사'
        ]
      },
      {
        category: '전기기능사(실기)',
        subjects: [
          '전기설비작업: 배관 배선하기',
          '전기기계기구 설치',
          '전동기제어 및 운용'
        ]
      }
    ]
  },
  {
    id: 'course-2',
    type: 'engineer',
    title: '[국비지원] 전기(산업)기사 (필기+실기)',
    subTitle: '고소득 전문 기술인으로 도약',
    description: '전기산업기사 자격증은 전기설비의 운전 및 조작, 유지·보수에 관한 전문화된 기술인력을 양성하고자 제정된 자격증입니다.',
    duration: '2개월 or 4개월',
    schedule: '매달 신규 개강',
    classTime: '주5회(월~금) or 주2회(토,일)',
    capacity: '20명(오프라인)',
    locations: '부평 / 구로 / 성남',
    video: 'https://mblogvideo-phinf.pstatic.net/MjAyNjAxMjdfOTMg/MDAxNzY5NDk1MzA3NDUx.Vy02fiUDugB02PVKMeGVScFNdWmt96WlVIH7J7AnQegg.WzAUEBNxXhoT9N0lKlNiSTuLvBUFEmft5UEAfzx_mZsg.GIF/gif1.gif?type=mp4w800',
    
    curriculum: [
      {
        category: '이론/문제/기출',
        subjects: ['개념정립', '빈출문제 분석', '출제포인트 캐치']
      },
      {
        category: '동력설비공사',
        subjects: ['동력제어반공사', '동력설비 시운전']
      },
      {
        category: '전기(산업)기사 이론',
        subjects: [
          '전기자기학: 전계, 자계, 전자유도',
          '전력공학: 송배전선로, 계통보호방식',
          '전기기기: 직류기, 동기기, 변압기',
          '회로이론 및 제어공학: 라플라스 변환, 과도현상',
          '설비기술기준: 전선로, 전력보안 통신설비'
        ]
      },
      {
        category: '전기(산업)기사 실기',
        subjects: [
          '전기설비설계 및 관리',
          '자동제어 운용 및 유지관리',
          '감리업무 수행계획 및 안전관리'
        ]
      }
    ]
  }
];

export const EMPLOYMENT_STATUS: EmploymentStatus[] = [
  { company: '한국화학융합시험연구원', name: '임OO', branch: '부평', license: '전기(산업)기사(실기)' },
  { company: '(주)에스피씨삼립', name: '이OO', branch: '부평', license: '전기기능사(실기)' },
  { company: '(주)예스쿨', name: '한OO', branch: '부평', license: '전기기능사(실기)' },
  { company: '파트론', name: '노OO', branch: '부평', license: '전기(산업)기사(필기)' },
  { company: '주식회사 가온전력', name: '송OO', branch: '부평', license: '전기기능사(실기)' },
  { company: '서울시설공단', name: '정OO', branch: '구로', license: '전기기능사(필기+실기)' },
  { company: '유한회사 오리스코리아', name: '박OO', branch: '구로', license: '전기(산업)기사(필기+실기)' },
  { company: '대한전기안전관리아이캔', name: '조OO', branch: '구로', license: '전기(산업)기사(필기+실기)' },
  { company: '주식회사 컴피아', name: '김OO', branch: '구로', license: '전기기능사(필기+실기)' },
  { company: '(주)이랜드서비스', name: '정OO', branch: '구로', license: '전기(산업)기사(필기+실기)' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { step: '01', title: '취업지원 컨설팅', description: '취업상담 신청 시 프로그램 설명 및 컨설팅 진행' },
  { step: '02', title: '이력서·자소서 교육', description: '직무 성격에 맞는 1:1 맞춤 코칭 및 작성' },
  { step: '03', title: '모의면접 컨설팅', description: '실전 모의면접을 통한 긍정적 이미지 메이킹' },
  { step: '04', title: '연계기업 취업매칭', description: '에듀윌 인증 우수 연계 기업 매칭' },
  { step: '05', title: '성공적인 취업/이직', description: '최적의 방향으로 컨설팅하여 취업 성공' },
];

export const TARGET_AUDIENCE = [
  "나이가 많아서 취업이 어려우신 분",
  "전기분야 고소득 관리직에 진출하고 싶은 분",
  "한국전력공사로 취업이 목적인 분",
  "전기기기 제조 업체에 재직 또는 취업 예정이신 분",
  "전기기기 설비업체 관련 직종 및 전기실 관련 인력",
  "전기기능사 자격증을 취득하여 취업하려는 구직자"
];