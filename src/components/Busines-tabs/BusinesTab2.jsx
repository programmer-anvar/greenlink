import React from "react";
import headerImg from "../../assets/Ecotoxicologicalanalysis/imgHeader.jpg";
import img1 from "../../assets/Ecotoxicologicalanalysis/tu.png";
import img2 from "../../assets/Ecotoxicologicalanalysis/img2.png";
import img3 from "../../assets/Ecotoxicologicalanalysis/img3.png";
import img4 from "../../assets/Ecotoxicologicalanalysis/border1.png";
import img5 from "../../assets/Ecotoxicologicalanalysis/border2.png";
import img6 from "../../assets/Ecotoxicologicalanalysis/border3.png";

const BusinesTab2 = () => {
  return (
    <div>
      <div>
        <img src={headerImg} alt="" />
      </div>

      <div className="justify-between w-full mt-12 border-t-2 border-gray-400  border-b-1  py-7">
        <h2 className="text-[18px] md:text-2xl">생태독성 관리제도</h2>
        <p className="text-[12px] md:text-[16px] text-[#989898] mt-3">
          산업폐수 방류수에 생물체(물벼룩)을 넣고 생태독성 여부를 측정하여
          하ㆍ폐수를 통해 배출되는 미지의 독성 물질을 통합 관리하는 제도
          환경부는 산폐수배출 유해물질에 대한 통합관리체계를 '수질' 중심
          관리에서 생물검정을 통한 '수생태계' 중심관리로 전환하고, 2011년부터
          '수질 및 수생태 보전에 관한 법률' 시행규칙에서 물벼룩을 이용한
          생태독성시험 사업장 규모별로 단계적으로 시행하여 관할지자체 또는
          지방환경청에서 점검 시 생태독성 기준 준수 여부를 확인하도록 함
        </p>
      </div>

      <div className="justify-between w-full   border-gray-400  border-b-1  py-7">
        <h2 className="text-[18px] md:text-2xl">생태독성(TU)</h2>
        <p className="text-[12px] md:text-[16px] text-[#989898] mt-3">
          시료에 물벼룩(Daphnia magna)을 투입하여 급성독성을 평가하는 것으로
          물벼룩이 독성에 영향을 받게 되는 정도를 생태독성값(TU, Toxic Unit)으로
          계산한 것
        </p>

        <div className="mt-3 pb-3">
          <img className="w-full" src={img1} alt="" />
          <img className="w-full mt-7" src={img2} alt="" />
          <img className="w-full mt-7" src={img3} alt="" />
          <h2 className="text-[16px] md:text-xl text-[#646363]">
            이미지 출처: 한국환경공단_생태독성관리제도
          </h2>
        </div>
      </div>

      <div className="justify-between w-full   border-gray-400  border-b-1  py-7">
        <h2 className="text-[18px] md:text-[20px] text-center">
          생태독성 배출허용 기준 적용대상 시설
        </h2>

        <div className="flex items-center justify-center gap-5 mt-5">
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
        </div>
      </div>

      <div className="justify-between w-full   border-gray-400  border-b-1  py-7">
        <h2 className="text-[18px] md:text-2xl">생태독성물질 측정</h2>
        <p className="text-[12px] md:text-[16px] text-[#989898] mt-3">
          생태독성의 발생원인 물질을 파악하고, 저감할 수 있는 관리 방안을 제시해
          드립니다. 생태독성 배출허용기준을 초과한 사업장과 생태독성 저감방법을
          목적으로 둔 사업장에 대하여 생산 공정부터 폐수처리시설의
          방류까지일련의 과정을 종합 점검하여 생태독성의 발생원인 물질을
          파악하고 저감할 수 있는 관리 방안을 제시해 드립니다.
        </p>
      </div>

      <div className="justify-between w-full   border-gray-400  border-b-1  py-7">
        <h2 className="text-[18px] md:text-2xl">생태독성 관리제도</h2>
        <p className="text-[12px] md:text-[16px] text-[#989898] mt-3">
          이 시험기준은 수서무척추동물인 물벼룩을 이용하여 시료의 급성독성을
          평가하는방법으로써 시료를 여러 비율로 희석한 시험수에 물벼룩을
          투입하고 24시간 후유영상태를 관찰하여 시료농도와 치사 혹은 유영저해를
          보이는 물벼룩 마리수와의상관관계를 통해 생태독성값을 산출하는
          방법입니다. 생태독성 배출허용기준을 초과한 사업장과 생태독성
          저감방법을 목적으로 둔 사업장에 대하여 생산 공정부터 폐수처리시설의
          방류까지일련의 과정을 종합 점검하여 생태독성의 발생원인 물질을
          파악하고 저감할 수 있는 관리 방안을 제시해 드립니다.
        </p>

        <p className="text-[12px] md:text-[16px] text-[#989898] mt-5">
          특히 어류등에 비해 독성에 대한 민감도가 높으며 실험이 간단하고 비용이
          저렴하여전 세계에서 생태독성 시험종으로 널리 사용되고 있습니다. <br />
          이 시험 기준은 산업폐수, 하수, 하천수, 호소수 등에 적용할 수 있습니다.
        </p>
      </div>
    </div>
  );
};

export default BusinesTab2;
