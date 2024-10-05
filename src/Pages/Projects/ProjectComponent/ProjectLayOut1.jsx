import React from 'react';
import UsedTechnology from '../../../Components/UsedTechnology';
import LinkButton from '../../../assets/Components/LinkButton';
import { FaGithub } from 'react-icons/fa';

const ProjectLayOut1 = ({image,name,description, feature1Title,feature1Des, feature2Title,feature2Des, feature3Title,feature3Des, LiveLink,ClientRepo,ServerRepo}) => {
    return (
        <div>
            <div data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="3000" className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-base-100 shadow-xl mb-6">
                <figure>
                    <img className="h-full"
                        src={image}
                        alt="Album" />
                </figure>
                <div className="card-body text-left md:text-justify">
                    <h2 className="card-title text-yellow-500 font-semibold">Project Name: {name}</h2>
                    <p className="text-lg text-yellow-500 font-medium">Description :</p>
                    <p>{description}</p>
                    <p className="text-lg font-medium text-yellow-500 ">Core Feature :</p>
                    <ul>
                        <li> <span className="text-gray-400 font-medium ">{feature1Title}: </span>{feature1Des}</li>
                        <li> <span className="text-gray-400 font-medium ">{feature2Title}: </span>{feature2Des}</li>
                        <li> <span className="text-gray-400 font-medium ">{feature3Title}: </span>{feature3Des}</li>
                    </ul>
                    {/* Technology----- */}
                    <p className="text-lg text-yellow-500 font-medium">Used Technology :</p>
                    <div>
                        <UsedTechnology></UsedTechnology>
                    </div>
                    {/* Project Links------ */}
                    <p className="text-lg text-yellow-500 font-medium">Project Links :</p>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                        <LinkButton text={'Live Link'} link={LiveLink} ></LinkButton>
                        <LinkButton text={'Client-Repository'} icon={<FaGithub />} link={ClientRepo} ></LinkButton>
                        <LinkButton text={'Server-Repository'} icon={<FaGithub />} link={ServerRepo} ></LinkButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectLayOut1;