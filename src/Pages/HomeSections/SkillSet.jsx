import Title from "../../Components/Title";


const SkillSet = () => {
    return (
        <div>
            <Title heading={'skillset'}></Title>
            <div className="flex flex-col md:flex-row gap-24 bg-green-900 my-8 p-8 md:p-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                    <div>
                        <p className="text-yellow-700 text-lg font-semibold mb-6">Programming Languages</p>
                        <div className='grid grid-cols-3 gap-4'>
                            <img width={'40px'} className='' src="https://i.ibb.co/6mXsJgx/html-5-icon-726x1024-evem6gg5.png" alt="HTML" />
                            <img width={'50px'}  className='' src="https://i.ibb.co/mRr6Rgs/css.png" alt="CSS" />
                            <img width={'50px'}  className='' src="https://i.ibb.co/q12wPdr/js.png" alt="JS" />
                        </div>
                    </div>
                    <div>
                        <p className="text-yellow-700 text-lg font-semibold mb-6">Technologies & Tools</p>
                        <div className='grid grid-cols-3 gap-4'>
                            <img width={'50px'}  className='' src="https://i.ibb.co/RPXxDxG/tailwind.png" alt="Tailwind" />
                            <img width={'50px'}  className='' src="https://i.ibb.co/jrjDYLq/react.png" alt="React" />
                            <img width={'50px'}  className='' src="https://i.ibb.co/DMxdFmm/firebase.png" alt="Firebase" />
                            <img width={'50px'}  className='' src="https://i.ibb.co/pbLRSVY/mongodb-logo-D13-D67-C930-seeklogo-com.png" alt="MonoDB" />
                            <img width={'50px'}  className='' src="https://i.ibb.co/nwnvX0n/png-transparent-mean-solution-stack-express-js-node-js-javascript-github-text-trademark-logo-thumbna.png" alt="Express" />
                            <img width={'50px'}  className='' src="https://i.ibb.co/vJ9Cq7r/vercel.jpg" alt="Vercel" />
                        </div>
                    </div>
                </div>
                <div className='text-left text-orange-200  text- md:text-base'>
                            <p className='text-orange-300 text-lg font-semibold'>As A Web Developer, I'm . . . </p>
                           <div className="flex gap-6">
                                <div>
                                    <li className='my-2'>Adaptive</li>
                                    <li className='my-2'>Hardworking</li>
                                    <li className='my-2'>Detail-Oriented</li>
                                    <li className='my-2'>Problem-Solver</li>
                                </div>
                                <div>
                                    <li className='my-2'>Team Player</li>
                                    <li className='my-2'>Self-Motivated</li>
                                    <li className='my-2'>Creative</li>
                                    <li className=''>Excellent Communicator</li>
                                </div>
                           </div>
                </div>
            </div>
           </div>
    );
};

export default SkillSet;