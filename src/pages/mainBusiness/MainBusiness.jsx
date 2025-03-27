import React, { useState } from 'react'
import bgImg from '../../assets/mainBusines.jpg'
import BusinesTab1 from '../../components/Busines-tabs/BusinesTab1';
import BusinesTab2 from '../../components/Busines-tabs/BusinesTab2';
import BusinesTab3 from '../../components/Busines-tabs/BusinesTab3';
import BusinesTab4 from '../../components/Busines-tabs/BusinesTab4';

const MainBusiness = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["대기오염물질분석", "생태독성물질분석", "수질오염물질분석", "악취오염물질분석"];
  const content = [
       <BusinesTab1/>,
       <BusinesTab2/>,
       <BusinesTab3/>,
       <BusinesTab4/>
        
  ];
  return (
    <div>
      <div className='h-[70vh] bg-no-repeat w-full flex items-center justify-center' style={{backgroundImage:`url(${bgImg})`,  backgroundPosition:'center'}}>
           <h2 className='text-4xl text-white'>BUSINESS</h2>
      </div>

      <div className='container'>
        <h2 className='text-2xl md:text-3xl text-center mt-10'>환경측정분석</h2>
        <div className='mt-12'>
            <h2 className='text-xl md:text-2xl'>KEFA 환경시험ㆍ측정평가</h2>
            <p className='mt-3 text-[14px] md:tetx-xl'>저희 KEFA시험원은 국민들의 보다 나은 쾌적한 환경 속에서 생활할 수 있도록 그 기반이 되는 환경오염정도 확인에 대한 시험분석서비스 제공에 노력하고 있습니다.
            본 연구원은 ISO17025를 기반으로 시험접수에서부터 완료까지의 전 과정을 Management 하고 있으며, Service의 quality control을 위해 최선의 노력을 다하고 있습니다.</p>
        </div>
        <div className='mt-12'>
            <h2 className='text-xl md:text-2xl'>대표전화 : 070-4287-9555</h2>
            <h2 className='text-xl mt-3'>빠른 내선 번호 안내</h2>
            <p className='mt-3 text-[14px] md:tetx-xl'>IoT : 1번, 대기 :2번, 수질 :3번, 악취 : 4번, 소음진동 : 5번, 시설유지보수 : 6번, 그외 문의 : 0번</p>
        </div>
        <div className="container mt-10">
                    <div className="flex border-b border-gray-300 mt-14">
  {tabs.map((tab, index) => (
    <button
      key={index}
      onClick={() => setActiveTab(index)}
      className={`flex-1 py-3 text-center text-lg font-medium transition-all duration-300 rounded-t-lg cursor-pointer
        ${
          activeTab === index
            ? "border-b-4 border-blue-500 text-blue-600 bg-gray-100 text-[10px] md:text-xl"
            : "border-b-4 border-transparent text-gray-500 hover:text-blue-500 hover:bg-gray-50 text-[10px] md:text-xl"
        }`}
    >
      {tab}
    </button>
  ))}
</div>

      <div className="p-4  mt-9 rounded-md">
          {content[activeTab]}
      </div>
    </div>
      </div>
    </div>
  )
}

export default MainBusiness
