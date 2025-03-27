import React from 'react'
import environtMentImg from '../../assets/environtMentImg.jpg';
import img1 from '../../assets/environmentConsulting/img1.png'
import img2 from '../../assets/environmentConsulting/img2.png'
import img3 from '../../assets/environmentConsulting/img3.png'
import img4 from '../../assets/environmentConsulting/img4.png'

const EnvironmenttTab1 = () => {
  return (
    <div className='container'>
      <div>
        <img src={environtMentImg} alt="environtMentImg" />
        <div className='h-1 w-full bg-black mt-5'></div>
      </div>

      <div className='flex items-center justify-between w-full mt-5'>
        <h2 className='text-xl'>환경인허가</h2>
        <p className='max-w-[780px]'>
KEFA는 배출시설설치에 관한 설치허가, 변경허가, 설치신고, 변경신고 등 환경에 미치는 영향을 고려한 인허가 업무를 대행함으로써,
환경적으로 건강하고 지속가능한 청정 환경을 조성하기 위해 최선을 다하고 있습니다.
        </p>
      </div>

      <div className='flex justify-between mt-12  border-t-1 border-gray-400  border-b-1  py-7'>
        <h2 className='text-xl'>환경인허가절차</h2>
        <div className='flex items-center gap-7'>
          <div className='max-w-[170px]'>
          <img className='w-full' src={img1} alt="" />
           <p className='text-center text-[14px]'>인허가 의뢰</p>
          </div>
          <div className='max-w-[170px]'>
          <img className='w-full' src={img2} alt="" />
           <p className='text-center text-[14px]'>계약서 및 발주</p>
          </div>
          <div className='max-w-[170px]'>
          <img className='w-full' src={img3} alt="" />
           <p className='text-center text-[14px]'>신고절차</p>
          </div>

          <div className='max-w-[170px]'>
          <img className='w-full' src={img4} alt="" />
           <p className='text-center text-[14px]'>허가증</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnvironmenttTab1
