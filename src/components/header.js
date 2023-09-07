import { Drawer } from 'antd'
import React, { useRef, useState } from 'react'
import { FaBars, FaHamburger } from 'react-icons/fa'

const GalliHeader = ({ scrollToHome, scrollToWorks, scrollToFaqs, scrollToSignUp }) => {
    const [activePage, setActivePage] = useState("home")
    const [drawer, setDrawer] = useState(false)

    const openDrawer = () => {
        setDrawer(true)
    }

    const onClose = () => {
        setDrawer(false);
    };

    const navItems = () => {
        return (<span className=' text-[24px]'>
            <h2
                className={`${activePage === "home" ? "text-[#E36A5D] font-semibold" : "text-black font-medium"} cursor-pointer mt-4`}
                onClick={() => {
                    setActivePage("home");
                    // scrollToSection(homeRef);
                    scrollToHome();
                    onClose()
                }
                }
            >Home</h2>

            <h2
                className={`${activePage === "works" ? "text-[#E36A5D] font-semibold" : "text-black font-medium"}  cursor-pointer mt-6`}
                onClick={() => {
                    setActivePage("works");
                    // scrollToSection(howItWorksRef);
                    scrollToWorks();
                    onClose()
                }
                }
            >How it works</h2>
            {/* <h2 className={`${activePage === "FAQs" ? "text-[#E36A5D] font-semibold" : "text-black font-medium"}  cursor-pointer mt-6`}
                onClick={() => {
                    setActivePage("FAQs");
                    // scrollToSection(faqsRef);
                    scrollToFaqs();
                    onClose()
                }
                }
            >
                Testimonials</h2> */}
        </span>)
    }

    return (
        <div className='fixed z-50 bg-white w-full h-[72px] md:h-[88px] shadow-md items-center flex justify-center'>
            <div className='flex align-middle items-center justify-between mx-[16px] md:mx-[40px] lg:mx-[120px] w-full max-w-[1920px]'>
                <div className='flex items-center gap-3 md:gap-12 '>
                    <FaBars color='black' className='md:hidden' onClick={openDrawer} />

                    {drawer && <Drawer
                        title=""
                        placement="left"
                        onClose={onClose} open={drawer}
                    >
                        {navItems()}
                    </Drawer>}
                    <img className='h-10' src="./assets/images/icon.png" alt=''></img>
                    <span className='md:flex gap-8 hidden'>
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
                        {/* <h2 className={`${activePage === "FAQs" ? "text-[#E36A5D] font-semibold" : "text-black font-medium"}  cursor-pointer`}
                            onClick={() => {
                                setActivePage("FAQs");
                                // scrollToSection(faqsRef);
                                scrollToFaqs();
                            }
                            }
                        >
                            Testimonials</h2> */}
                    </span>
                </div>
                <div className='bg-[#F76F59] text-white px-6 py-2 rounded-full' onClick={() => { scrollToSignUp(); }}>Sign Up</div>
            </div>
        </div>
    )
}

export default GalliHeader
