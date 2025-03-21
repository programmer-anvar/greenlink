import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "./busines.css";
import { businesData } from "./busines-data";

const AurBusiness = () => {
  return (
    <section>
      <div className="container ">
        <h1 className="text-4xl font-bold text-center">OUR BUSINESS</h1>
        <p className="text-xl text-center mt-2">
          고객의 건강을 책임지고 더 나아가 환경을 책임지는 기업입니다.
        </p>

        <div className="flex flex-wrap mt-9 justify-center gap-y-6  md:justify-between">
          {businesData.map((item, index) => (
            <div key={index} className="w-full md:max-w-[300px] md: card1" style={{ backgroundImage: `url(${item.img})` }}>
              <div className="card-content">
                <h2 className="card-title">{item.title}</h2>
                <p className="card-body">{item.desc}</p>
                <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-6 w-[180px] flex items-center justify-between cursor-pointer">
                  더보기
                  <FaArrowRightLong className="text-[20px] ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="customers ">
        <h2 className="text-[18px] md:text-4xl text-white p-3">
          고객과 함께 하는 글로벌 TOP시험인증기관
        </h2>
      </div>
    </section>
  );
};

export default AurBusiness;
