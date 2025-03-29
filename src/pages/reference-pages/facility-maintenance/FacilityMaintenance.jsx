import React from 'react'
import mainBg from "../../../assets/main-reference/main-reference.jpg";
import { facilityMaintenanceData } from '../environt-ment-data';

const FacilityMaintenance = () => {
  return (
    <div>
       <div
                    className="w-full h-[60vh] flex items-center justify-center "
                    style={{ backgroundImage: `url(${mainBg})`, backgroundSize: "cover" }}
                  >
                    <h2 className="text-4xl text-white">REFERENCE</h2>
                  </div>
                       <h2 className='my-16 text-center text-2xl font-bold'>시설물유지보수</h2>

                     <div className="flex items-center justify-center flex-wrap gap-9 m-auto container">
                            {facilityMaintenanceData.map((item, index) => (
                              <div className="flip-card" key={index}>
                                <div className="flip-card-inner">
                                  <div
                                    className="flip-card-front"
                                    style={{
                                      backgroundImage: `url(${item.card_bg})`,
                                      backgroundPosition: "center",
                                    }}
                                  >
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
    </div>
  )
}

export default FacilityMaintenance
