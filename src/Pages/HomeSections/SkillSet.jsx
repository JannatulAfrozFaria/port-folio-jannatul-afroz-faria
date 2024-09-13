import Title from "../../Components/Title";
import UsedTechnology from "../../Components/UsedTechnology";


const SkillSet = () => {
    return (
        <div>
            <Title heading={'skillset'}></Title>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-24 img_bg3 my-8 p-8 md:p-24 shadow-xl rounded-2xl justify-around">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 col-span-2">
                    <div>
                        <p className="text-orange-300 text-lg font-semibold mb-6">Programming Languages</p>
                        <div className='grid grid-cols-3 gap-4'>
                            {/* <img width={'40px'} className='' src="https://i.ibb.co/6mXsJgx/html-5-icon-726x1024-evem6gg5.png" alt="HTML" /> */}
                            <img className='w-16' src="https://i.ibb.co/Rb3zwyz/html1.png" alt="HTML" />
                            <img className='w-16' src="https://i.ibb.co/g37V1Gd/css4.png" alt="CSS" />
                            <img className='w-16' src="https://i.ibb.co/q12wPdr/js.png" alt="JS" />
                        </div>
                    </div>
                    {/* Technologies and Tools----------- */}
                    <div>
                        <p className="text-orange-300 text-lg font-semibold mb-6">Technologies & Tools</p>
                        {/* <div className='grid grid-cols-3 gap-4'>
                            <img className='w-16' src="https://i.ibb.co/RPXxDxG/tailwind.png" alt="Tailwind" />
                            <img className='w-16' src="https://i.ibb.co/jrjDYLq/react.png" alt="React" />
                            <img className='w-16' src="https://i.ibb.co/DMxdFmm/firebase.png" alt="Firebase" />
                            <img className='w-16' src="https://i.ibb.co/pbLRSVY/mongodb-logo-D13-D67-C930-seeklogo-com.png" alt="MonoDB" />
                            <img className='w-16 h-16' src="https://i.ibb.co/MG8xR7v/express.jpg" alt="Express" />
                            <img className='w-16' src="https://i.ibb.co/vJ9Cq7r/vercel.jpg" alt="Vercel" />
                        </div> */}
                        <UsedTechnology></UsedTechnology>
                    </div>
                </div>
                <div className='text-left text-orange-200  text- md:text-base'>
                            <p className='text-orange-300 text-lg font-semibold mb-6'>As A Web Developer, I'm . . . </p>
                           <div className="flex gap-6 items-baseline">
                                <div>
                                    <li className='mb-2'>Adaptive</li>
                                    <li className='mb-2'>Team Player</li>
                                    <li className='my-2'>Creative</li>
                                    
                                    <li className='my-2'>Problem-Solver</li>
                                </div>
                                <div>
                                    <li className='my-2'>Hardworking</li>
                                    <li className='my-2'>Self-Motivated</li>
                                    <li className='my-2'>Detail-Oriented</li>
                                    <li className=''>Excellent Communicator</li>
                                </div>
                           </div>
                </div>
            </div>
           </div>
    );
};

export default SkillSet;