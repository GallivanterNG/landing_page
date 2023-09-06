// Section.js
import React from 'react';

const Section = ({ title, subtitle, description, buttonText, imageSrc, bgColor }) => {
  return (
    <div className={bgColor}>
      <div className='w-5/6 grid grid-cols-2 py-32 mx-auto gap-12'>
        <div className=''>
          <p className=' text-[rgb(247,111,89)] rounded-full w-fit '>{title}</p>
          <p className=' mt-2 text-[45px] text-[#381914] font-bold leading-[56px]'>{subtitle}</p>

          {description.map((item, index) => (
            <div key={index} className=' flex gap-4 mt-8 items-center'>
              <div className='w-fit bg-[#ffdfda] h-fit p-2 rounded-md'>
                <img src={imageSrc} alt="" className='h-[32px] w-[32px]' />
              </div>
              <div className='col-start-3 col-end-8'>
                <p className='font-semibold text-[#222]'>{item.title}</p>
                <p className='text-[#222] mt-1 leading-5'>{item.description}</p>
              </div>
            </div>
          ))}

          <div className='bg-[#F76F59] text-white px-6 py-3 rounded-full w-fit mt-8 '>
            {buttonText}
          </div>
        </div>
        <div className=''><img src={imageSrc} alt="" /></div>
      </div>
    </div>
  );
}

export default Section;
