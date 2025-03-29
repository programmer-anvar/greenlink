import React from 'react'
import img1 from '../../assets/iost-system-img/IOT-management-system/img1.png';
import img2 from '../../assets/iost-system-img/IOT-management-system/img2.png';


const IotSystemTab3 = () => {
  return (
    <div>
      <h2 className='text-xl font-bold ml-6'>IoT 관리시스템</h2>
       <div>
        <img className='w-full' src={img1} alt="" />
       </div>

       <div className='mt-34'>
        <img className='w-full' src={img2} alt="" />
       </div>
    </div>
  )
}

export default IotSystemTab3
