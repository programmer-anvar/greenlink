import React from "react";
import headerImg from "../../assets/Analysisofodorpollutants/sub_photo4.jpg";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const BusinesTab4 = () => {
  return (
    <div>
      <img src={headerImg} alt="" />

      <div className="  justify-between w-full mt-12 border-t-2 border-gray-400  border-b-1  py-7">
        <h2 className="text-[16px] md:text-2xl">복합악취 </h2>
        <p className="text-[14px] md:text-[17px] mt-2.5 text-[#555]">
          “복합악취”란 두 가지 이상의 악취물질이 함께 작용하여 사람의 후각을
          자극하여 불쾌감과 혐오감을 주는 냄새를 말한다.
        </p>

        <table className="w-full text-center border mt-10 text-sm text-[8px] md:text-[15px] lg:text-base">
          <tr className="bg-pink-50">
            <th rowspan="2" className="p-2 md:py-3">
              시험항목
            </th>
            <th colspan="2" className="py-2">
              배출형용기조
            </th>
            <th colspan="2">연결형 배출형용기조 (선박내부)</th>
          </tr>
          <tr>
            <th className="py-2">명목연적</th>
            <th>기타연적</th>
            <th>명목연적</th>
            <th>기타연적</th>
          </tr>
          <tr>
            <td className="p-2 md:py-3">배수구</td>
            <td>1000이하</td>
            <td>500이하</td>
            <td>500-1000</td>
            <td>300-500</td>
          </tr>
          <tr>
            <td className="p-2 md:py-3">부지절계선</td>
            <td>200이하</td>
            <td>150이하</td>
            <td>15-20</td>
            <td>10-15</td>
          </tr>
        </table>

        <h2 className="text-md md:text-2xl font-bold mt-12">지정악취</h2>
        <h3 className="text-blue-700 font-bold mt-2">
          ※ 지정악취물질 검사는 본원에서 서비스하지 않습니다.
        </h3>
        <h3 className="text-md  font-bold  text-[#555]">
          악취방지법 시행규칙 [별표3]
        </h3>
        <h3 className="text-md  font-bold  text-[#555]">비고</h3>

        <p className="text-[#555]">
          1. 배출허용기준의 측정은 복합악취를 측정하는 것을 원칙으로 한다. 다만,
          사업자의 악취물질 배출 여부를 확인할 필요가 있는 경우에는
          지정악취물질을 측정할 수 있다. 이 경우 어느 하나의 측정방법에 따라
          측정한 결과 기준을 초과하였을 때에는 배출허용기준을 초과한 것으로
          본다.
        </p>

        <table className="w-full text-center border mt-10 text-sm text-[8px] md:text-[15px] lg:text-base">
          <tr className="bg-pink-50">
            <th rowspan="2" className="p-2 md:py-3">
              화학물질
            </th>
            <th colspan="2" className="p-2 md:py-3">
              배출형용기조 (ppm)
            </th>
            <th colspan="2">면적당 배출형용기조 (ppm)</th>
            <th rowspan="2">적용시기</th>
          </tr>
          <tr>
            <th className="p-2 md:py-3">명목연적</th>
            <th>기타연적</th>
            <th>명목연적</th>
            <th>기타연적 </th>
          </tr>
          <tr>
            <td className="p-2 md:py-3">알루미늄</td>
            <td>20이하</td>
            <td>10이하</td>
            <td>1-2</td>
            <td>2005.2.10 부터</td>
          </tr>
          <tr>
            <td className="p-2 md:py-3">메틸머큐리</td>
            <td>0.0040이하</td>
            <td>0.0020이하</td>
            <td>0.002-0.004</td>
            <td></td>
          </tr>
          <tr>
            <td className="p-2 md:py-3">황화수소</td>
            <td>0.060이하</td>
            <td>0.020이하</td>
            <td>0.02-0.06</td>
            <td></td>
          </tr>
        </table>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-15">
          <Link
            to="#"
            className="text-[12px] md:text-xl w-full bg-[#353535] text-white p-3 flex items-center justify-between"
          >
            대기환경보전법 대기오염물질{" "}
            <FaArrowRightLong className="text-2xl" />
          </Link>
          <Link
            to="#"
            className="text-[12px] md:text-xl w-full bg-[#353535] text-white p-3 flex items-center justify-between"
          >
            대기환경보전법 자가측정의 대상, 항목 및 방법
            <FaArrowRightLong className="text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinesTab4;
