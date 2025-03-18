import React from 'react'
import { Link } from 'react-router-dom';
import { BiLocationPlus } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className='bg-[#3A3E42]'>
        <div className='flex items-center justify-between max-w-[1400px] m-auto py-7'>
            <div className='flex items-center gap-7'>
                <Link to={'/'} className='text-xl text-white'>회사소개</Link>
                <Link to={'/'} className='text-xl text-white'> 개인정보취금방침</Link>
            </div>
            <div className='bg-black rounded-full h-[30px] w-[30px] flex items-center justify-center'>
              <b className='font-bold text-white'>N</b>
            </div>
        </div>
        <hr />

        <div className='flex justify-between max-w-[1400px] m-auto mt-7 pb-7'>
           <div>
           <h2 className='flex items-center text-white'>
           <BiLocationPlus />
           업체명 : 한국환경기계분석연구원 대표자 : 박성진 사업자등록번호 : 615-86-14498 
            </h2>  
            <h2 className='text-white '>
           본사 : 경남 창원시 진해구 두동 1296-15 청안프리존 빌딩 502호 ( 웅동로 166 )
              </h2>  
              
              <h4 className='text-[#C7D0C7] mt-[15px]'>TEL : 070-4287-9555 FAX : 0303-3130-8821 E-MAIL : kefa@ke-fa.com</h4>
              <p className='text-[#878e94]'>COPYRIGHT ⓒ 2019 KEFA LTD., ALL RIGHTS RESERVED.</p>
           </div>

           
<form className="max-w-[700px]">
  <select id="countries" className="bg-gray-500 border border-gray-700 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose a country</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
</form>

        </div>
    </footer>
  )
}

export default Footer
