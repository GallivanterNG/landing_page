import React, { useState } from 'react'

const GalliHeader = () => {
    const [activePage, setActivePage] = useState("home")

    return (
        <div className='w-full h-[88px] shadow-md items-center flex'>
            <div className='flex items-center justify-between w-5/6 mx-auto max-w-[2880px]'>
                <div className='flex items-center gap-12'>
                    <img className='h-12' src="./logo192.png" alt=''></img>
                    <span className='flex gap-8'>
                        <h2
                            className={`${activePage === "home" ? "text-[#E36A5D] font-semibold" : "text-black font-medium"} cursor-pointer`}
                            onClick={() => { setActivePage("home") }
                            }
                        >Home</h2>

                        <h2 className={`${activePage === "works" ? "text-[#E36A5D] font-semibold" : "text-black font-medium"}  cursor-pointer`}
                            onClick={() => { setActivePage("works") }
                            }>How it works</h2>
                        <h2 className={`${activePage === "FAQs" ? "text-[#E36A5D] font-semibold" : "text-black font-medium"}  cursor-pointer`}
                            onClick={() => { setActivePage("FAQs") }
                            }>FAQs</h2>
                    </span></div>
                <div className='bg-[#F76F59] text-white px-6 py-2 rounded-full'>Sign Up</div>
            </div>
        </div>
    )
}

export default GalliHeader
