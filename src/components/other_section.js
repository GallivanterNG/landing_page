// Section.js
import React from 'react';

const OtherSection = ({ title, subtitle, description, buttonText, imageSrc, bgColor, scrollFunction}) => {
  return (
    <div className={`${bgColor} w-full lg:flex justify-center`}>
      <div className=' pb-8 lg:pb-0 my-12 w-full lg:flex justify-between max-w-[1920px] pt-16 lg:pt-32 items-center'>
        <div className=' lg:ml-[160px] mx-[16px] lg:w-1/2 mb-12 lg:mb-40 '>
          <p className=' mt-2 text-[40px] leading-[46px] lg:text-[48px] text-[#381914] font-extrabold mb-2 lg:leading-[56px] w-5/6 lg:w-[600px]'>{subtitle}</p>
          {description.map((item, index) => (
            <p key={index} className='text-[#222] leading-5 text-[18px] mt-4 mb-12 w-5/6'>{item.description}</p>
          ))}
          <div className='bg-[#F76F59] text-white px-6 py-3 rounded-full w-fit mt-4 lg:mt-8 '
          onClick={scrollFunction()}
          >
            {buttonText}
          </div>
        </div>
        <div className='mx-[16px]  lg:w-1/2 flex items-center justify-center'><img src={imageSrc} alt="" /></div>
      </div>
    </div>
  );
}

export default OtherSection;
