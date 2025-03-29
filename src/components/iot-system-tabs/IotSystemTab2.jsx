import React from 'react'
import img1 from '../../assets/iost-system-img/core-feature/img1.png';
import img2 from '../../assets/iost-system-img/core-feature/img3.png';

const IotSystemTab2 = () => {
  return (
    <div>
      <h2 className='text-xl font-bold my-3.5m ml-6'>핵심기능</h2>
      <div className=''>

        <img className='w-full' src={img1} alt="" />
      </div>

      <div className='max-w-[1000px] m-auto'>
        <img className='w-full' src={img2} alt="" />
      </div>
    </div>
  )
}

export default IotSystemTab2
