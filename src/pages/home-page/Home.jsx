import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Login from '../auth/Login';
import AurBusiness from '../aurBusiness/AurBusiness';
import MainNews from '../news/MainNews';
import ReferenceMain from '../reference/ReferenceMain';

const Home = () => {
  const videoRef = useRef(null);
  
    // Sahifa yuklanganda avvalgi vaqtni tiklash
    useEffect(() => {
      const savedTime = sessionStorage.getItem("videoTime");
      if (savedTime && videoRef.current) {
        videoRef.current.currentTime = parseFloat(savedTime);
      }
      if (videoRef.current) {
        videoRef.current.play(); // Video avtomatik davom etadi
      }
    }, []);
  
    // Videoning o‘ynayotgan vaqtini saqlash
    const handleTimeUpdate = () => {
      if (videoRef.current) {
        sessionStorage.setItem("videoTime", videoRef.current.currentTime);
      }
    };
  return (
    <div>
     <div >
      <video id="customVideo" 
        ref={videoRef} 
        // src='./black.mp4'
        src='https://static.videezy.com/system/resources/previews/000/018/969/original/black.mp4'
        // src="https://static.videezy.com/system/resources/previews/000/008/175/original/Network_R.mp4"
        // src="https://www.shutterstock.com/shutterstock/videos/1036897694/preview/stock-footage-iot-internet-of-things-concept-communication-network.webm"
        // src="https://www.shutterstock.com/shutterstock/videos/3561358981/preview/stock-footage-deep-learning-chatbot-artificial-intelligence-machine-learning-deep-cyber-stage-waves-lights.webm"
        onTimeUpdate={handleTimeUpdate}
        autoPlay 
        loop
        muted
        playsInline
        controls
        className="object-cover w-full h-screen"
      ></video>
      
      <section className="flex-col md:flex-row absolute top-[160px] md:top-[170px] w-full flex justify-between px-20 gap-11">
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                // className="text-white max-w-[600px]"
              >
                <img className='w-full' src="https://firebasestorage.googleapis.com/v0/b/iot-kefa.appspot.com/o/kefa_hompage%2F%EC%BC%80%ED%8C%8C%20%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C_20240130.png?alt=media&token=a0fe2b9b-a79a-45bb-a0ce-f83f8d7cbc8b" alt="" />
              </motion.div>
      
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <Login/>
              </motion.div>
              
            </section>
              {/* <AurBusiness/>
              
              <ReferenceMain/> */}
      </div>
    </div>
  )
}

export default Home
