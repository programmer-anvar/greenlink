import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const videoRef = useRef(null);

  const handleMouseEnter = (index) => {
    setOpenDropdown(index);
  };

  const handleMouseLeave = (index) => {
    setTimeout(() => {
      setOpenDropdown((prev) => (prev === index ? null : prev));
    }, 200);
  };

  const menuItems = [
    { label: "소규모사업장", subItems: ["옵션 1", "옵션 2"] },
    { label: "IoT", subItems: ["디바이스", "네트워크"] },
    { label: "대기환경보전법", subItems: ["법률", "규제"] },
    { label: "그린링크 운영관리", subItems: ["운영 정책", "모니터링"] },
    { label: "고객지원", subItems: ["문의", "FAQ"] },
  ];

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
    <header className="h-100vh">
      <nav className="flex items-center justify-between px-[52px] py-8 w-full absolute">
        <a href="/">
          <h1 className="text-white text-[18px]">소규모 대기배출시설 관리시스템</h1>
        </a>

        <ul className="flex items-center gap-8 relative">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative text-white text-[15px]"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <span>{item.label}</span>
              <AnimatePresence>
                {openDropdown === index && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 mt-2 w-40 bg-gray-800 text-white rounded-md shadow-lg"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex} className="px-4 py-2 hover:bg-gray-700">
                        <NavLink to={`/${subItem}`}>{subItem}</NavLink>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}
              <span className="text-white">+998 90 798 18 19</span>

        </ul>
      </nav>
      
      <div className="">
      <video id="customVideo" className="relative"
        ref={videoRef} 
        src="https://www.shutterstock.com/shutterstock/videos/1036897694/preview/stock-footage-iot-internet-of-things-concept-communication-network.webm"
        // src="https://www.shutterstock.com/shutterstock/videos/3561358981/preview/stock-footage-deep-learning-chatbot-artificial-intelligence-machine-learning-deep-cyber-stage-waves-lights.webm"
        onTimeUpdate={handleTimeUpdate}
        autoPlay 
        loop
        muted
        playsInline
        controls
        className="w-full object-cover h-[100vh]"
      ></video>
      
      <section className="absolute top-[180px] w-full flex justify-between px-20">
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-white max-w-[800px]"
              >
                <h1 className="text-[45px] font-bold ">
                  Next Gen Workforce Automation Platform for Trucking
                </h1>
                <p className="text-[25px] font-bold max-w-[370px] my-[20px] ">
                  Turn data into actionable insights for your business
                </p>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Click me</button>
              </motion.div>
      
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="p-6 rounded-lg shadow-lg w-96 bg-white"
              >
                <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold mb-4">로그인</h2>
                <div className="flex items-center mb-4">
                  <label className="flex items-center mr-4">
                    <input type="radio" name="auth" className="mr-1" /> 통합앱 인증
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="auth" className="mr-1" /> SMS인증
                  </label>
                </div>
                </div>
                <input type="text" placeholder="아이디" className="w-full p-2 mb-2 border rounded" />
                <input type="password" placeholder="비밀번호" className="w-full p-2 mb-4 border rounded" />
                <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                  로그인
                </button>
                <div className="flex items-center justify-between mt-2 text-sm">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-1" /> 아이디 저장
                  </label>
                  <a href="#" className="text-blue-600">
                    아이디/비밀번호 찾기
                  </a>
                </div>
              </motion.div>
            </section>
      </div>
    </header>
  );
};

export default Header;
