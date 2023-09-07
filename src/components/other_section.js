// Section.js
import React from 'react';

const OtherSection = ({ title, subtitle, description, buttonText, imageSrc, bgColor}) => {
  return (
    <div className={`${bgColor} w-full lg:flex justify-center text-center `}>
      <div className=' pb-8 lg:pb-24 pt-40 w-full lg:flex justify-between max-w-[1920px] py-16 lg:py-32 items-center'>
        <div className=' lg:ml-[160px] mx-[16px] lg:w-2/3'>
          <p className=' text-[40px] leading-[46px] lg:text-[80px] text-[#381914] font-extrabold lg:leading-[88px] w-5/6 lg:w-full mx-auto font-cooper-std'>{subtitle}</p>
          {description.map((item, index) => (
            <p key={index} className='text-[#222] leading-5 text-[18px] mt-4 mb-12 w-5/6 mx-auto'>{item.description}</p>
          ))}
          <div className='mx-auto bg-[#F76F59] text-white px-6 py-3 rounded-full w-fit mt-4 lg:mt-8 '
          // onClick={scrollFunction()}
          >
            {buttonText}
          </div>
        </div>
        <div className='mt-12 lg:mt-0 mx-[24px] lg:mr-[16px] lg:w-2/3 flex items-center justify-center'><img src={imageSrc} alt="" /></div>
      </div>
    </div>
  );
}

export default OtherSection;
