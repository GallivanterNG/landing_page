// Section.js
import React from 'react';

const OtherSection = ({ title, subtitle, description, buttonText, imageSrc, bgColor, }) => {
  return (
    <div className={`${bgColor} w-full flex justify-center`}>
      <div className=' my-12 w-full flex justify-between max-w-[1920px] pt-32 items-center'>
        <div className=' ml-[160px] w-1/2 mb-40 '>
          <p className=' mt-2 text-[48px] text-[#381914] font-extrabold mb-2 leading-[56px] w-[600px]'>{subtitle}</p>
          {description.map((item, index) => (
            <p key={index} className='text-[#222] w-2/3 leading-5 text-[18px] mt-4 mb-12'>{item.description}</p>
          ))}

          <div className='bg-[#F76F59] text-white px-6 py-3 rounded-full w-fit mt-8 '>
            {buttonText}
          </div>
        </div>
        <div className='w-1/2 flex items-center justify-center'><img src={imageSrc} alt="" /></div>
      </div>
    </div>
  );
}

export default OtherSection;
