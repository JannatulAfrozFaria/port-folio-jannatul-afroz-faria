import { Helmet } from "react-helmet-async";
import Title from "../Components/Title";
import slide1 from '../assets/images/resume/Slide1.jpg';
import slide2 from '../assets/images/resume/Slide2.jpg';
import slide3 from '../assets/images/resume/Slide3.jpg';
import slide4 from '../assets/images/resume/Slide4.jpg';


const CV = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = `/cv_jannatul_Afroz_Faria_Front_End_Developer.pdf`;
        link.download = 'cv_jannatul_Afroz_Faria_Front_End_Developer.pdf';
        link.click();
    }
    return (
        <div>
            <Helmet>
                <title>CV | Jannatul Afroz Faria</title>
            </Helmet>

            <Title title={'Curriculum Vitae of'} heading={'Jannatul Afroz Faria'} subHeading={'Web Developer'}></Title>
            <div className="mt-6 w-5/6 mx-auto text-center mb-6">
                <button className="btn btn-base w-72 " onClick={handleDownload}>Download CV</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 w-3/4 mx-auto">
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
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 w-3/4 mx-auto">
                <div className="shadow-lg shadow-yellow-600" >
                    <p className="text-yellow-600 card-title">Extra Curricular</p>
                    <p><span className="text-yellow-600 font-medium" >Title:</span> Smart Book Writer</p>
                    <p><span className="text-yellow-600 font-medium" >Organization: </span>10 Minute School</p>
                    <p> <span className="text-yellow-600 font-medium" >Timeline: </span> January 2019 – December 2019 </p>
                </div>
                <div className="shadow-lg shadow-yellow-600">
                    <p className="text-yellow-600">Achievements & Awards
                    <p><span className="text-yellow-600 font-medium" >Organization: </span>Biswa Shahitta Kendro</p>		 	  
                    </p>
                    <p> <span className="text-yellow-600 font-medium" >Timeline: </span> June, 2011</p>
                    <p> <span className="text-yellow-600 font-medium" >First Prize | </span> Writing Competition</p>
                    <p> <span className="text-yellow-600 font-medium" >Winning Prize : </span>Visiting <span className="green-text">2</span> countries of Asia : <span className="green-text">Nepal & India</span>.</p>
                </div>
            </div>
        </div>
    );
};

export default CV;