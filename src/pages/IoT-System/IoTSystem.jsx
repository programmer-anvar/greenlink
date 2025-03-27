import React, { useState } from 'react';
import subvisual3 from '../../assets/IoT-System/subvisual3.jpg';
import IotSystemTab1 from '../../components/iot-system-tabs/IotSystemTab1';
import IotSystemTab2 from '../../components/iot-system-tabs/IotSystemTab2';
import IotSystemTab3 from '../../components/iot-system-tabs/IotSystemTab3';


const IoTSystem = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ["Iot 게이트웨이", "핵심기능", "Iot 관리시스템"];
    const content = [
         <IotSystemTab1/>,
         <IotSystemTab2/>,
         <IotSystemTab3/>,
         "Tab3",
          
    ];
  return (
    <div>
      <div className='h-[70vh] bg-no-repeat w-full flex items-center justify-center' style={{ backgroundImage: `url(${subvisual3})`, backgroundSize: 'cover',backgroundPosition:'center' }}>
        <h2 className='text-4xl text-white font-bold'>IoT 시스템</h2>
      </div>

      <div className='container '>
        <h2 className='text-2xl text-center mt-10'>IoT 관리시스템</h2>

        <h2 className='mt-5 text-[16px] md:text-xl font-bold'>KEFA IoT 관리시스템</h2>
        <p className='mt-2 text-[#333] text-[12px] md:text-[16px]'>저희 KEFA 연구원은 환경설비의 최적의 가동상태와 효율을 유지하기위해 필요한 구성요소를 정기적으로 점검하여 생산설비의 가동중지시간의 최소화 및 비용감소효과를 가져
        효율적인 운영이 가능하도록 서비스를 제공하고 있습니다.</p>
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
  );
}

export default IoTSystem;
