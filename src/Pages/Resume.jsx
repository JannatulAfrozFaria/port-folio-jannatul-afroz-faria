import { Helmet } from "react-helmet-async";
import Title from "../Components/Title";
import slide1 from '../assets/images/resume/Slide1.JPG'


const Resume = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = `/Resume_Jannatul_Afroz_Faria.pdf`;
        link.download = 'Resume_Jannatul_Afroz_Faria.pdf';
        link.click();
        }
    return (
        <div>
             <Helmet>
                <title>Resume | Jannatul Afroz Faria</title>
            </Helmet>
            <div className="mt-6">
                <button className="btn btn-base" onClick={handleDownload}>Download Resume</button>
            </div>
            <Title title={'resume of'} heading={'Jannatul Afroz Faria'} subHeading={'Web Developer'}></Title>
            <div className="grid">
                <div>
                    <img src={slide1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Resume;