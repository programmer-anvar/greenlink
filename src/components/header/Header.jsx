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
    { label: "소규모사업장", path: "/contents", subItems: [
      { label: "소규모사업장", path: "/contents" },
        { label: "연혁 및 추진체계", path: "/history_promotion" },
        { label: "대기오염물질배출시설", path: "/air-polutant" }
      ]
    },
    { label: "IoT", path: "/iot", subItems: [
        { label: "디바이스", path: "/history_promotion" },
        { label: "네트워크", path: "/history_promotion" }
      ]
    },
    { label: "대기환경보전법", path: "/air-environment", subItems: [
        { label: "법률", path: "/history_promotion" },
        { label: "규제", path: "/history_promotion" }
      ]
    },
    { label: "그린링크 운영관리", path: "/history_promotion", subItems: [
        { label: "운영 정책", path: "/history_promotion" },
        { label: "모니터링", path: "/history_promotion" }
      ]
    },
    // { label: "고객지원", path: "/support", subItems: [
    //     { label: "문의", path: "/support/inquiry" },
    //     { label: "FAQ", path: "/support/faq" }
    //   ]
    // }
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
      <nav className="flex items-center justify-between px-[52px] py-8 w-full  bg-gray-100 fixed top-0 z-50">
        <a href="/">
          <img src="https://www.ke-fa.com/default/img/logo.png" alt="" />
        </a>

        <ul className="relative flex items-center gap-8">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative text-black text-[15px]"
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
                    className="absolute left-0 w-40 mt-0 text-black shadow-lg   rounded-[5px] bg-white z-50"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex} className="px-4 py-2 ">
                        <NavLink to={`${subItem.path}`}>{subItem.label}</NavLink>
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
      
      
    </header>
  );
};

export default Header;
