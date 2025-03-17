import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-[#3A3E42]'>
        <div className='flex items-center max-w-[1400px] m-auto'>
            <div className='flex items-center gap-7'>
                <Link to={'/'} className='text-xl text-white'>회사소개</Link>
                <Link to={'/'} className='text-xl text-white'> 개인정보취금방침</Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer
