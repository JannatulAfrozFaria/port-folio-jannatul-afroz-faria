import React from 'react';
import Title from '../../Components/Title';

const Certifications = () => {
    return (
        <div>
             <div data-aos="flip-up" data-aos-delay="1500" data-aos-duration="3000">
                    <Title heading={'Certifications'}></Title>
            </div>
            <div  className=" grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 w-3/4 mx-auto">
                <div data-aos="fade-up-right" data-aos-delay="200" data-aos-duration="3000"  className="shadow-lg shadow-yellow-600 card-body card-bordered rounded-3xl" >
                    <p className="text-yellow-600 card-title">Extra Curricular</p>
                    <p><span className="text-yellow-600 font-medium" >Title :</span> Smart Book Writer</p>
                    <p><span className="text-yellow-600 font-medium" >Organization : </span>10 Minute School</p>
                    <p> <span className="text-yellow-600 font-medium" >Timeline : </span> January 2019 – December 2019 </p>
                </div>
                <div data-aos="fade-up-left" data-aos-delay="200" data-aos-duration="3000" className="shadow-lg shadow-yellow-600 card-body card-bordered rounded-3xl">
                    <p className="text-yellow-600 card-title ">Achievements & Awards</p>
                    <p> <span className="text-yellow-600 font-medium" >First Prize | </span> Writing Competition</p>
                    <p><span className="text-yellow-600 font-medium" >Organization : </span>Biswa Shahitta Kendro</p>
                    <p> <span className="text-yellow-600 font-medium" >Winning Prize : </span>Visiting <span className="green-text">2</span> countries of Asia : <span className="green-text">Nepal & India</span>.</p>
                    <p> <span className="text-yellow-600 font-medium" >Timeline : </span> June, 2011</p>
                </div>
            </div>
        </div>
    );
};

export default Certifications;