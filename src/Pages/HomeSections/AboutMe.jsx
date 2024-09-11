import Title from "../../Components/Title";

const AboutMe = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = `/Resume_of_Jannatul_Afroz_Faria.pdf`;
        link.download = 'Resume_of_Jannatul_Afroz_Faria.pdf';
        link.click();
        }

  return (
    <div>
        <Title heading={'introduction'}></Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-base-100 shadow-xl rounded-xl">
            <div className="w-full md:1/4">
                <figure className="img_bg2">
                    <div className="p-6 text-left">
                        <p className='text-orange-300 text-lg font-semibold'>Committed to :</p>
                        <p  className='text-yellow-300 text-base '>Providing top-notch, scalable, and performant solutions, from creating user-friendly interfaces to putting strong front-end logic into place and interfacing with back-end systems. Continuously expanding my skill set, I stay up-to-date with the latest industry trends and best practices, ensuring efficient and maintainable code.</p>
                        <div className="my-4">
                            <p className='text-orange-300 text-lg font-semibold'>Fun Fact :</p>
                            <p  className='text-yellow-300 text-base'>I love reading story books, cycling and I know 3 languages (Bangla, English, Hindi) </p>
                        </div>
                        <div className="">
                            <p className='text-orange-300 text-lg font-semibold'>Currently Looking For :</p>
                            <p  className='text-yellow-300 text-base'>Remote Job</p>
                        </div>
                    </div>
                    
                </figure>
            </div>
            <div className="w-full md:w-3/4 mt-6">
                <h2 className="card-title text-yellow-600 text-lg font-semibold">About Me</h2>
                <div className="text-left mb-6">
                    <p>I am an entry level frontend web developer skilled in building responsive and interactive user interfaces using modern web technologies such as HTML, CSS, Bootstrap, Tailwind CSS, React.js, and Node.js. 
                    </p>
                    <p>I am capable of creating single-page applications and managing and storing data with MongoDB. With a passion for creating seamless user experiences, I thrive in collaborative environments where I can contribute to the full lifecycle of web development. 
                    </p>
                </div>
                <div className="card-actions justify-start">
                    <button className="btn btn-base" onClick={handleDownload}>Download Resume</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AboutMe;