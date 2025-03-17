import React from "react";

const HistoryPromotionSystem = () => {
  return (
    <section className="max-w-[1400px] m-auto">
      <div className="flex items-center w-full shadow-2xl mt-7 rounded-2xl">
        <img src="http://127.0.0.1:5500/image.png" alt="" className="p-2" />
        <div>
          <h3 className="font-bold text-blue-700 text-[18px]">추진배경</h3>
          <p>
            소규모 대기배출시설(TMS 미부착)의 대기오염물질 배출 관리에 대한
            실시간 모니터링 필요성이 대두되고 효율적인 운영 관리 방안마련을
            요구함에 따라 IoT(사물인터넷, Internet of Things)를 활용한
            원격관리로 국가대기질 개선을 도모하려 합니다
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h2>연도별 단계 및 내용</h2>
        <table className="w-full">
          <tr>
            <th>단계</th>
            <th>기준연도</th>
            <th>수행년도</th>
            <th colSpan={2}>사업소개</th>
          </tr>
          <tr>
           <td rowSpan={2}>시범부착</td>
           <td>2017</td>
           <td>2017 ~ 2018</td>
           소규모사업장 IoT 측정기기 시범부착
          </tr>
          <tr>
            <td>2018</td>
            <td>2018 ~</td>
            <td>국립환경과학원, 정보화전략계획(ISP) 수립</td>
          </tr>
          
          <tr>
            <td>실증사업 및 부착지원</td>
            <td>2019</td>
          </tr>
          
          <tr>
            <td>2019. 07 ~ 2020. 03</td>
            <td>IoT 측정기기를 활용한 방지시설 관리 실증사업</td>
          </tr>
          <tr>
            <td>2019 ~</td>
            <td>한국환경공단 인프라 구축기관 일원화</td>
          </tr>
          
          <tr>
            <td>2019 ~</td>
            <td>IoT 측정기기 설치지원 (소규모사업장 방지시설 설치 지원사업 연계)</td>
          </tr>
          
          
        </table>
      </div>
    </section>
  );
};

export default HistoryPromotionSystem;
