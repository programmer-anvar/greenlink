import mainCustomer from "../../assets/main-customer/main-customer.jpg";
import { FaFileWord } from "react-icons/fa";
import { FaRegFile } from "react-icons/fa";

const Applicationform = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${mainCustomer})` }}
        className="w-full h-[60vh] flex items-center justify-center"
      >
        <h2 className="text-3xl  text-white">CUSTOMER</h2>
      </div>
      <div className="container">
        <h1 className="text-xl md:text-4xl text-center my-5">신청서양식</h1>
        <h2 className="text-xl mt-5 md:text-2xl">신청서양식</h2>
        <p className="md:text-[16px] mt-2">저희 KEFA시험원은 환경오염정도 확인에 대한 시험분석서비스 제공에 노력하고 있습니다.</p>

        <div className="h-[1px] w-full my-8 bg-black"></div>


        <div>
        <table border="1" cellspacing="0" cellpadding="5" className="w-full border-gray-400 text-center">
    <tr className="bg-[#F9F9F9] border-gray-400">
        <th className="p-2 border-gray-400">구분</th>
        <th className="p-2 border-gray-400">항목</th>
        <th className="p-2 border-gray-400">다운로드</th>
    </tr>
    <tr>
        <td rowspan="2">공용</td>
        <td>시험분석의뢰신청서(단건)</td>
        <td className="flex items-center justify-center py-2 border-gray-400">
            <a href="#"><FaFileWord className="text-xl text-gray-400"/></a>
            <a href="#"><FaRegFile className="text-xl  text-gray-400"/></a>
        </td>
    </tr>
    <tr>
        <td>시험분석의뢰신청서(연간계약건)</td>
        <td className="flex items-center justify-center py-2 border-gray-400">
            <a href="#"><FaFileWord className="text-xl text-gray-400"/></a>
            <a href="#"><FaRegFile className="text-xl  text-gray-400"/></a>
        </td>
    </tr>
</table>

        </div>
      </div>

      
    </div>
  )
}

export default Applicationform
