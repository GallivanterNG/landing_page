import React, { useRef, useState } from 'react'

const GalliHeader = ({ scrollToHome, scrollToWorks, scrollToFaqs, scrollToSignUp }) => {
    const [activePage, setActivePage] = useState("home")


    return (
        <div className='fixed z-50 bg-white w-full h-[88px] shadow-md items-center flex justify-center'>
            <div className='flex align-middle items-center justify-between mx-[120px] w-full max-w-[1920px]'>
                <div className='flex items-center gap-12'>
                    <img className='h-10' src="./assets/images/logo.png" alt=''></img>
                    <span className='flex gap-8'>
                        <h2
                            className={`${activePage === "home" ? "text-[#E36A5D] font-semibold" : "text-black font-medium"} cursor-pointer`}
                            onClick={() => {
                                setActivePage("home");
                                // scrollToSection(homeRef);
                                scrollToHome();
                            }
                            }
                        >Home</h2>

                        <h2
                            className={`${activePage === "works" ? "text-[#E36A5D] font-semibold" : "text-black font-medium"}  cursor-pointer`}
                            onClick={() => {
                                setActivePage("works");
                                // scrollToSection(howItWorksRef);
                                scrollToWorks();
                            }
                            }
                        >How it works</h2>
                        <h2 className={`${activePage === "FAQs" ? "text-[#E36A5D] font-semibold" : "text-black font-medium"}  cursor-pointer`}
                            onClick={() => {
                                setActivePage("FAQs");
                                // scrollToSection(faqsRef);
                                scrollToFaqs();
                            }
                            }
                        >
                            Testimonials</h2>
                    </span></div>
                <div className='bg-[#F76F59] text-white px-6 py-2 rounded-full' onClick={() => { scrollToSignUp(); }}>Sign Up</div>
            </div>
        </div>
    )
}

export default GalliHeader
