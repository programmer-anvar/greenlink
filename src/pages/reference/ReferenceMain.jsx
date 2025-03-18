import { Link } from "react-router-dom";

const ReferenceMain = () => {
  return (
    <section className="bg-[#F4F4F4]">
      <div className="max-w-[1400px] m-auto mt-12 font-bold pt-[70px] pb-[80px]">
        <h1 className="text-4xl text-center">REFERENCE</h1>
        <p className="mt-4 text-xl text-center">
          KEFA에서 작업한 시공사례를 보실 수 있습니다.
        </p>

        <div className="mt-[40px]">
          <div className="grid grid-cols-3 gap-7">
            <div className="max-w-[340px] bg-white">
              <Link to={"/"}>
                <img
                  className="w-full"
                  src="https://www.ke-fa.com/bizdemo60951/component/board/board_7/u_image/76/1589179507_01_ED959CEAB5ADED9998EAB2BDEAB8B0EAB384EBB684EC849DEC97B0EAB5ACEC9B90_KEFA_ECBC80ED8C8C_ED999CEC84B1ED8384ED9DA1ECB0A9ED8391_ED999CEC84B1ED8384EAB590ECB2B4_ED9998EAB2BDEC9DB8ED9788EAB080.JPG"
                  alt=""
                />
                <div className="p-5">
                  <h3 className="text-xl">[KEFA] 집진기 (흡착탑) 활..</h3>
                  <p className="mt-5">
                    환경측정분석, 환경인허가, 환경설비 및 유지보수 전문업체인
                    KEFA [..
                  </p>
                </div>
              </Link>
            </div>

            <div className="max-w-[340px] bg-white">
              <Link to={"/"}>
                <img
                  className="w-full"
                  src="https://www.ke-fa.com/bizdemo60951/component/board/board_7/u_image/75/411763224_01.ED959CEAB5ADED9998EAB2BDEAB8B0EAB384EBB684EC849DEC97B0EAB5ACEC9B90_KEFA_ECBC80ED8C8C_EC97ACEAB3BCEBA789_EBB684EBA6ACEBA789EC84B8ECA095_EBA7B4EBB88CEBA088EC9DB8ED9584ED84B0EC84B8ECA095.JPG"
                  alt=""
                />
                <div className="p-5">
                  <h3 className="text-xl">폐수처리장 침지형 분리막 ..</h3>
                  <p className="mt-5">
                    환경측정분석, 환경인허가, 환경설비 및 유지보수 전문업체인
                    [한국환경기계분석연구원]에 문의바랍니다.TEL :
                    070-4287-9555담..
                  </p>
                </div>
              </Link>
            </div>

            <div className="max-w-[340px] bg-white">
              <Link to={"/"}>
                <img
                  className="w-full"
                  src="https://www.ke-fa.com/bizdemo60951/component/board/board_7/u_image/74/1761648428_01_ED959CEAB5ADED9998EAB2BDEAB8B0EAB384EBB684EC849DEC97B0EAB5ACEC9B90_KEFA_ED999CEC84B1ED8384ED9DA1ECB0A9ED8391_ED999CEC84B1ED8384EAB590ECB2B4_ED9998EAB2BDEC9DB8ED9788EAB080.JPG"
                  alt=""
                />
                <div className="p-5">
                  <h3 className="text-xl">집진기 활성탄 교체 작업 (..</h3>
                  <p className="mt-5">
                    환경측정분석, 환경인허가, 환경설비 및 유지보수 전문업체인
                    [한국환경기계분석연구원]에 문의바랍니다.TEL :
                    070-4287-9555Em..
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferenceMain;
