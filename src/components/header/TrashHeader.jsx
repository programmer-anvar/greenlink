import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const videoRef = useRef(null);
  const timeoutRef = useRef(null); // Fix dropdown delay issue

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutRef.current);
    setOpenDropdown(index);
  };

  const handleMouseLeave = (index) => {
    timeoutRef.current = setTimeout(() => {
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

  // Restore video playback time on page load
  useEffect(() => {
    const savedTime = sessionStorage.getItem("videoTime");
    if (savedTime && videoRef.current) {
      videoRef.current.currentTime = parseFloat(savedTime);
    }
    videoRef.current?.play();
  }, []);

  // Save video playback time when it updates
  const handleTimeUpdate = () => {
    sessionStorage.setItem("videoTime", videoRef.current?.currentTime);
  };

  return (
    <header className="h-screen relative">
      {/* Navbar */}
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
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute left-0 mt-2 w-40 bg-gray-800 text-white rounded-md shadow-lg"
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
        </ul>
      </nav>

      {/* Background Video */}
      <video
        ref={videoRef}
        src="https://cdn.pixabay.com/video/2017/12/20/13495-248644905_large.mp4"
        onTimeUpdate={handleTimeUpdate}
        autoPlay
        loop
        muted
        playsInline
        controls
        className="w-full h-screen object-cover"
      ></video>

      {/* Hero Section */}
      <section className="absolute top-[180px] w-full flex justify-between px-20">
        {/* Left Side - Text Animation */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white max-w-[800px]"
        >
          <h1 className="text-[45px] font-bold">
            Next Gen Workforce Automation Platform for Trucking
          </h1>
          <p className="text-[25px] font-bold mt-4">
            Turn data into actionable insights for your business
          </p>
        </motion.div>

        {/* Right Side - Login Card Animation */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="p-6 rounded-lg shadow-lg w-96 bg-white"
        >
          <h2 className="text-lg font-bold mb-4">로그인</h2>
          <div className="flex items-center mb-4">
            <label className="flex items-center mr-4">
              <input type="radio" name="auth" className="mr-1" /> 통합앱 인증
            </label>
            <label className="flex items-center">
              <input type="radio" name="auth" className="mr-1" /> SMS인증
            </label>
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
    </header>
  );
};

export default Header;
