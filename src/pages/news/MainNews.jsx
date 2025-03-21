import { Link } from "react-router-dom"
import { FaLongArrowAltRight } from "react-icons/fa";

const MainNews = () => {
  return (
    <section className="container ">
        <h1 className="text-4xl text-center">NEWS</h1>
        <p className="mt-3 text-center">KEFA의 최신 소식을 전해드립니다.</p>
        
        <div className="mt-10">
            <div className="flex items-center justify-between border-b-[1px] border-gray-400 w-full p-7 gap-8">
                <Link to='/' className="text-[13px] sm:text-[16px] md:text-xl hover:text-blue-600">[KEFA] [환경부] 낙동강 물문제 해소를 위해 관계기관..</Link>
                <h2 className="text-[12px] sm:text-[16px] md:text-xl">2019-04-30</h2>
            </div>
            
            <div className="flex items-center justify-between border-b-[1px] border-gray-400 w-full p-7 gap-8">
                <Link to='/' className="text-[13px] sm:text-[16px] md:text-xl hover:text-blue-600">[KEFA] [환경부] 낙동강 물문제 해소를 위해 관계기관..</Link>
                <h2 className="text-[12px] sm:text-[16px] md:text-xl">2019-04-30</h2>
            </div>
            
            <div className="flex items-center justify-between border-b-[1px] border-gray-400 w-full p-7 gap-8">
                <Link to='/' className="text-[13px] sm:text-[16px] md:text-xl hover:text-blue-600">[KEFA] [환경부] 낙동강 물문제 해소를 위해 관계기관..</Link >
                <h2 className="text-[12px] sm:text-[16px] md:text-xl">2019-04-30</h2>
            </div>
        </div>
        
        <div className="flex items-center justify-center w-full">
        <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5  me-2 mt-10 w-[180px] flex items-center justify-between cursor-pointer">더보기 <FaLongArrowAltRight  className="text-2xl"/></button>
        </div>
    </section>
  )
}

export default MainNews
