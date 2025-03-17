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
        className="object-cover w-full h-[95vh]"
      ></video>
      
      <section className="absolute top-[250px] w-full flex justify-between px-20">
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-white max-w-[800px]"
              >
                <img src="https://firebasestorage.googleapis.com/v0/b/iot-kefa.appspot.com/o/kefa_hompage%2F%EC%BC%80%ED%8C%8C%20%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C_20240130.png?alt=media&token=a0fe2b9b-a79a-45bb-a0ce-f83f8d7cbc8b" alt="" />
                {/* <h1 className="text-[45px] font-bold ">
                  Next Gen Workforce Automation Platform for Trucking
                </h1>
                <p className="text-[25px] font-bold max-w-[370px] my-[20px] ">
                  Turn data into actionable insights for your business
                </p>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Click me</button> */}
              </motion.div>
      
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                // className="p-6 bg-white rounded-lg shadow-lg w-96"
              >
                <Login/>
              </motion.div>
              
            </section>
              <AurBusiness/>
              
              <ReferenceMain/>
      </div>
    </div>
  )
}

export default Home
