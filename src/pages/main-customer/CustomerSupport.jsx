import React from 'react'
import mainCustomer from "../../assets/main-customer/main-customer.jpg";
import img1 from '../../assets/main-customer/face1.jpg'
import img2 from '../../assets/main-customer/img2.jpg'
import img3 from '../../assets/main-customer/img3.jpg'
import img4 from '../../assets/main-customer/ing4.jpg'
import { FaArrowRightLong } from 'react-icons/fa6';


const CustomerSupport = () => {
    const myData = [
        {
            img:img1,
            title:'대기환경플랜트',
            smalTitle:'Environment Plant Engineer',
            date:'최원석 수석연구원 ',
            desc:'070-4287-9556'
        },
        {
            img:img2,
            title:'기술영업',
            smalTitle:'Environment Consultant',
            date:'신민석 수석연구원',
            desc:'070-4287-9557'
        },
        {
            img:img3,
            title:'대기시험검사',
            smalTitle:'Analysis Consultant',
            date:'박성진 수석연구원',
            desc:'070-4287-9555'
        },
        {
            img:img4,
            title:'수질시험검사 및 고객지원',
            smalTitle:'Costomer Service',
            date:'박성진 수석연구원',
            desc:'070-4287-9555'
        },
    ]
  return (
    <div>
    <div
      style={{ backgroundImage: `url(${mainCustomer})` }}
      className="w-full h-[60vh] flex items-center justify-center"
    >
      <h2 className="text-3xl  text-white">CUSTOMER</h2>
    </div>
    <div className="container">
      <h1 className="text-xl md:text-4xl text-center my-5">고객지원</h1>
      <h2 className="text-xl mt-5 md:text-2xl">고객지원</h2>
      <p className="md:text-[16px] mt-2">고객의 최적화된 환경을 위해 최선을 다하는 KEFA입니다. 궁금한 점 있으시면 언제든지 문의주십시오. 친절히 답변드리겠습니다.</p>

      <div className="h-[1px] w-full my-8 bg-black"></div>

      <div className="flex flex-wrap justify-center my-20 gap-7 md:ustify-between ">
                  {myData.map((item, index) => (
                    <div
                      key={index}
                      className="w-full lg:max-w-[250px] strategic-card"
                      style={{ backgroundImage: `url(${item.img})` }}
                    >
                      <div className="strategic-card-content p-3">
                        <h2 className="strategic-card-title pb-2">{item.title}</h2>
                        <p>{item.smalTitle}</p>
                        <p>{item.desc}</p>
                        <p className="strategic-card-body">{item.date}</p>
                        {/* <button
                          type="button"
                          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-6 w-[180px] flex items-center justify-between cursor-pointer"
                        >
                          더보기
                          <FaArrowRightLong className="text-[20px] ml-2" />
                        </button> */}
                        
                      </div>
                    </div>
                  ))}
                </div>

                <div className='w-full h-[0.5px] bg-gray-400 mt-11'></div>
      
    </div>
  </div>
  )
}

export default CustomerSupport
