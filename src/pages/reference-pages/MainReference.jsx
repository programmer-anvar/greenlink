import React, { useState } from "react";
import mainBg from "../../assets/main-reference/main-reference.jpg";
import { card_data } from "./reference-data";
import { FaArrowRightLong } from "react-icons/fa6";
import "./MainReference.css";

const MainReference = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Number of items per page

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = card_data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(card_data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div
        className="w-full h-[60vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${mainBg})`, backgroundSize: "cover" }}
      >
        <h2 className="text-4xl text-white">REFERENCE</h2>
      </div>

      <div className="container">
        <h2 className="text-2xl text-center my-14">환경측정분석</h2>

        <div className="flex items-center justify-center flex-wrap gap-9 m-auto">
          {currentItems.map((item, index) => (
            <div className="flip-card" key={index}>
              <div className="flip-card-inner">
                <div
                  className="flip-card-front"
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundPosition: "center",
                  }}
                >
                  <p className="title">FLIP CARD</p>
                </div>
                <div className="flip-card-back">
                  <p className="title">안녕하십니까?</p>
                  <p>
                    환경측정분석, 환경인허가, 환경설비설치 및 유지보수 전반에 대한 서비스를 제공하고 있는 한국환경기계분석연구원 KEFA (케파)입니다. 고객 분들께서 저희 KEFA 한국환경기계분석연구원 (케파)에 수질 분석 문의시, ​공정시험법에 대해 궁금해하시는 것이 많아, 이렇게 주요 수질오염물질에 대한
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          {pageNumbers.map(number => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-pointer"
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainReference;
