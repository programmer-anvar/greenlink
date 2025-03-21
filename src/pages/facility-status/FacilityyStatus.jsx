import React, { useState } from 'react';
import { facilityStatus } from './facilituyStatus-data';

const FacilityyStatus = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section>
      <div className="company-hero">
        <h3 className="text-4xl font-bold text-white">COMPANY</h3>
      </div>

      <div className="container">
        <h2 className='text-3xl text-center my-10'>시설현황</h2>

        <div className=' flex items-center justify-center flex-wrap  md:grid md:grid-cols-4 lg:grid-cols-5 gap-4 mb-11'>
          {facilityStatus.map((item, index) => (
            <div 
              key={index} 
              className='relative w-full md:max-w-[300px] h-[200px] cursor-pointer overflow-hidden group' 
              onClick={() => setSelectedImage(item.img)}
            >
              <img src={item.img} alt="Facility" className="w-full h-full object-cover transition duration-300 group-hover:opacity-60" />
              <div className="absolute inset-0 flex justify-center items-center backdrop-blur-[2px] bg-white/30 opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-black text-lg font-bold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 backdrop-blur-[2px] bg-white/30 flex justify-center items-center z-50" 
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full rounded-lg"
            onClick={(e) => e.stopPropagation()} 
          >
            <img src={selectedImage} alt="Facility Large" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      )}
    </section>
  );
};

export default FacilityyStatus;
