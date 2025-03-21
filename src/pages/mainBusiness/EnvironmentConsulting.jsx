import bgImg from '../../assets/mainBusines.jpg'

const EnvironmentConsulting = () => {
  return (
    <div>
         <div className='h-[70vh] bg-no-repeat w-full flex items-center justify-center' style={{backgroundImage:`url(${bgImg})`,  backgroundPosition:'center'}}>
           <h2 className='text-4xl text-white'>BUSINESS</h2>
      </div>

      <div className="container mt-12">
      <h2 className='text-3xl text-center mt-12'>환경컨설팅</h2>
       
       <h3 className='text-2xl mt-9'>KEFA 환경컨설팅</h3>
       <p className='mt-2'>아래 대상 및 적용시기에 해당하는 업체는 통합환경인허가를 선택, 대상 및 적용시기에 해당하지 않은 업체는 환경인허가를 선택
            대상 : 19개 업종 대기 또는 수질 1·2종 사업장(중,소규모 사업장은 자발적 통합 허가 신청가능)
            적용시기 : 17년부터 5년간 단계적 시행(중,소규모 사업장은 자발적 통합 허가 신청가능)</p>
                  </div>
    </div>
  )
}

export default EnvironmentConsulting
