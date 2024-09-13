

const Technologies = () => {
    return (
        <div className="w-full md:w-5/6 ">
            <p className="text-orange-300 text-lg font-semibold mb-6 text-center">Technologies & Tools</p>
            <div className='flex flex-col gap-2 justify-center md:justify-start  items-center'>
                <div className="flex flex-row gap-2 justify-center md:justify-start">
                    <img className='w-16 rounded-lg' src="https://i.ibb.co/RPXxDxG/tailwind.png" alt="Tailwind" />
                    <img className='w-16 rounded-lg' src="https://i.ibb.co/jrjDYLq/react.png" alt="React" />
                    <img className='w-16 rounded-lg' src="https://i.ibb.co/DMxdFmm/firebase.png" alt="Firebase" />
                </div>
                <div className="flex flex-row gap-2 justify-center md:justify-start">
                    <img className='w-16 rounded-lg my-4 md:my-2' src="https://i.postimg.cc/XJNfVxGs/node-js.png" alt="Vercel" />
                    <img className='w-16 h-16 rounded-lg my-4 md:my-2' src="https://i.ibb.co/MG8xR7v/express.jpg" alt="Express" />
                    <img className='w-16 rounded-lg my-4 md:my-2' src="https://i.ibb.co/vJ9Cq7r/vercel.jpg" alt="Vercel" />
                </div>
                <div className="flex flex-row gap-2 justify-center md:justify-start">
                    <img className='w-16 rounded-lg' src="https://i.ibb.co/pbLRSVY/mongodb-logo-D13-D67-C930-seeklogo-com.png" alt="MonoDB" />
                    <img className='w-16 rounded-lg' src="https://i.postimg.cc/ryJz3xZG/next-white.jpg" alt="Vercel" />
                    <img className='w-16 h-16 rounded-lg' src="https://i.postimg.cc/c1bRSRsc/axios3626.jpg" alt="Vercel" />
                </div>
            </div>
        </div>
    );
};

export default Technologies;