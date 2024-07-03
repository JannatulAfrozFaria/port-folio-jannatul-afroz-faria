import { Helmet } from 'react-helmet-async';
import '@fontsource/roboto/500.css';
import AboutMe from './HomeSections/AboutMe';
import card from '../assets/images/banner/5718116.png'
import SkillSet from './HomeSections/SkillSet';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Port Folio | Jannatul Afroz Faria</title>
            </Helmet>
          <div className='relative'>
            {/* <img width={'1280px'}  src="https://i.ibb.co/jWwvC1C/bg-01.jpg" alt="" /> */}
            <img className='w-[1280px]'  src="https://i.ibb.co/jWwvC1C/bg-01.jpg" alt="" />
              <div className='absolute left-16 md:left-32 top-6 md:top-16'>
                  {/* <p className='text-orange-200 z-10 ml-64'>Hello, I'm Jannatul Afroz Faria!</p> */}
                  <div className="flex gap-6 md:gap-20 py-6 items-end">
                     <div>
                        <p className='text-orange-200 z-10 text-right text-base  md:text-4xl'>Hello, I'm Jannatul Afroz Faria!</p>
                        {/* <img width={'600px'} className='py-6' src="https://i.ibb.co/PcFKCRS/Card-V-2.png" alt="" /> */}
                        <img className='pt-6 w-[400px] md:w-[600px]' src='https://i.ibb.co/m8b52Sq/5718116.png' alt="" />
                     </div>
                     <div>
                          <img className='w-3/4 md:full' src="https://i.ibb.co/cybtGJN/banner-pic-removebg-preview.png" alt="" />
                     </div>
                  </div>
              </div>
          </div>
          <AboutMe></AboutMe>
          <SkillSet></SkillSet>
       </div>
    );
};

export default Home;