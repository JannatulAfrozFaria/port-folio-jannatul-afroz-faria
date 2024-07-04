import { Helmet } from "react-helmet-async";
import schoolPhoto from '../assets/images/EDU/school1.jfif';
import school from '../assets/images/EDU/scl-logo.png';
import collegePhoto from '../assets/images/EDU/chittagong-college.jpeg';
import college from '../assets/images/EDU/college.png';
import university from '../assets/images/EDU/cuet3.jpg';
import grad from '../assets/images/EDU/grad.png';
import Title from "../Components/Title";


const Education = () => {
    return (
        <div className="mb-16">
            <Helmet>
                <title>Education | Jannatul Afroz Faria</title>
            </Helmet>
            <Title heading={'academic history'}></Title>
            <div className="grid grid-cols-1  gap-6">
                {/* School----name */}
                <div className="card card-side bg-base-100 shadow-xl border-2 border-yellow-500">
                    <figure>
                        <img className="w-[400px] h-[280px]"
                        src={schoolPhoto}
                        alt="School" />
                    </figure>
                    <div className="card-body text-left">
                        <div>
                            <img className="w-16" src={school} alt="" />
                        </div>
                        <h2 className="card-title">SSC</h2>
                        <div>
                            <p>School : Dr. Khastagir GOvt. Girls' High School</p>
                            <p>Passing Year: 2013</p>
                            <p>GPA: 5.00/5.00</p>
                        </div>
                    </div>
                </div>
                {/* College----name */}
                <div className="card card-side bg-base-100 shadow-xl border-2 border-yellow-500">
                    <figure>
                        <img className="w-[400px] h-[280px]"
                        src={collegePhoto}
                        alt="College" />
                    </figure>
                    <div className="card-body text-left">
                        <div>
                            <img className="w-16" src={college} alt="" />
                        </div>
                        <h2 className="card-title">HSC</h2>
                        <div>
                            <p>College : Chittagong College</p>
                            <p>Passing Year: 2015</p>
                            <p>GPA: 5.00/5.00</p>
                        </div>
                    </div>
                </div>
                {/* UNiversity----name */}
                <div className="card card-side bg-base-100 shadow-xl border-2 border-yellow-500">
                    <figure>
                        <img className="w-[300px]"
                            src={university}
                            alt="university" />
                    </figure>
                    <div className="card-body text-left">
                        <div>
                            <img className="w-16" src={grad} alt="" />
                        </div>
                        <h2 className="card-title">Graduation</h2>
                        <div>
                            <p>University:  Chittagong University of Engineering and Technology</p>
                            <p>Passing Year: 2022</p>
                            <p>GPA: 3.20/4.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;