import React, { useEffect } from 'react';
import { CONSULTATION_URL } from '../constants';

export const Footer: React.FC = () => {
  useEffect(() => {
    // 리포트2.0 로그분석코드 시작
    const sTime = new Date().getTime();
    (function(i: any, s: any, o: any, g: any, r: any, a?: any, m?: any){
      i['webObject']=g;
      i['webUid']=r;
      a=s.createElement(o);
      m=s.getElementsByTagName(o)[0];
      a.async=1;
      a.src=g;
      m.parentNode.insertBefore(a,m)
    })(window,document,'script','//nayang81.weblog.cafe24.com/weblog.js?v='+sTime,'nayang81_9');
    // 리포트2.0 로그분석코드 완료
  }, []);

  return (
    <footer className="bg-black text-zinc-500 py-6 border-t border-zinc-900 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
                <h5 className="text-white font-bold mb-4 text-base">에듀윌 국비교육원</h5>
                <p className="leading-relaxed mb-4">
                    본 과정은 고용노동부 주관 직업능력개발훈련 과정입니다.<br/>
                    최고의 시설과 강사진으로 여러분의 취업 성공을 끝까지 책임지겠습니다.
                </p>
            </div>
            <div className="md:text-right">
                <p className="font-bold text-zinc-400 mb-2">고객센터</p>
                <a 
                  href={CONSULTATION_URL} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors inline-block"
                >
                  교육문의
                </a>
            </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 space-y-2 text-xs md:text-sm">
            <p>상호명 : ㈜에듀윌 | 대표이사 : 양형남</p>
            <p>지점 : 부평점(부평역)/구로점(구로디지털단지역)/성남점(모란역)</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
                <p>사업자등록번호 : 119-81-54852</p>
                <p>법인등록번호 : 110111-2450031</p>
                <p>통신판매업신고번호 : 구로 제 2008-00077호</p>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
                <p>원격평생교육시설신고 제 207호</p>
                <p>개인정보보호책임자 : 최성민</p>
            </div>
            <div className="flex justify-between items-center mt-4">
                <p className="text-zinc-600">Copyright ⓒ (주)에듀윌 Corp. All rights reserved.</p>
                <a href="#0107761" className="text-zinc-800 hover:text-zinc-700 text-[10px]">Admin</a>
            </div>
        </div>
      </div>
    </footer>
  );
};