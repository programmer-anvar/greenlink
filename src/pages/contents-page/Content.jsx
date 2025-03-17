import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
const Content = () => {
  return (
   <section className='max-w-[1400px] m-auto'>
    <h2 className='my-10 text-2xl font-bold'>소규모 사업장 방지시설 설치지원 국고보조금 업무지침, 환경부 대기관리과</h2>
    <div className="flex items-center justify-between ">
     <motion.div
                     initial={{ x: -200, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{ duration: 1.5, ease: "easeOut" }}
                     className="text-white max-w-[800px]"
                   >
        <div className='bg-[#192E59] w-full h-[50px] rounded-t-[10px] flex items-center justify-center text-white'>
         <h3 className='my-auto text-xl'>측정항목</h3>
        </div>
        <div className='grid grid-cols-2  gap-x-[60px] gap-y-[40px] bg-[#E9F6FD]   p-8'>
          <div>
            <img className='w-[90px] object-cover' src="https://www.greenlink.or.kr/com/images/sub/s111_img01_01.png" alt="" />
            <p className='mt-6 text-xl font-bold text-center'>전류</p>
          </div>
          
          <div>
            <img className='w-[90px] object-cover' src="https://www.greenlink.or.kr/com/images/sub/s111_img01_01.png" alt="" />
            <p className='mt-6 text-xl font-bold text-center'>전류</p>
          </div>
          <div>
            <img className='w-[90px] object-cover' src="https://www.greenlink.or.kr/com/images/sub/s111_img01_01.png" alt="" />
            <p className='mt-6 text-xl font-bold text-center'>전류</p>
          </div>
          
          <div>
            <img className='w-[90px] object-cover' src="https://www.greenlink.or.kr/com/images/sub/s111_img01_01.png" alt="" />
            <p className='mt-6 text-xl font-bold text-center'>전류</p>
          </div>
        </div>
        </motion.div>
      
        <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-white max-w-[800px]"
              >
        <div className='bg-[#192E59] w-full h-[50px] rounded-t-[10px] flex items-center justify-center text-white'>
         <h3 className='my-auto text-xl'>측정항목</h3>
        </div>
        <div className='grid grid-cols-1 bg-[#E9F6FD]  gap-y-[40px] py-8 px-[70px]'>
          <div>
            <img className='w-[90px] object-cover' src="https://www.greenlink.or.kr/com/images/sub/s111_img01_01.png" alt="" />
            <p className='mt-6 text-xl font-bold text-center'>전류</p>
          </div>
          
          <div>
            <img className='w-[90px] object-cover' src="https://www.greenlink.or.kr/com/images/sub/s111_img01_01.png" alt="" />
            <p className='mt-6 text-xl font-bold text-center'>전류</p>
          </div>
        </div>
      </motion.div>
      
      <motion.div
                      initial={{ x: 200, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    >
        <div className='bg-[#192E59] w-full h-[50px] rounded-t-[10px] flex items-center justify-center text-white'>
         <h3 className='my-auto text-xl'>측정항목</h3>
        </div>
        
        <div className='grid grid-cols-1 bg-[#E9F6FD]  gap-y-[40px] py-8 px-[70px]'>
          <div>
            <img className='w-[400px] h-[300px] object-cover' src="https://www.greenlink.or.kr/com/images/sub/s111_img01_08.png" alt="" />
          </div>
        </div>
        
      </motion.div>
      
      <motion.div
                 initial={{ x: 200, opacity: 0 }}
                 animate={{ x: 0, opacity: 1 }}
                 transition={{ duration: 1.5, ease: "easeOut" }}
              >
        <div className='bg-[#192E59] w-full h-[50px] rounded-t-[10px] flex items-center justify-center text-white'>
         <h3 className='my-auto text-xl'>측정항목</h3>
        </div>
        <div className='grid grid-cols-1 bg-[#E9F6FD]  gap-y-[40px] py-8 px-[70px]'>
          <div className='flex flex-col items-center justify-between gap-1'>
            <img className='w-[90px] object-cover' src="https://www.greenlink.or.kr/com/images/sub/s111_icon_factory.png" alt="" />
            <div className='w-0.5 h-[40px]  bg-[#225DC6]'></div>
            <p className='text-[#225DC6]'>측정 데이터 수신</p>
            <div className='w-0.5 h-[40px]  bg-[#225DC6]'></div>
            <img src="https://www.greenlink.or.kr/com/images/sub/s111_icon_gateway.png" alt="" />
            <p className='text-[#225DC6] mt-2'>IoT 게이트웨이</p>
          </div>
        </div>
      </motion.div>
      
      
      
    </div>
    
    <img className='object-cover w-full mt-12' src="https://www.greenlink.or.kr/com/images/sub/s111_c02_img01.png" alt="ghjhgjhgjj" />
   </section>
  )
}

export default Content
