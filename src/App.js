import logo from './logo.svg';
import './App.css';
import GalliHeader from './components/header';
import { sections } from './utils/section_data';
import { userCards } from './utils/testimonial_data';
import UserCard from './components/user_card';
import Footer from './components/footer';
import OtherSection from './components/other_section';
import { otherSections } from './utils/othersection_data';
import { useRef, useState } from 'react';
import { Input } from 'antd';
import { handleSubmit } from './utils/firebase';

const App = () => {

  const [userName, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [role, setRole] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setsuccess] = useState(false)

  const homeRef = useRef(null);
  const howItWorksRef = useRef(null);
  const faqsRef = useRef(null);
  const signUpRef = useRef(null);

  const handleWaitlist = async () => {
    
    setLoading(true)
    const isSuccess = await handleSubmit(userName,
      email,
      phone,
      role)
    if (isSuccess) { setLoading(false) 
      setsuccess(true)
      console.log(isSuccess)}
  }


  return (
    <div >
      <GalliHeader
        scrollToHome={() => homeRef.current.scrollIntoView({ behavior: 'smooth' })}
        scrollToWorks={() => howItWorksRef.current.scrollIntoView({ behavior: 'smooth' })}
        scrollToFaqs={() => faqsRef.current.scrollIntoView({ behavior: 'smooth' })}
        scrollToSignUp={() => signUpRef.current.scrollIntoView({ behavior: 'smooth' })}

      />
      {/* Hero-Section */}
      <div ref={homeRef} className='w-full flex justify-center pt-24'><div className=' flex justify-between  max-w-[1920px] '>
        <div className='ml-[160px] mt-[120px] w-1/2 '>
          <p className='bg-[#FDE2DE] text-[rgb(247,111,89)] border border-[#F76F59] rounded-full w-fit px-4 py-1'>Launching Soon</p>
          <p className='mt-8 text-[62px] text-[#381914] font-extrabold leading-[68px]'>Gallivanter: Where Adventure Meets Expertise, and Success Awaits</p>
          <p className='text-[#222] mt-6 w-2/3 text-[18px] font-medium leading-[21px] '>Embrace your inner explorer, guide with wisdom, and achieve
            triumph together with Gallivanter. Join us to create a legacy of adventure,
            guidance, and success in Nigeria.</p>
          <div className='bg-[#F76F59] text-white px-6 py-3 rounded-full w-fit mt-12 '>Get Started</div>
        </div>
        <div className='w-1/2 place-content-end flex mt-12 h-fit mb-6'><img src="./assets/images/header.png" alt="" className='' /></div>
      </div></div>


      <div ref={howItWorksRef} className={"bg-[#FDE2DE] w-full flex justify-center"}>
        <div className='w-full flex justify-between max-w-[1920px] pt-32 items-center'>
          <div className='ml-[160px] '>
            <p className='text-[rgb(247,111,89)] rounded-full w-fit'>{sections.title}</p>
            <p className='mt-2 text-[56px] w-[480px] font-extrabold text-[#381914] leading-[64px]'>{sections.subtitle}</p>

            <div className='flex gap-4 mt-8 items-center'>
              <div className='bg-[#ffdfda] p-2 rounded-md'>
                <img src={sections.images[1]} alt="" />
              </div>
              <div className='mt-4'>
                <p className='font-semibold text-[#222] text-[19px]'>{sections.description[0].title}</p>
                <p className='text-[#222] mt-1 leading-5 w-2/3 text-[18px]'>{sections.description[0].description}</p>
              </div>
            </div>
            <div className='flex gap-4 mt-8 items-center'>
              <div className='bg-[#ffdfda] p-2 rounded-md'>
                <img src={sections.images[2]} alt="" />
              </div>
              <div className='mt-4'>
                <p className='font-semibold text-[#222] text-[19px]'>{sections.description[1].title}</p>
                <p className='text-[#222] mt-1 leading-5 w-2/3 text-[18px]'>{sections.description[1].description}</p>
              </div>
            </div>
            <div className='flex gap-4 mt-8 items-center mb-40'>
              <div className='bg-[#ffdfda] p-2 rounded-md'>
                <img src={sections.images[3]} alt="" />
              </div>
              <div className='mt-4'>
                <p className='font-semibold text-[#222] text-[19px] '>{sections.description[2].title}</p>
                <p className='text-[#222] mt-1 leading-5 w-2/3 text-[18px]'>{sections.description[2].description}</p>
              </div>
            </div>
          </div>
          <div className=''><img src={sections.images[0]} alt="" /></div>
        </div>
      </div>

      {otherSections.map((section, index) => (
        <OtherSection key={index} {...section} />
      ))}

      <div ref={faqsRef} className='mt-32 flex flex-col justify-center w-5/6 text-center mx-auto max-w-[1920px]'>
        <h2 className='mt-2 text-[#E36A5D] font-medium'>What People are saying?</h2>
        <h2 className='mt-2 text-[36px] font-bold text-[#381914]'>User Testimonials</h2>
        <h2 className='mt-2 w-2/3 mx-auto'>Fusce commodo metus nec massa malesuada, in congue ex sodales. Aliquam euismod, odio non dignissim lacinia,ipsum sem fermentum sapien, vel congue urna est sed libero. Proin id bibendum erat.</h2>
        <div className="grid grid-cols-4 mt-8">
          {userCards.map((user, index) => (
            <UserCard
              key={index}
              imageUrl={user.imageUrl}
              message={user.message}
              name={user.name}
              role={user.role}
            />
          ))}
        </div>
      </div>

      <div ref={signUpRef} className='flex justify-center items-center'>
        <div className='mx-[160px] my-[120px]'>
          <h2 className='font-extrabold text-[48px] text-center'>Sign up to get started</h2>
          <div className="mt-4">
            <div className=' gap-8'>
              <div>
                <div className="mb-1 mt-4">
                  <label className="text-gray-500"> Name </label>
                </div>
                <Input
                  className="w-full h-[48px] hover:border-green-500 active:border-green-600"
                  placeholder="Please enter your name"
                  value={userName}
                  required={true}
                  onChange={(e) => setName(e.target.value)}

                />
              </div>
              <div>
                <div className="mb-1 mt-2">
                  <label className="text-gray-500"> Email </label>
                </div>
                <Input
                  className="w-full h-[48px] hover:border-green-500 active:border-green-600"
                  placeholder="Please enter your email"
                  value={email}
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className=' gap-8'>
              <div><div className="mb-1 mt-2">
                <label className="text-gray-500"> Phone </label>
              </div>
                <Input
                  className="w-full h-[48px] hover:border-green-500 active:border-green-600"
                  placeholder="Please enter your phone"
                  value={phone}
                  required={true}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div>
                <div className="mb-1 mt-2">
                  <label className="text-gray-500"> Role </label>
                </div>
                <Input
                  className="w-full h-[48px] hover:border-green-500 active:border-green-600"
                  placeholder="What do you do?"
                  value={role}
                  required={true}
                  onChange={(e) => setRole(e.target.value)}
                /></div>
            </div>
          </div>
          {success ? <div>Welcome to Gallivanter</div> : <div>Something went wrong</div>}
          <div className='w-full flex justify-center mt-12'>
            <div className='bg-[#F76F59] text-white px-12 py-3 rounded-full w-fit cursor-pointer' onClick={handleWaitlist}> {loading ?'Loading...' :'Get Started'}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
