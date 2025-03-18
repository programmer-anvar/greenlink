import './ComapnyStyle.css';
import { TbBrandDatabricks } from "react-icons/tb";
const Company = () => {
  return (
    <section className="">
        <div className="company-hero"></div>
        <div className=''>
          <h2 className='text-center text-[34px] my-16 font-bold'>회사소개</h2>
           <div className='aboutUs-bg'>
            <div className='pt-20 max-w-[1400px] m-auto'>
                <h2 className='text-white text-center text-2xl font-bold'>"동남권 최대 종합환경컨설팅 전문회사"</h2>
                <h3 className='text-center text-white font-bold mt-8'>
            국민들의 삶의 질향상에 따라 쾌적한 환경에 살고 싶어하는 국민적요구(NEEDS)는  <br />
            더욱 커져가고있으며, 이에 따라 환경규제는 매년 새로이 강화되고 갱신되어 관련 사업체의 부담은 날로 증가되고있습니다
                </h3>

                <h2 className='text-white font-bold text-4xl text-center mt-[90px]'>MISSION</h2>
                <p className='text-center text-white text-xl mt-7 font-bold'>우리의 미션은 이런 변화에 맞추어, 고객께 믿고 신뢰할 수 있는 최상의 포괄적 서비스를 제공하는 것입니다.</p>

                <div className='flex items-center justify-between mt-[100px] pb-16'>
                  <div className='h-[200px] w-0.5 bg-[white]'></div>
                  <div className='flex flex-col items-center gap-7'>
                  <TbBrandDatabricks className='text-white text-4xl'/>
                  <h3 className='text-2xl text-white'>Trusted Brand</h3>
                  <p className='text-xl text-white'>믿을 수 있는 브랜드</p>
                  </div>

                  <div className='h-[200px] w-0.5 bg-[white]'></div>
                  <div className='flex flex-col items-center gap-7'>
                  <TbBrandDatabricks className='text-white text-4xl'/>
                  <h3 className='text-2xl text-white'>Trusted Brand</h3>
                  <p className='text-xl text-white'>믿을 수 있는 브랜드</p>
                  </div>

                  <div className='h-[200px] w-0.5 bg-[white]'></div>
                  <div className='flex flex-col items-center gap-7'>
                  <TbBrandDatabricks className='text-white text-4xl'/>
                  <h3 className='text-2xl text-white'>Trusted Brand</h3>
                  <p className='text-xl text-white'>믿을 수 있는 브랜드</p>
                  </div>

                  <div className='h-[200px] w-0.5 bg-[white]'></div>
                </div>

                <div className=''></div>
            

            </div>
           </div>
        </div>
    </section>
  )
}

export default Company
