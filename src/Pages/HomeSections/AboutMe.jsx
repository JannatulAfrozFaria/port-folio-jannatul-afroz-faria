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
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">About Me</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-base" onClick={handleDownload}>Download Resume</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AboutMe;