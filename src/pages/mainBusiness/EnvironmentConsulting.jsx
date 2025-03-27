import { useState } from 'react';
import bgImg from '../../assets/mainBusines.jpg'
import EnvirontMentTab2 from '../../components/environtment-tabs/EnvirontMentTab2';
import EnvirontMentTab3 from '../../components/environtment-tabs/environtMentTab3';
import EnvironmenttTab1 from '../../components/environtment-tabs/EnvironmenttTab1';



const EnvironmentConsulting = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["환경인허가", "통합환경인허가", "환경관리대행"];
  const content = [
    <EnvironmenttTab1/>,
    <EnvirontMentTab2/>,
    <EnvirontMentTab3/>
  ];
  
  return (
      <div>
          <div className='h-[70vh] bg-no-repeat w-full flex items-center justify-center' style={{backgroundImage:`url(${bgImg})`,  backgroundPosition:'center'}}>
            <h2 className='text-4xl text-white'>BUSINESS</h2>
        </div>

        <div className="container mt-12">
        <h2 className='text-3xl text-center mt-12'>환경컨설팅</h2>
        
        <h3 className='text-2xl mt-9'>KEFA 환경컨설팅</h3>
        <p className='mt-2'>아래 대상 및 적용시기에 해당하는 업체는 통합환경인허가를 선택, 대상 및 적용시기에 해당하지 않은 업체는 환경인허가를 선택
              대상 : 19개 업종 대기 또는 수질 1·2종 사업장(중,소규모 사업장은 자발적 통합 허가 신청가능)
              적용시기 : 17년부터 5년간 단계적 시행(중,소규모 사업장은 자발적 통합 허가 신청가능)</p>
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
            ? "border-b-4 border-blue-500 text-blue-600 bg-gray-100"
            : "border-b-4 border-transparent text-gray-500 hover:text-blue-500 hover:bg-gray-50"
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
    )
}

export default EnvironmentConsulting