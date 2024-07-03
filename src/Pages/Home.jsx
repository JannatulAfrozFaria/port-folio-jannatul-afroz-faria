import { Helmet } from 'react-helmet-async';
import '@fontsource/roboto/500.css';
import AboutMe from './HomeSections/AboutMe';
import card from '../assets/images/banner/5718116.png'


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
          {/* About Me------- */}
          <AboutMe></AboutMe>
          {/* Technologies---------- */}
          <div>
            <p className='text-3xl my-6'>Technologies I know</p>
            <div className='flex gap-4'>
                <img width={'50px'} className='' src="https://i.ibb.co/6mXsJgx/html-5-icon-726x1024-evem6gg5.png" alt="HTML" />
                <img width={'50px'}  className='' src="https://i.ibb.co/mRr6Rgs/css.png" alt="CSS" />
                <img width={'50px'}  className='' src="https://i.ibb.co/q12wPdr/js.png" alt="JS" />
                <img width={'50px'}  className='' src="https://i.ibb.co/RPXxDxG/tailwind.png" alt="Tailwind" />
                <img width={'50px'}  className='' src="https://i.ibb.co/jrjDYLq/react.png" alt="React" />
                <img width={'50px'}  className='' src="https://i.ibb.co/DMxdFmm/firebase.png" alt="Firebase" />
                <img width={'50px'}  className='' src="https://i.ibb.co/pbLRSVY/mongodb-logo-D13-D67-C930-seeklogo-com.png" alt="MonoDB" />
            </div>
          </div>
                
       </div>
    );
};

export default Home;