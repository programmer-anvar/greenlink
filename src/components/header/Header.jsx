import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [scrolling, setScrolling] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (index) => {
    setOpenDropdown(index);
  };

  const handleMouseLeave = (index) => {
    setTimeout(() => {
      setOpenDropdown((prev) => (prev === index ? null : prev));
    }, 200);
  };

  const toggleMobileDropdown = (index) => {
    setMobileDropdown(mobileDropdown === index ? null : index);
  };

  const menuItems = [
    {
      label: "COMPANY",
      path: "/company",
      subItems: [
        // { label: "회사소개", path: "/contents" },
        { label: "연혁", path: "/facility-status" },
        { label: "시설현황", path: "/facility-status" },
        { label: "오시는길", path: "/directions" },
      ],
    },
    {
      label: "BUSINESS",
      path: "/main-busines",
      subItems: [
        { label: "환경측정분석", path: "/environmrnt-consulting" },
        { label: "환경컨설팅", path: "#" },
        { label: "환경플랜트", path: "#" },
        { label: "시설물유지보수", path: "#" },
      ],
    },
    {
      label: "IoT 관리시스템",
      path: "#",
      subItems: [
        { label: "환경측정분석", path: "#" },
      ],
    },
    {
      label: "REFERENCE",
      path: "#",
      subItems: [
        { label: "환경측정분석", path: "#" },
        { label: "환경컨설팅", path: "#" },
        { label: "환경플랜트", path: "#" },
        { label: "시설물유지보수", path: "#" },
      ],
    },
    {
      label: "CUSTOMER",
      path: "#",
      subItems: [
        { label: "견적문의", path: "#" },
        { label: "신청서양식", path: "#" },
        { label: "고객지원", path: "#" },
        { label: "FAQ", path: "#" },
        { label: "Q&A", path: "#" },
      ],
    },
    {
      label: "NOTICE",
      path: "#",
      subItems: [
        { label: "공지사항", path: "#" },
        { label: "인재채용", path: "#" },
        
      ],
    },
  ];

  useEffect(() => {
    const savedTime = sessionStorage.getItem("videoTime");
    if (savedTime && videoRef.current) {
      videoRef.current.currentTime = parseFloat(savedTime);
    }
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all py-5 ${
        scrolling ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/">
          {scrolling ? (
            <img
              className="h-[50px]"
              src="https://www.ke-fa.com/default/img/logo.png"
              alt="Logo"
            />
          ) : (
            <img src="https://www.ke-fa.com/default/img/logo_light.png" />
          )}
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <Link
                to={item.path}
                className={`text-xl transition-all font-bold ${
                  scrolling ? "text-black" : "text-white"
                }`}
              >
                {item.label}
              </Link>
              <AnimatePresence>
                {openDropdown === index && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0  bg-white shadow-lg rounded-md w-40 z-50"
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="px-4 py-2 hover:bg-gray-100"
                      >
                        <NavLink to={subItem.path}>{subItem.label}</NavLink>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0  h-full bg-white shadow-lg z-50 flex flex-col p-4"
          >
            <button
              className="self-end mb-4"
              onClick={() => setMenuOpen(false)}
            >
              <X size={28} />
            </button>
            <nav>
              {menuItems.map((item, index) => (
                <div key={index} className="mb-4">
                  <button
                    className="flex justify-between w-full text-xl font-bold"
                    onClick={() => toggleMobileDropdown(index)}
                  >
                    {item.label} <ChevronDown size={20} />
                  </button>
                  <AnimatePresence>
                    {mobileDropdown === index && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gray-100 rounded-md p-2 mt-2"
                      >
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex} className="px-4 py-2">
                            <NavLink
                              to={subItem.path}
                              onClick={() => setMenuOpen(false)}
                            >
                              {subItem.label}
                            </NavLink>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
