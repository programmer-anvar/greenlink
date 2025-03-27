import { Link } from 'react-router-dom'
import headerImg from '../../assets/WaterPollutantAnalysis/headerImg.jpg'
import { FaArrowRightLong } from "react-icons/fa6";

const BusinesTab3 = () => {
  return (
    <div>
      <img src={headerImg} alt="" />

      <div className=' md:flex md:items-center md:justify-between  w-full mt-12 border-t-2 border-gray-400  border-b-1  py-7'>
        <h4 className='md:text-[14px] lg:text-2xl font-bold'>적용분야</h4>
        <p className='mt-3  md:text-[14px] lg:text-xl text-[#989898]'>
        생활오수, 하천수, 매립장, 공장폐수, 중수도,빗물·우수, 호소수, 침출수, 생활하수, 농업용수</p>
      </div>

      <div className=' md:flex md:items-center md:justify-between  w-full  border-gray-400  border-b-1  py-7'>
        <h4 className='md:text-[14px] lg:text-2xl font-bold'>수질측정대행</h4>
        <p className='mt-3  md:text-[14px] lg:text-xl text-[#989898] max-w-[800px]'>
수질 및 수생태계 보전에 관한 법률 제46조에 의거 수질오염물질에 대한 측정·분석 및 자가측정 사업장의 폐수배출시설 및 방지시설에 대한 자가측정</p>
      </div>

      <div className=' md:flex md:items-center md:justify-between  w-full  border-gray-400  border-b-1  py-7'>
        <h4 className='md:text-[14px] lg:text-2xl font-bold'>특정수질유해물질분석</h4>
        <p className='mt-3  md:text-[14px] lg:text-xl text-[#989898] max-w-[800px]'>
        수질 및 수생태계 보전에 관한 법률 시행령 제31조제1항의 인허가 관련 자료 제공 아크릴아미드 포함 32종 전항목 분석</p>
      </div>

      <div className=' md:flex md:items-center md:justify-between  w-full  border-gray-400  border-b-1  py-7'>
        <h4 className='md:text-[14px] lg:text-2xl font-bold'>적용분야</h4>
        <p className='mt-3  md:text-[14px] lg:text-xl text-[#989898] max-w-[800px]'>
       
시험규격 : 수질오염공정시험기준, KS13206, KS13217, APHA standard methods 등
관련기기 : UV, ICP, IC, GC, GC/MS, LC, LC/MS, MS, 질소인분석기, 수질전자동분석기, 수은분석기 등
관련법규 : 수질 및 수생태계 보전에 관한 법률, 지하수법, 하수도법, 먹는물관리법 등</p>
      </div>

     <div className=' grid grid-cols-1 md:grid-cols-2 gap-2.5  w-full  border-gray-400  border-b-1  py-7'>
      <Link to={'#'} className='flex items-center justify-between bg-[#353535] p-3.5 text-white'>수질 및 수생태계 보전에 관한 법률 수질오염물질 보기  <FaArrowRightLong className='text-xl'/></Link>
      <Link to={'#'} className='flex items-center justify-between bg-[#353535] p-3.5 text-white'>수질 및 수생태계 보전에 관한 법률 특정수질오염물질 보기  <FaArrowRightLong className='text-xl'/></Link>
     </div>

    </div>
  )
}

export default BusinesTab3
