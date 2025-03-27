import React from "react";
import ambula from "../../assets/AirPollutantAnalysis/ambula.jpg";
import img1 from '../../assets/AirPollutantAnalysis/img1.jpg';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
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


const atmosphericMeasurement = [
  {
    instrumentName:'가스크로마토그래프 질량분석기(GC/MS)',
    Quantity:"3대",
    analysisItems:"VOC 13종, 벤조(a)피렌"
  },
  {
    instrumentName:'유도결합플라즈마 분광광도계(ICP/OES)',
    Quantity:"1대",
    analysisItems:"금속 8종"
  },
  {
    instrumentName:'원자흡수분광광도계(FIMS)',
    Quantity:"1대",
    analysisItems:"수은"
  },
  {
    instrumentName:'자외선/가시선 분광광도계(UV/VIS)',
    Quantity:"2대",
    analysisItems:"기타 10종"
  },
  {
    instrumentName:'전자저울',
    Quantity:"2대",
    analysisItems:"먼지, PM10, PM2.5"
  },
  {
    instrumentName:'대기배출가스측정기',
    Quantity:"16대",
    analysisItems:"황산화물, 질소산화물, 일산화탄소"
  },
  {
    instrumentName:'굴뚝시료채취장치(입자상)',
    Quantity:"13대",
    analysisItems:"먼지, PM10, PM2.5, 금속 8종, 수은, 벤조(a)피렌"
  },
  {
    instrumentName:'굴뚝시료채취장치(가스상)',
    Quantity:"3대",
    analysisItems:"VOC 13종, 기타 10종, 벤젠, 히드라진, 이황화메틸, 에틸렌, 프로필렌옥사이드"
  },
  {
    instrumentName:'자동항온수증광장치',
    Quantity:"2대",
    analysisItems:"불소화물"
  },
  {
    instrumentName:'총탄화수소측정장비',
    Quantity:"1대",
    analysisItems:"탄화수소"
  },
  {
    instrumentName:'고성능액체크로마토그래프(HPLC)',
    Quantity:"2대",
    analysisItems:"알데하이드류, 벤지딘, 히드라진"
  },
  {
    instrumentName:'가스크로마토그래프(FID)',
    Quantity:"1대",
    analysisItems:"에틸렌, 프로필렌옥사이드"
  },
  {
    instrumentName:'가스크로마토그래프(FPD)',
    Quantity:"1대",
    analysisItems:"이황화메틸"
  },
  {
    instrumentName:'원자흡수분광광도계(AAS)',
    Quantity:"1대",
    analysisItems:"베릴륨"
  },
  {
    instrumentName:'이온크로마토그래프(IC)',
    Quantity:"1대",
    analysisItems:"염소 및 그 화합물"
  },
  {
    instrumentName:'휘발성유기화합물 시료채취장치',
    Quantity:"13대",
    analysisItems:"VOC 13종"
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
        <h2 className="text-[18px] md:text-2xl">대기측정 관련 법규</h2>
        <div className="mt-4">
          <p className=" text-[12px] md:text-[16px] text-[#989898]">
            대기환경보전법 제39조 제1항(자가측정) 환경부는 산폐수배출 유해물질에
            대한 통합관리체계를 '수질' 중심 관리에서 생물검정을 통한 '수생태계'
            중심관리로 전환하고, 대기환경보전법 시행규칙 제52조 제3항(자가측정의
            대상, 항목 및 방법)
          </p>
        </div>
      </div>

      <div className="  justify-between w-full   border-gray-400  border-b-1  py-7">
        <h2 className="text-[18px] md:text-2xl">측정 대행 항목</h2>
        <div className="mt-4">
          <p className="text-[12px] md:text-[16px] text-[#989898]">
            배출가스 중 입자상 물질, 가스상 물질, 특정 대기유해물질 등 47종의
            대기오염물질 측정·분석이 가능합니다.
          </p>
        </div>

        <table className="w-full text-center border mt-10 text-sm text-[8px] md:text-[15px] lg:text-base">
  <thead>
    <tr className="bg-pink-50">
      <th className="p-3 md:py-5">연번</th>
      <th>항목명</th>
      <th>연번</th>
      <th>항목명</th>
      <th>연번</th>
      <th>항목명</th>
    </tr>
  </thead>
  <tbody>
    {proxyItems.map((item, index) => (
      <tr key={index} className="border-b">
        <td className="p-3 md:py-5 text-[#333]">{index + 1}</td>
        <td className="text-[#333]">{item.name}</td>
        <td className="text-[#333]">{item.SerialNumber}</td>
        <td className="text-[#333]">{item.ItemName}</td>
        <td className="text-[#333]">{item.serialNumber2}</td>
        <td className="text-[#333]">{item.ItemName3}</td>
      </tr>
    ))}
  </tbody>
</table>

      </div>


      <div  className="  justify-between w-full   border-gray-400  border-b-1  py-7">
        <h2 className="text-[18px] md:text-2xl">사업장의 자가측정 배출구별 규모 및 측정횟수</h2>
        <p className="text-[12px] md:text-[16px] text-[#555] mt-2">관제센터로 측정결과를 자동전송하지 않는 사업장의 배출구</p>

        <table className="w-full text-center border mt-10 text-sm text-[8px] md:text-[15px] lg:text-base">
          <tr className="bg-pink-50">
            <td className="p-3 md:py-5">구분</td>
            <td>배출구별 규모</td>
            <td>측정 횟수</td>
          </tr>

          {workPlace.map((item,index) =>(
            <tr key={index} className="border-b">
            <td className="p-3 md:py-5 text-[#333]">{item.division}</td>
            <td className="text-[#333]">{item.SizebyOutlet}</td>
            <td className="text-[#333]">{item.NumberofMeasurements}</td>
          </tr>
          ))}
        </table>
        <h2 className="text-[16px] md:text-2xl  mt-8 text-[#727272] font-bold">관제센터로 측정결과를 자동전송하는 사업장 중 굴뚝 자동측정기기가 미설치된 배출구</h2>
        <p className="text-[12px] md:text-[16px] text-[#989898] font-bold mt-1">방지시설 후단만 측정하는 경우 </p>

        <table className="w-full text-center border mt-10 text-sm text-[8px] md:text-[15px] lg:text-base">
          <tr className="bg-pink-50">
            <td className="p-3 md:py-5 font-bold">구분</td>
            <td className="font-bold">배출구별 규모</td>
            <td className="font-bold">측정 횟수</td>
          </tr>
          {atmosphericMeasurement.map((item,index) =>(
            <tr className="border-b" key={index}>
              <td className="p-3 md:py-5 text-[#333] ">{item.instrumentName}</td>
              <td className="text-[#333]">{item.Quantity}</td>
              <td className="text-[#333]">{item.analysisItems}</td>
            </tr>
          ))}
        </table>

          <div className="mt-12">
            <img className="w-full" src={img1} alt="" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Link to='#' className="text-[12px] md:text-xl w-full bg-[#353535] text-white p-3 flex items-center justify-between">대기환경보전법 대기오염물질 <FaArrowRightLong  className="text-2xl"/></Link>
            <Link to='#' className="text-[12px] md:text-xl w-full bg-[#353535] text-white p-3 flex items-center justify-between">대기환경보전법 특정대기오염물질 <FaArrowRightLong  className="text-2xl"/></Link>
            <Link to='#' className="text-[12px] md:text-xl w-full bg-[#353535] text-white p-3 flex items-center justify-between">대기환경보전법 대기오염물질배출허용기준<FaArrowRightLong  className="text-2xl"/></Link>
            <Link to='#' className="text-[12px] md:text-xl w-full bg-[#353535] text-white p-3 flex items-center justify-between">대기환경보전법 자가측정의 대상, 항목 및 방법<FaArrowRightLong  className="text-2xl"/></Link>

          </div>
      </div>
    </div>
  );
};

export default BusinesTab1;
