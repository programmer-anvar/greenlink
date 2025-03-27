import React from "react";
import ambula from "../../assets/AirPollutantAnalysis/ambula.jpg";
const workPlace = [
  {
    division:'제1종 배출구',
    SizebyOutlet: "먼지·황산화물 및 질소산화물의 연간 발생량 합계가 80톤 이상인 배출구",
    NumberofMeasurements:'매주 1회 이상'
  },
  {
    division:'제2종 배출구',
    SizebyOutlet: "먼지·황산화물 및 질소산화물의 연간 발생량 합계가 20톤이상 80톤 미인 배출구",
    NumberofMeasurements:'매월 2회 이상'
  },
  {
    division:'제3종 배출구',
    SizebyOutlet: "먼지·황산화물 및 질소산화물의 연간 발생량 합계가 10톤이상 20톤 미만인 배출구",
    NumberofMeasurements:'2개월 마다 1회 이상'
  },
  {
    division:'제4종 배출구',
    SizebyOutlet: "먼지·황산화물 및 질소산화물의 연간 발생량 합계가 2톤이상 10톤 미만인 배출구",
    NumberofMeasurements:'반기마다 1회 이상'
  },
  {
    division:'제5종 배출구',
    SizebyOutlet: "먼지·황산화물 및 질소산화물의  연간 발생량 합계가 2톤 미만인 배출구",
    NumberofMeasurements:'반기마다 1회 이상'
  },
]

const BusinesTab1 = () => {
  const proxyItems = [
    {
      name:'황산화물',
      SerialNumber:'17',
      ItemName:'포름 및 그 화합물',
      serialNumber2:'33',
      ItemName3:"테트라클로로에틸렌"
    },
    {
      name:'질소산화물',
      SerialNumber:'18',
      ItemName:'납 및 그 화합물',
      serialNumber2:'34',
      ItemName3:"에틸벤젠"
    },
    {
      name:'일산화탄소',
      SerialNumber:'19',
      ItemName:'구리 및 그 화합물',
      serialNumber2:'35',
      ItemName3:"폼알데하이드"
    },
    {
      name:'탄화수소',
      SerialNumber:'20',
      ItemName:'니켈 및 그 화합물',
      serialNumber2:'36',
      ItemName3:"비소"
    },
    {
      name:'먼지',
      SerialNumber:'21',
      ItemName:'아연 및 그 화합물',
      serialNumber2:'37',
      ItemName3:"스타이렌"
    },
    {
      name:'매연',
      SerialNumber:'22',
      ItemName:'카드뮴 및 그 화합물',
      serialNumber2:'38',
      ItemName3:"아닐린"
    },
    {
      name:'PM10',
      SerialNumber:'23',
      ItemName:'크롬 및 그 화합물',
      serialNumber2:'39',
      ItemName3:"아세트알데하이드"
    },
  ]
  return (
    <div>
      <div>
        <img className="w-full" src={ambula} alt="" />
      </div>
      <div className="  justify-between w-full mt-12 border-t-2 border-gray-400  border-b-1  py-7">
        <h2 className="text-2xl">대기측정 관련 법규</h2>
        <div className="mt-4">
          <p className="text-[#989898]">
            대기환경보전법 제39조 제1항(자가측정) 환경부는 산폐수배출 유해물질에
            대한 통합관리체계를 '수질' 중심 관리에서 생물검정을 통한 '수생태계'
            중심관리로 전환하고, 대기환경보전법 시행규칙 제52조 제3항(자가측정의
            대상, 항목 및 방법)
          </p>
        </div>
      </div>

      <div className="  justify-between w-full   border-gray-400  border-b-1  py-7">
        <h2 className="text-2xl">측정 대행 항목</h2>
        <div className="mt-4">
          <p className="text-[#989898]">
            배출가스 중 입자상 물질, 가스상 물질, 특정 대기유해물질 등 47종의
            대기오염물질 측정·분석이 가능합니다.
          </p>
        </div>

        <table className="w-full text-center  border mt-10">
          <tr className="bg-pink-50">
            <th className="py-3 ">연번</th>
            <th>항목명</th>
            <th>연번</th>
            <th>항목명</th>
            <th>연번</th>
            <th>항목명</th>
          </tr>
          
          {proxyItems.map((item,index) =>(
            <tr key={index}>
            <td className="py-3 text-[#333]">{index + 1}</td>
            <td className="text-[#333]">{item.name}</td>
            <td className="text-[#333]">{item.SerialNumber}</td>
            <td className="text-[#333]">{item.ItemName}</td>
            <td className="text-[#333]">{item.serialNumber2}</td>
            <td className="text-[#333]">{item.ItemName3}</td>
          </tr>
          ))}
        </table>
      </div>


      <div  className="  justify-between w-full   border-gray-400  border-b-1  py-7">
        <h2 className="md:text-2xl">사업장의 자가측정 배출구별 규모 및 측정횟수</h2>
        <p className="md:text-[18px] text-[#555] mt-2">관제센터로 측정결과를 자동전송하지 않는 사업장의 배출구</p>

        <table className="w-full border text-center mt-10">
          <tr className="bg-pink-50">
            <td className="py-5">구분</td>
            <td>배출구별 규모</td>
            <td>측정 횟수</td>
          </tr>

          {workPlace.map((item,index) =>(
            <tr key={index}>
            <td className="py-5 text-[#333]">{item.division}</td>
            <td className="text-[#333]">{item.SizebyOutlet}</td>
            <td className="text-[#333]">{item.NumberofMeasurements}</td>
          </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default BusinesTab1;
