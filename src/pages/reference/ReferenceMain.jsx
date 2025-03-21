import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";


import "./reference.css";
import { mainReference } from "./reference-data";

const ReferenceMain = () => {
  return (
    <section className="bg-[#F4F4F4] p-4 mt-10">
      <div className="container m-auto mt-12 font-bold pt-[70px] pb-[80px]">
        <h1 className="text-4xl text-center">REFERENCE</h1>
        <p className="mt-4 text-xl text-center">
          KEFA에서 작업한 시공사례를 보실 수 있습니다.
        </p>
         <div className="flex flex-wrap justify-center gap-7 md:ustify-between p-4 mt-9">
                  {mainReference.map((item, index) => (
                    <div key={index} className="w-full lg:max-w-[380px] reference-card" style={{ backgroundImage: `url(${item.img})` }}>
                      <div className="reference-card-content">
                        <h2 className="reference-card-title">{item.title}</h2>
                        <p className="reference-card-body">{item.desc}</p>
                        <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-6 w-[180px] flex items-center justify-between cursor-pointer">
                          더보기
                          <FaArrowRightLong className="text-[20px] ml-2" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
      </div>
    </section>
  );
};

export default ReferenceMain;
