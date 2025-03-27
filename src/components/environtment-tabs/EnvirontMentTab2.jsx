import React from 'react'
import img1 from '../../assets/environmentConsulting/permitImg1.jpg'
import img2 from '../../assets/environmentConsulting/permitImg2.jpg'

const EnvirontMentTab2 = () => {
  return (
    <div>
      <div>
        <img className='w-full' src={img1} alt="img" />
      </div>

      <div className='flex justify-between w-full mt-12 border-t-2 border-gray-400  border-b-1  py-7'>
          <h2 className='text-xl'>통합환경인허가 소개</h2>
          <div className='max-w-[900px]'>
          <p className='text-gray'>
2017.01.01일 이후 일부 업종에 대하여 오염매체별로 개별적으로 허가.관리하던 배출시설 관리를 사업장 단위에서 하나로 종합하여 관리하는 선진 환경관리방식입니다.
          </p>
          <p className='mt-4'>
          오염물질이 대기,물 등 환경과 건강에 미치는 영향을 종합적으로 고려하고, 기술.경제적으로 가능한 수단(최적가용기법)을 사업장에 적용하여 오염물질 배출을 최소화합니다.
          </p>
          </div>
      </div>

      <div className='mt-12'>
        <img src={img2} alt="" />
      </div>

      <div className='flex justify-between w-full mt-12 border-t-2 border-gray-400  border-b-1  py-7'>
        <h2 className='text-xl'>사업장 단위 통합관리</h2>
        <div>
          <h3 className='font-bold text-[#555555]'>현행 9가지 매체별 인허가 분야를 1개의 통합인허가로 변경</h3>
          <ol className='text-[#B3B3B3] mt-3'>
            <li>1. 대기오염물질 배출시설</li>
            <li>2. 비산먼지발생사업</li>
            <li>3. 휘발성유기화합물 배출시설</li>
            <li>4. 소음.진동배출시설</li>
            <li>5. 폐수배출시설</li>
            <li>6. 비점오염원</li>
            <li>7. 악취배출시설</li>
            <li>8. 특정토양오염관리대상 시설</li>
            <li>9. 폐기물처리시설</li>
          </ol>

          <h3 className='mt-6 font-bold text-[#555555]'>통합인허가 및 관리</h3>
          <ol className='text-[#B3B3B3] mt-3'>
            <li>1. 배출시설별 9개 인허가를 사업장당 하나로 통합(통합환경관리계획서 제출)</li>
            <li>2. 오염물질 매체간 이동 고려</li>
            <li>3. 통합 지도 점검</li>
          </ol>

          <h3 className='text-[#B3B3B3] mt-6 font-bold'>※대형사업장(수질.대기 1,2종)대상, 2017년부터 환경영향이 큰 20개 업종별로 단계적 적용</h3>
        </div>
      </div>
    </div>
  )
}

export default EnvirontMentTab2
