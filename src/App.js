import logo from './logo.svg';
import './App.css';
import GalliHeader from './components/header';
import Section from './sections';
import { sections } from './utile/section_data';
import { userCards } from './utile/testimonial_data';
import UserCard from './components/user_card';

function App() {

  return (
    <div >
      <GalliHeader />
      {/* Hero-Section */}
      <div className='w-5/6 grid grid-cols-2 py-32 mx-auto gap-32'>
        <div>
          <p className='bg-[#FDE2DE] text-[#F76F59] border border-[#F76F59] rounded-full w-fit px-4 py-1'>Launching Soon</p>
          <p className='mt-4 text-[45px] text-[#381914] font-bold leading-[56px]'>Gallivanter: Where Adventure Meets Expertise, and Success Awaits</p>
          <p className='text-[#222] mt-4'>Embrace your inner explorer, guide with wisdom, and achieve
            triumph together with Gallivanter. Join us to create a legacy of adventure,
            guidance, and success in Nigeria.</p>
          <div className='bg-[#F76F59] text-white px-6 py-3 rounded-full w-fit mt-8 '>Get Started</div>
        </div>
        <div className=''><img src="./logo192.png" alt="" /></div>
      </div>
      <div className='max-w-[2880px]'>
        {sections.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </div>
      <div className='flex flex-col justify-center w-5/6 text-center mx-auto'>
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
      
    </div>
  );
}

export default App;
