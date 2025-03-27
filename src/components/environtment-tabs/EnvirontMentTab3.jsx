import React from 'react'
import bgImg from '../../assets/agencyTabImg/agensinBg.jpg'
import img1 from '../../assets/agencyTabImg/agensBorder1.png'
import img2 from '../../assets/agencyTabImg/facility_img14.png'
import img3 from '../../assets/agencyTabImg/facility_img15.png'
import img4 from '../../assets/agencyTabImg/facility_img16.png'
const EnvirontMentTab3 = () => {
  const cardData = [
    {
      img:img1,
      title:'인허가 의뢰'
    },
    {
      img:img2,
      title:'계약서 및 발주'
    },
    {
      img:img3,
      title:'신고절차'
    },
    {
      img:img4,
      title:'허가증'
    },
  ]
  
  const procedures = [
    {
      num:'01',
      title:'용역의뢰'
    },
    {
      num:'02',
      title:'현장방문'
    },
    {
      num:'03',
      title:'기초자료 수집/분석'
    },
    {
      num:'04',
      title:'제안서 제출'
    },
    {
      num:'05',
      title:'협의 계약체결'
    },
    {
      num:'06',
      title:'용역실시'
    },

  ]
  return (
    <div>
      <div>
        <img className='w-full' src={bgImg} alt="" />
      </div>
      <div className='  justify-between w-full mt-12 border-t-2 border-gray-400  border-b-1  py-7'>
        <h2 className='text-2xl'>환경관리대행</h2>
        <div className='mt-4'>
          <p className='text-[#989898]'>
              기업활동 규제 완화에 관한 특별조치법 제 40조의 규정과 변경된 하수도법에 의해 기업인들이 기업활동 중에 받는 각종 규제에 의한
          </p>
          <p className='text-[#989898] mt-3'>
          부담 중 환경관리(오,폐수처리)에 대한 부담을 줄이고자 일정 이상의 기술 인력과 시설, 장비를 갖춘 업체를 환경청에서 환경관리대행업체로
          </p>
          <p className='text-[#989898] mt-3'>
          지정하여 운영시설에서 발생되는 제반사항(오염물질의 배출허용기준 초과)에 대하여 관리대행기관에서 책임을 지게 되므로 기업체의 부담이 없습니다 .
          </p>
        </div>
      </div>

      <div className='mt-12'>
      <div className="w-full ">
        <h2 className='text-2xl font-bold'>환경관리대행이 하는 일</h2>
        <div>
        <div className='flex items-center flex-wrap gap-y-5 mt-7'>
          {cardData.map((item,index) =>(
            <div key={index} className='max-w-[190px]'>
            <img className='w-full' src={item.img} alt="" />
            <h2 className='text-center mt-4 font-bold'>{item.title}</h2>
          </div>
          ))}
        </div>
        <div className=' mt-12'>
        <h3 className='text-xl font-bold text-[#555555]'>대기오염 배출 사업장: 대기오염물질을 배출하는 사업장으로서, 일정 규모 이상의 배출시설을 보유한 사업장은 대기환경 관리 대행 기술인을 선임해야 합니다.</h3>
        <ol className='mt-4 text-[#AAAAAA]'>
          <li>1종: 환경기술사, 대기환경기사, 대기환경산업기사 자격증 소지자 또는 해당 분야 경력 5년 이상</li>
          <li>2종: 대기환경기사, 대기환경산업기사 자격증 소지자 또는 해당 분야 경력 3년 이상</li>
          <li>3종: 대기환경기사, 대기환경산업기사 자격증 소지자 또는 해당 분야 경력 2년 이상</li>
          <li>4종: 대기환경산업기사 자격증 소지자 또는 해당 분야 경력 1년 이상</li>
          <li>5종: 대기환경산업기사 자격증 소지자 또는 해당 분야 경력 6개월 이상</li>
          <li>각 종수에 따른 자격 요건은 오염 배출량과 시설 규모에 따라 달라집니다. 이를 참고하여 적절한 환경기술인을 선임해야 합니다.</li>
        </ol>

        <h3 className='text-xl font-bold text-[#555555] mt-12'>수질오염 배출 사업장: 공장이나 산업시설에서 폐수를 배출하는 사업장은 수질오염 방지를 위해 환경관리 기술인을 선임해야 합니다.
        </h3>
        <ol className='mt-4 text-[#AAAAAA]'>
          <li>1종: 환경기술사, 수질환경기사, 수질환경산업기사 자격증 소지자 또는 해당 분야 경력 5년 이상</li>
          <li>2종: 수질환경기사, 수질환경산업기사 자격증 소지자 또는 해당 분야 경력 3년 이상</li>
          <li>3종: 수질환경기사, 수질환경산업기사 자격증 소지자 또는 해당 분야 경력 2년 이상</li>
          <li>4종: 수질환경산업기사 자격증 소지자 또는 해당 분야 경력 1년 이상</li>
          <li>5종: 수질환경산업기사 자격증 소지자 또는 해당 분야 경력 6개월 이상</li>
          <li>각 종수에 따른 자격 요건은 오염 배출량과 시설 규모에 따라 달라집니다. 이를 참고하여 적절한 환경기술인을 선임해야 합니다.</li>
        </ol>
      </div>
        </div>
      </div>

      
      </div>

      <div className=' w-full mt-12 border-t-1 border-gray-400  border-b-1  py-7'>
        <h2 className='text-2xl'>환경관리대행 절차</h2>
        <div className='flex  gap-8 mt-7'>
          {procedures.map((item,index) =>(
            <div key={index}>
              <div className='w-[110px] h-[110px] bg-[#2AC011] flex items-center justify-center text-white rounded-full'>
              <h2 className='text-xl'>{item.num}</h2>
            </div>
            <h5 className='text-center mt-7 max-w-[120px]'>{item.title}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className=' w-full mt-12  border-gray-400  border-b-1  pb-10'>
        <h2 className='text-2xl font-bold'>환경관리대행이
        기업체에 유리한 점</h2>

        <div className='mt-4'>
          <h3 className='font-bold text-[18px]'>1. 난분해성오염물질처리 문제 해결</h3>
          <p className='text-[#BEBEBE]'>어느 오염물질이라도 최소비용으로 배출허용기준 이하로 안전하게 처리.</p>
        </div>

        <div className='mt-4'>
          <h3 className='font-bold text-[18px]'>2. 오염물질 초과 배출에 대한 불안감 해소</h3>
          <p className='text-[#BEBEBE]'>배출부과금을 포함하여 오염물질 처리관련 제반사항을 책임지고 관리.</p>
        </div>

        <div className='mt-4'>
          <h3 className='font-bold text-[18px]'>3. 오염물질 소요비용 절감</h3>
          <p className='text-[#BEBEBE]'>기존처리시설의 효율 극대화와 환경기술인 선임 및 관리에 소요되는 비용 절감.</p>
        </div>
        <div className='mt-4'>
          <h3 className='font-bold text-[18px]'>4. 기업체의 환경관련 이미지 상승</h3>
          <p className='text-[#BEBEBE]'>오염물질처리문제로 생산이 위축되지 않도록 협의하면서 오염물질 처리에 최선을 다함으로써 기업활동에만 전념할 수 있음.</p>
        </div>
      </div>
    </div>
  )
}

export default EnvirontMentTab3
