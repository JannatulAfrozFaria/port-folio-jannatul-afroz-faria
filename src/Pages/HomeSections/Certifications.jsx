import React from 'react';
import Title from '../../Components/Title';

const Certifications = () => {
    return (
        <div>
             <div data-aos="flip-up" data-aos-delay="1500" data-aos-duration="3000">
                    <Title heading={'Certifications'}></Title>
            </div>
            <div  className=" grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 ">
                <div data-aos="fade-up-right" data-aos-delay="200" data-aos-duration="3000"  className="shadow-lg shadow-yellow-600 card-body card-bordered rounded-3xl" >
                    <p className="text-yellow-600 card-title">Completion Certificate</p>
                    <p><span className="text-yellow-600 font-medium" >Course-Title :</span> Complete Web Development Course With Jhankar Mahbub</p>
                    <p><span className="text-yellow-600 font-medium" >Organization : </span>Programming Hero</p>
                    {/* <p> <span className="text-yellow-600 font-medium" >Timeline : </span> January 2019 – December 2019 </p> */}
                    <img src="https://i.postimg.cc/K8RVnpYX/PH.png" alt="Certificate of completion" />
                </div>
                <div data-aos="fade-up-left" data-aos-delay="200" data-aos-duration="3000" className="shadow-lg shadow-yellow-600 card-body card-bordered rounded-3xl">
                    <p className="text-yellow-600 card-title ">Award</p>
                    <p> <span className="text-yellow-600 font-medium" > Prize | </span> Black Belt</p>
                    <p><span className="text-yellow-600 font-medium" >Organization : </span>Programming Hero</p>
                    {/* <p> <span className="text-yellow-600 font-medium" >Winning Prize : </span>Visiting <span className="green-text">2</span> countries of Asia : <span className="green-text">Nepal & India</span>.</p>
                    <p> <span className="text-yellow-600 font-medium" >Timeline : </span> June, 2011</p> */}
                     <img src="https://i.postimg.cc/fWCg1Qtn/Black-Belt.jpg" alt="Certificate of black-belt" />
                </div>
            </div>
            <div className="flex justify-center mb-8">
                <div data-aos="fade-up-right" data-aos-delay="200" data-aos-duration="3000"  className="shadow-lg shadow-yellow-600 card-body card-bordered rounded-3xl" >
                    <p className="text-yellow-600 card-title">Certificate of Excellence</p>
                    <p><span className="text-yellow-600 font-medium" >Issued By :</span> English Language Club</p>
                    <p><span className="text-yellow-600 font-medium" >Organization : </span>Programming Hero</p>
                    {/* <p> <span className="text-yellow-600 font-medium" >Timeline : </span> January 2019 – December 2019 </p> */}
                    <img src="https://i.postimg.cc/K8RVnpYX/PH.png" alt="Certificate of completion" />
                </div>
            </div>
        </div>
    );
};

export default Certifications;