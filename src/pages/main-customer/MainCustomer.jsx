import mainCustomer from "../../assets/main-customer/main-customer.jpg";

const MainCustomer = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${mainCustomer})` }}
        className="w-full h-[60vh] flex items-center justify-center"
      >
        <h2 className="text-3xl  text-white">CUSTOMER</h2>
      </div>
      <h2 className="text-2xl text-center my-11">견적문의</h2>

      <div className="container flex items-center gap-8">
        
      <div className="p-8 bg-white shadow-md w-full">
      <div className="flex items-center gap-7 h-[70px] border-t-2 border-b-[1px] border-b-gray-300">
        <div className="w-[150px] h-full  flex items-center justify-center bg-[#F7F7F7]">
          <p>문의분야</p>
        </div>
        <div>
        <div className="flex items-center gap-5 border-b border-b-gray-300 pb-2">
        <div className="flex items-center  ">
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> 환경측정분석	</label>
</div>
<div class="flex items-center">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">사물인터넷(IoT)</label>
</div>
        </div>
        <p className="text-[10px]  text-gray-400">문의 분야를 선택하여 주십시오.</p>
        </div>
      </div>

      <div className="flex items-center gap-7 h-[70px]  border-b-[1px] border-b-gray-300">
        <div className="w-[150px] h-full  flex items-center justify-center bg-[#F7F7F7]">
          <p>업체명</p>
        </div>
        <div>
        <div className=" border-[1px] border-gray-300 w-full md:w-[600px] lg:w-[1000px]">
        <input type="text" placeholder="text" className="w-full p-1"/>
        </div>
        <p className="text-[10px]  text-gray-400 p-1">문의 분야를 선택하여 주십시오.</p>
        </div>
      </div>

      <div className="flex items-center gap-7 h-[70px]  border-b-[1px] border-b-gray-300">
        <div className="w-[150px] h-full  flex items-center justify-center bg-[#F7F7F7]">
          <p>지역</p>
        </div>
        <div>
        <div className=" border-[1px] border-gray-300 w-full md:w-[600px] lg:w-[1000px]">
        <input type="text" placeholder="text" className="w-full p-1"/>
        </div>
        <p className="text-[10px]  text-gray-400 p-1">  사업장 소재 지역을 입력하여 주십시오 (예시: 경남 창원)</p>
        </div>
      </div>

      <div className="flex items-center gap-7 h-[70px]  border-b-[1px] border-b-gray-300">
        <div className="w-[150px] h-full  flex items-center justify-center bg-[#F7F7F7]">
          <p>성함</p>
        </div>
        <div>
        <div className=" border-[1px] border-gray-300 w-full md:w-[600px] lg:w-[1000px]">
        <input type="text" placeholder="text" className="w-full p-1"/>
        </div>
        <p className="text-[10px]  text-gray-400 p-1">	
        문의주시는 담당자님의 성함을 입력하여 주십시오.</p>
        </div>
      </div>

      <div className="flex items-center gap-7 h-[70px]  border-b-[1px] border-b-gray-300">
        <div className="w-[150px] h-full  flex items-center justify-center bg-[#F7F7F7]">
          <p>업체명</p>
        </div>
        <div>
        <div className="flex items-center">
        <input type="text" placeholder="text" className="w-[60px] p-1 border-[1px] border-gray-300"/>
        <div className="h-[1px] w-[8px] bg-gray-300"></div>
        <input type="text" placeholder="text" className="w-[60px] p-1 border-[1px] border-gray-300"/>
        <div className="h-[1px] w-[8px] bg-gray-300"></div>

        <input type="text" placeholder="text" className="w-[60px] p-1 border-[1px] border-gray-300"/>

        </div>
        </div>
      </div>

      <div className="flex items-center gap-7 h-[70px]  border-b-[1px] border-b-gray-300">
        <div className="w-[150px] h-full  flex items-center justify-center bg-[#F7F7F7]">
          <p>이메일</p>
        </div>
        <div>
        <div className=" border-[1px] border-gray-300 w-full md:w-[600px] lg:w-[1000px]">
        <input type="text" placeholder="text" className="w-full p-1"/>
        </div>
        <p className="text-[10px]  text-gray-400 p-1">입력하신 이메일로 회신드리겠습니다.</p>
        </div>
      </div>

      <div className="flex items-center gap-7 h-[70px]  border-b-[1px] border-b-gray-300">
        <div className="w-[150px] h-full  flex items-center justify-center bg-[#F7F7F7]">
          <p>제목</p>
        </div>
        <div>
        <div className=" border-[1px] border-gray-300 w-full md:w-[600px] lg:w-[1000px]">
        <input type="text" placeholder="text" className="w-full p-1"/>
        </div>
        </div>
      </div>


      <div className="flex items-center gap-7 min-h-[70px]  border-b-[1px] border-b-gray-300">
        <div className="w-[150px] min-h-[70px] h-full flex items-center justify-center bg-[#F7F7F7]">
          <p className="h-full">내용</p>
        </div>
        <div>
        <div className="  w-full md:w-[600px] lg:w-[1000px]">
        <textarea 
  class="w-full h-40 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize"
></textarea>
        </div>
        </div>
      </div>

      <div className="flex items-center gap-7 h-full  border-b-[1px] border-b-gray-300">
        <div className="w-[150px] h-full min-h-[190px]  flex items-center justify-center bg-[#F7F7F7]">
          <p>파일첨부</p>
        </div>
        <div className="flex flex-col gap-3 py-2.5">
        <input type="file" className="w-full text-slate-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded" />
        <input type="file" className="w-full text-slate-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded" />

        <input type="file" className="w-full text-slate-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded" />
        <p className="text-gray-400">※ 업로드 가능한 최대 용량 : 20 Mb</p>
        </div>
      </div>


      <div className="  border-b-[1px] border-b-gray-300">
        <div className="flex items-center justify-between py-5">
          <p className="text-gray-400 text-[13px]">· 개인정보의 수집 및 이용목적</p>
          <p className="text-gray-400 text-[13px]">· 개인정보의 수집 및 이용목적</p>

        </div>

        <textarea 
  className="w-full h-40 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize"
  placeholder="개인정보 수집, 이용 동의서&#10;1. 개인정보 수집, 이용 기관명 : KEFA한국환경기계본산연구원&#10;2. 개인정보 수집, 이용 항목과 사용목적&#10;- 수집, 이용 범위 : 이름, 핸드폰번호, 이메일, 회사명&#10;- 사용목적 : 고객 문의 답변 및 KEFA제품기술안내"
></textarea>

      </div>


      <div className="flex items-center gap-2 justify-center mt-7">
      <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">접수하기</button>
      <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">취소</button>
      </div>
    </div>
      </div>
    </div>
  );
};

export default MainCustomer;





