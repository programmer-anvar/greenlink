import "./ComapnyStyle.css";
import { TbBrandDatabricks } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
import { strategicCardData } from "./company-strategic-data";
import philosophy1 from "../../assets/business-philosophy/business-philosophy1.jpg";
import philosophy2 from "../../assets/business-philosophy/business-philosophy2.jpg";
import philosophy3 from "../../assets/business-philosophy/business-philosophy3.jpg";

const Company = () => {
  const companyDetails = [
    { label: "기업명", value: "KEFA 한국환경기계분석연구원" },
    { label: "설립일", value: "2012년 1월" },
    {
      label: "사업분야",
      value: "환경측정분석 / 환경컨설팅 / 환경플랜트 / 시설물유지보수",
    },
    {
      label: "본사위치",
      value:
        "경남 창원시 진해구 두동 1296-15 청안프리존 빌딩 502호(웅동로 166)",
    },
  ];

  const businessPhilosoph = [
    {
      img: philosophy1,
      title: "합리적인 사고",
      smallTitle: "RATIONAL THINKING",
      desc: "모든 의사결정과정을 체계적이고 논리적으로 정확하게 판단하는 기업문화",
    },
    {
      img: philosophy2,
      title: "진취적 자세",
      smallTitle: "PROGRESSIVE THINKING",
      desc: "기존 일반화된 모든 행위에 적극적으로 문제 제기를 통한 끓임업는 도전 의지와 실행력",
    },
    {
      img: philosophy3,
      title: "끊임없는 소통",
      smallTitle: "COMMUNICATION",
      desc: "고객 그리고 임직원들과의 끊임없는 소통을 통한 공공이익의 최대화",
    },
  ];
  return (
    <section className="">
      <div className="company-hero">
        <h3 className="text-4xl font-bold text-white">COMPANY</h3>
      </div>

      <div className="">
        <h2 className="text-center text-[34px] my-16 font-bold">회사소개</h2>
        <div className="aboutUs-bg mb-[80px]">
          <div className="pt-20 container m-auto">
            <h2 className="text-white text-center text-2xl font-bold">
              "동남권 최대 종합환경컨설팅 전문회사"
            </h2>
            <h3 className="text-center text-white font-bold mt-8">
              국민들의 삶의 질향상에 따라 쾌적한 환경에 살고 싶어하는
              국민적요구(NEEDS)는 <br />
              더욱 커져가고있으며, 이에 따라 환경규제는 매년 새로이 강화되고
              갱신되어 관련 사업체의 부담은 날로 증가되고있습니다
            </h3>

            <h2 className="text-white font-bold text-4xl text-center mt-[90px]">
              MISSION
            </h2>
            <p className="text-center text-white text-xl mt-7 font-bold">
              우리의 미션은 이런 변화에 맞추어, 고객께 믿고 신뢰할 수 있는
              최상의 포괄적 서비스를 제공하는 것입니다.
            </p>

            <div className="flex items-center justify-between mt-[100px] pb-16">
              <div className="h-[200px] w-0.5 bg-[white]"></div>
              <div className="flex flex-col items-center gap-7">
                <TbBrandDatabricks className="text-white text-4xl" />
                <h3 className="text-2xl text-white">Trusted Brand</h3>
                <p className="text-xl text-white">믿을 수 있는 브랜드</p>
              </div>

              <div className="h-[200px] w-0.5 bg-[white]"></div>
              <div className="flex flex-col items-center gap-7">
                <TbBrandDatabricks className="text-white text-4xl" />
                <h3 className="text-2xl text-white">Trusted Brand</h3>
                <p className="text-xl text-white">믿을 수 있는 브랜드</p>
              </div>

              <div className="h-[200px] w-0.5 bg-[white]"></div>
              <div className="flex flex-col items-center gap-7">
                <TbBrandDatabricks className="text-white text-4xl" />
                <h3 className="text-2xl text-white">Trusted Brand</h3>
                <p className="text-xl text-white">믿을 수 있는 브랜드</p>
              </div>

              <div className="h-[200px] w-0.5 bg-[white]"></div>
            </div>
          </div>
        </div>
      </div>


      <div className="container mx-auto bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
        <div className="p-6">
          {companyDetails.map((item, index) => (
            <div
              key={index}
              className="flex justify-between py-3 border-b border-gray-200 last:border-none"
            >
              <span className="font-medium text-gray-700">{item.label}</span>
              <span className="text-gray-600 text-right">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <h2 className="text-center text-4xl text-black mt-18 mb-10">
          Strategic Direction
        </h2>

        <div className="flex flex-wrap justify-center gap-7 md:ustify-between p-4 mt-9">
          {strategicCardData.map((item, index) => (
            <div
              key={index}
              className="w-full lg:max-w-[350px] strategic-card"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="strategic-card-content">
                <h2 className="strategic-card-title">{item.title}</h2>
                <p className="strategic-card-body">{item.desc}</p>
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-6 w-[180px] flex items-center justify-between cursor-pointer"
                >
                  더보기
                  <FaArrowRightLong className="text-[20px] ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#F7F7F7] mt-25">
        <div className="container ">
          <h2 className="text-center text-4xl pt-10">Business Philosophy</h2>

          <div className="flex flex-wrap justify-center gap-7 md:ustify-between py-20">
            {businessPhilosoph.map((item, index) => (
              <div
                key={index}
                className="w-full lg:max-w-[360px] strategic-card"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="strategic-card-content p-3">
                  <h2 className="strategic-card-title pb-2">{item.title}</h2>
                  <p>{item.smallTitle}</p>
                  <p className="strategic-card-body">{item.desc}</p>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-6 w-[180px] flex items-center justify-between cursor-pointer"
                  >
                    더보기
                    <FaArrowRightLong className="text-[20px] ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};

export default Company;
