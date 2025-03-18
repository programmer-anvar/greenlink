import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component, useState } from "react";
import Slider from "react-slick";
import { FaArrowRightLong } from "react-icons/fa6";
import { businesData } from "./busines-data";
import MainNews from "../news/MainNews";
const AurBusiness = () => {
  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(1500);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <section >
        <div className="max-w-[1400px] m-auto">
      <h1 className="my-5 text-4xl font-bold text-center">OUR BUSINESS</h1>
      <p className="text-xl text-center">
        고객의 건강을 책임지고 더 나아가 환경을 책임지는 기업입니다.
      </p>

      
      <div className="grid grid-cols-4 gap-4 mt-8">
      {businesData.map((item,i) =>(
        <div key={i} className="p max-w-sm bg-white  border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg w-full h-[300px] object-cover"
            src={item.img}
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
             {item.title} 
            </h5>
          </a>
          
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
             {item.date} 
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-[50px]">
            {item.desc}
          </p>
          <a
            href="#"
            className="flex items-center justify-between px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <FaArrowRightLong  className="text-[20px]"/>
            {/* <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                // stroke="currentColor"
                // stroke-linecap="round"
                // stroke-linejoin="round"
                // stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg> */}
          </a>
        </div>
</div>
      ))}
      </div>
      </div>
      <div className="customers">
      <h2 className="text-4xl text-white">고객과 함께 하는 글로벌 TOP시험인증기관</h2>
      </div>
      
      <MainNews/>
    </section>
  );
};

export default AurBusiness;
