import Technologies from "../../Components/Technologies";
import Title from "../../Components/Title";



const SkillSet = () => {
    return (
        <div >
            <div data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">
                    <Title heading={'skillset'}></Title>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" className=" img_bg3 my-8 p-8 md:py-24 md:px-12 shadow-xl rounded-2xl ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20 w-5/6 mx-auto">
                {/* LANGUAGES---------- */}
                    <div>
                        <p className="text-orange-300 text-lg font-semibold mb-6 text-center ">Programming Languages</p>
                        <div className='flex gap-4 justify-center'>
                            <img className='w-16' src="https://i.ibb.co/Rb3zwyz/html1.png" alt="HTML" />
                            <img className='w-16' src="https://i.ibb.co/g37V1Gd/css4.png" alt="CSS" />
                            <img className='w-16' src="https://i.ibb.co/q12wPdr/js.png" alt="JS" />
                        </div>
                    </div>
                    {/* Technologies and Tools----------- */}
                    <div>
                        <Technologies></Technologies>
                    </div>
                    {/* SOFT-----SKILLS----- */}
                    <div className='text-orange-200  text- md:text-base'>
                        <p className=' text-center md:text-left text-orange-300 text-lg font-semibold mb-6'>As A Web Developer, I'm . . . </p>
                        <div className="flex gap-12 md:gap-8 items-baseline justify-center md:justify-start">
                            <div >
                                <li className='my-2'>Hardworking</li>
                                <li className='my-2'>Self-Motivated</li>
                                <li className='my-2'>Detail-Oriented</li>
                                <li className='my-2'>Problem-Solver</li>
                                <li className=''>Communicative</li>
                            </div>
                            <div >
                                <li className='mb-2'>Adaptive</li>
                                <li className='mb-2'>Team Player</li>
                                <li className='my-2'>Creative</li>
                                <li className='my-2'>Responsive</li>
                                <li className='my-2'>Efficient</li>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SkillSet;