import React from 'react'
import bgImg from '../../assets/mainBusines.jpg'

const MainBusiness = () => {
  return (
    <div>
      <div className='h-[70vh] bg-no-repeat w-full flex items-center justify-center' style={{backgroundImage:`url(${bgImg})`,  backgroundPosition:'center'}}>
           <h2 className='text-4xl text-white'>BUSINESS</h2>
      </div>

      <div className='container'>
        <h2 className='text-3xl text-center mt-10'>환경측정분석</h2>
        <div className='mt-12'>
            <h2 className='text-2xl'>KEFA 환경시험ㆍ측정평가</h2>
            <p className='mt-3 tetx-xl'>저희 KEFA시험원은 국민들의 보다 나은 쾌적한 환경 속에서 생활할 수 있도록 그 기반이 되는 환경오염정도 확인에 대한 시험분석서비스 제공에 노력하고 있습니다.
            본 연구원은 ISO17025를 기반으로 시험접수에서부터 완료까지의 전 과정을 Management 하고 있으며, Service의 quality control을 위해 최선의 노력을 다하고 있습니다.</p>
        </div>
        <div className='mt-12'>
            <h2 className='text-2xl'>대표전화 : 070-4287-9555</h2>
            <h2 className='text-xl mt-3'>빠른 내선 번호 안내</h2>
            <p className=''>IoT : 1번, 대기 :2번, 수질 :3번, 악취 : 4번, 소음진동 : 5번, 시설유지보수 : 6번, 그외 문의 : 0번</p>
        </div>
        <div className=''></div>
      </div>
    </div>
  )
}

export default MainBusiness
