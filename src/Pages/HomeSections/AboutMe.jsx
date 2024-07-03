import Title from "../../Components/Title";

const AboutMe = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = `/Resume_Jannatul_Afroz_Faria.pdf`;
        link.download = 'Resume_Jannatul_Afroz_Faria.pdf';
        link.click();
        }

  return (
    <div>
        <Title heading={'introduction'}></Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-base-100 shadow-xl rounded-xl">
            <div className="w-full md:1/4">
                <figure className="img_bg2">
                    {/* <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                    alt="Movie" /> */}
                </figure>
            </div>
            <div className="w-full md:w-3/4">
                <h2 className="card-title">About Me</h2>
                <div className="text-left mb-6">
                    <p>I am an entry level frontend web developer skilled in building responsive and interactive user interfaces using modern web technologies such as HTML, CSS, Bootstrap, Tailwind CSS, React.js, and Node.js. 
                    </p>
                    <p>I am capable of creating single-page applications and managing and storing data with MongoDB. With a passion for creating seamless user experiences, I thrive in collaborative environments where I can contribute to the full lifecycle of web development. 
                    </p>
                    <p>Currently Looking For : <span className="text-basic">Remote Jobs</span>
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