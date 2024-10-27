import { Helmet } from 'react-helmet-async';
import '@fontsource/roboto/500.css';
import AboutMe from './HomeSections/AboutMe';
import card from '../assets/images/banner/5718116.png'
import SkillSet from './HomeSections/SkillSet';
import Contact from './HomeSections/Contact';
import Certifications from './HomeSections/Certifications';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Port Folio | Jannatul Afroz Faria</title>
            </Helmet>
            {/* <div className='relative mt-12'>
            <img className='w-[980px] md:w-[1280px] lg:w-[1600px]'  src="https://i.ibb.co/jWwvC1C/bg-01.jpg" alt="" />
              <div className='absolute left-16 md:left-32 lg:left-56 top-0 md:top-16 '>
                  <div className="flex gap-6 md:gap-20 py-6 items-end">
                     <div>
                        <p className='text-orange-200 z-10 text-right text-base  md:text-4xl'>Hello, I'm Jannatul Afroz Faria!</p>
                        <img className='pt-6 w-[400px] md:w-[600px]' src='https://i.ibb.co/m8b52Sq/5718116.png' alt="" />
                     </div>
                     <div>
                          <img className='w-3/4 md:full' src="https://i.ibb.co/cybtGJN/banner-pic-removebg-preview.png" alt="" />
                     </div>
                  </div>
              </div>
          </div> */}
            <div data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-anchor-placement="top-center"
                className='img_bg_banner mt-12'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 items-end justify-center py-8 md:py-24 w-3/4 mx-auto '>
                    <div className='col-span-2'>
                        <p data-aos="fade-right" data-aos-duration="1000"
                        className='text-orange-200 z-10 text-right text-base  md:text-4xl'>Hello, I'm Jannatul Afroz Faria!</p>
                        <div data-aos="fade-right" data-aos-duration="2000"
                         className='pt-6 flex justify-end'> 
                            <img className='rounded-3xl h-full md:h-[380px]' src="https://i.ibb.co/m8b52Sq/5718116.png" alt="" />
                        </div>
                    </div>
                    <div className='hidden md:block' data-aos="fade-right" data-aos-duration="3000">
                        {/* <img src="https://i.ibb.co/cybtGJN/banner-pic-removebg-preview.png" alt="" /> */}
                        <img src="https://i.postimg.cc/hPBbVqM5/2024-10-27-at-20-07-39-bg2.png" alt="" />
                    </div>
                </div>
            </div>
            <AboutMe></AboutMe>
            <SkillSet></SkillSet>
            <Certifications></Certifications>
            <Contact></Contact>
        </div>
    );
};

export default Home;