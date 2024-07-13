import { Helmet } from "react-helmet-async";
import Title from "../Components/Title";
import slide1 from '../assets/images/resume/Slide1.jpg';
import slide2 from '../assets/images/resume/Slide2.jpg';
import slide3 from '../assets/images/resume/Slide3.jpg';
import slide4 from '../assets/images/resume/Slide4.jpg';


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
                <title>CV | Jannatul Afroz Faria</title>
            </Helmet>
            <div className="mt-6">
                <button className="btn btn-base" onClick={handleDownload}>Download CV</button>
            </div>
            <Title title={'CV of'} heading={'Jannatul Afroz Faria'} subHeading={'Web Developer'}></Title>
            <div className="grid grid-cols-1 gap-6 mb-8 w-3/4 mx-auto">
                <div className="border border-r-2 border-r-yellow-500 border-b-2 border-b-yellow-500">
                    <img className="w-full" src={slide1} alt="" />
                </div>
                <div className="border border-r-2 border-r-yellow-500 border-b-2 border-b-yellow-500">
                    <img className="w-full" src={slide2} alt="" />
                </div>
                <div className="border border-r-2 border-r-yellow-500 border-b-2 border-b-yellow-500">
                    <img className="w-full" src={slide3} alt="" />
                </div>
                <div className="border border-r-2 border-r-yellow-500 border-b-2 border-b-yellow-500">
                    <img className="w-full" src={slide4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Resume;