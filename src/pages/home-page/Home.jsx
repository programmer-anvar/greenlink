import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Login from '../auth/Login';
import AurBusiness from '../aurBusiness/AurBusiness';
import MainNews from '../news/MainNews';
import ReferenceMain from '../reference/ReferenceMain';
import img from './heroImg.png'

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const savedTime = sessionStorage.getItem("videoTime");
    if (savedTime && videoRef.current) {
      videoRef.current.currentTime = parseFloat(savedTime);
    }
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      sessionStorage.setItem("videoTime", videoRef.current.currentTime);
    }
  };

  return (
  <section className=''>
<div
  className="w-full h-screen "
  style={{
    backgroundImage: `url('https://img.freepik.com/free-photo/person-working-html-computer_23-2150038841.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
       <div className="container flex-wrap flex items-center justify-center md:justify-between h-full ">
       <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-lg"
        >
          <img
            className="w-full"
            src={img}
            alt="Kefa Slide"
          />
        </motion.div>
        
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className=" w-full max-w-md"
        >
          <Login />
        </motion.div>
       </div>
      
    </div>

       <div className='mt-15'>
       <AurBusiness />
        <MainNews/>
        <ReferenceMain/>
       </div>
  </section>
  );
}

export default Home
