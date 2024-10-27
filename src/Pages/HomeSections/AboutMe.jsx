import Title from "../../Components/Title";

const AboutMe = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = `/Frontend_Developer_Resume_of_Jannatul_Afroz_Faria.pdf`;
        link.download = 'Frontend_Developer_Resume_of_Jannatul_Afroz_Faria.pdf';
        link.click();
        }

  return (
    <div>
        <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
            <Title heading={'introduction'}></Title>
        </div>
        <div data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1500" className="img_bg_about_me grid grid-cols-1 md:grid-cols-2 gap-6 p-6 shadow-xl rounded-xl">
            <div data-aos="flip-up" data-aos-delay="2000" data-aos-duration="2500" className="w-full md:1/4">
                <figure className="img_bg2">
                    <div className="p-6 text-justify">
                        <p className='text-orange-300 text-lg font-semibold'>Committed to :</p>
                        <p  className='text-yellow-300 text-base '>Providing top-notch, scalable, and performant solutions, from creating user-friendly interfaces to putting strong front-end logic into place and interfacing with back-end systems. Continuously expanding my skill set, I stay up-to-date with the latest industry trends and best practices, ensuring efficient and maintainable code.</p>
                        <div className="my-4">
                            <p className='text-orange-300 text-lg font-semibold'>Fun Fact :</p>
                            <p  className='text-yellow-300 text-base'>I love reading story books, cycling and I know 4 languages. They are : Bengali, English, Hindi & Urdu. </p>
                        </div>
                        <div className="">
                            <p className='text-orange-300 text-lg font-semibold'>Currently Looking For :</p>
                            <p  className='text-yellow-300 text-base'>Remote Job</p>
                        </div>
                    </div>
                </figure>
            </div>
            <div className="w-full md:w-3/4 mt-6">
                <h2 data-aos="fade-left" data-aos-delay="1500"  data-aos-duration="2000"className="card-title text-yellow-500 text-lg font-semibold">About Me</h2>
                <div data-aos="fade-left" data-aos-delay="2000" data-aos-duration="2000" className="mb-6 text-justify text-yellow-300">
                    <p>I am an entry level frontend web developer skilled in building responsive and interactive user interfaces using modern web technologies such as HTML, CSS, Bootstrap, Tailwind CSS, React.js, and Node.js. 
                    </p>
                    <p>I am capable of creating single-page applications and managing and storing data with MongoDB. With a passion for creating seamless user experiences, I thrive in collaborative environments where I can contribute to the full lifecycle of web development. 
                    </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="1000" data-aos-duration="3000"className="card-actions justify-start">
                    <button className="btn btn-base" onClick={handleDownload}>Download Resume</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AboutMe;