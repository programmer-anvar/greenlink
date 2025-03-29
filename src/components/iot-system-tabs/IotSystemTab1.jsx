import React from 'react'
import img1 from '../../assets/iost-system-img/lotGateway/img1.png'
import img2 from '../../assets/iost-system-img/lotGateway/img2.png'


const IotSystemTab1 = () => {
  return (
    <div>
      <div>
        <h2 className='text-xl'>Iot 게이트웨이</h2>
         <img className='w-full' src={img1} alt="" />
      </div>

      <div>
      <img className='w-full mt-20' src={img2} alt="" />
      </div>
    </div>
  )
}

export default IotSystemTab1
